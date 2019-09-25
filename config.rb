
# Import custom libraries and helpers
require "helpers/common_helpers"
helpers CommonHelper


set :markdown_enginge, :redcarpet
set :markdown, fenced_code_blocks: true
set :haml, { ugly: true }

# Load Sass from node_modules
config[:sass_assets_paths] << File.join(root, 'node_modules')

set :css_dir,    'assets/stylesheets'
set :js_dir,     'assets/javascripts'
set :images_dir, 'assets/images'

# page '/*.xml', layout: false
# page '/*.json', layout: false
# page '/*.txt', layout: false

activate :syntax, :inline_theme => Rouge::Themes::Github.new
activate :lunr

activate :external_pipeline,
   name: :webpack,
   command: build? ?
     'npm run build' :
     'npm run start',
   source: ".tmp/dist",
   latency: 1

activate :navtree do |options|
 options.automatic_tree_updates = false # The tree.yml file will be updated automatically when source files are changed.
 options.data_file = 'title.yml' # The data file where our navtree is stored.
 options.ignore_dir = ['assets'] # An array of directories we want to ignore when building our tree.
end

configure :development do
  set      :debug_assets, true
  activate :livereload
  activate :pry
end

configure :build do
  set      :relative_links, true
  activate :asset_hash, ignore: [/\.jpg\Z/, /\.png\Z/, /\.svg\Z/]
  activate :gzip
  # activate :minify_css
  # activate :minify_html
  activate :relative_assets
end
