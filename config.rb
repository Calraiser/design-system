
# Import custom libraries and helpers
require "helpers/common_helpers"
helpers CommonHelper

activate :syntax, :inline_theme => Rouge::Themes::Github.new
activate :lunr

activate :navtree do |options|
 options.automatic_tree_updates = false # The tree.yml file will be updated automatically when source files are changed.
 options.data_file = 'title.yml' # The data file where our navtree is stored.
 options.ignore_dir = ['assets'] # An array of directories we want to ignore when building our tree.
end


# Slim HTML
# ----------------------------------------------
::Slim::Engine.set_options :format  => :html

# i18n
# ----------------------------------------------
activate :i18n, :mount_at_root => :'en'

# Webpack
# ----------------------------------------------
activate :external_pipeline,
  name: :webpack,
  command: build? ?  "yarn run build" : "yarn run start",
  source: ".tmp/dist",
  latency: 1

# Configure assets directories
# ----------------------------------------------
set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/images'
set :fonts_dir, 'assets/fonts'


# Other configurations
# ----------------------------------------------
set :trailing_slash, false

# Sitemap
# ----------------------------------------------
page "/sitemap.xml", :layout => false

# Livereload
# ----------------------------------------------
configure :development do
  activate :livereload, :no_swf => true
end


# Development-specific configuration
# ----------------------------------------------
configure :development do
  activate :directory_indexes

  set :debug_assets, true

  # Output a pretty html
  ::Slim::Engine.set_options :pretty => true
end

# Build-specific configuration
# ----------------------------------------------
configure :build do
  # Use relative URLs
  activate :directory_indexes

  # Add asset fingerprinting to avoid cache issues
  activate :asset_hash
end
