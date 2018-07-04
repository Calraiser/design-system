require 'lib/static_d3_helpers.rb'
require 'lib/video_helper.rb'

helpers StaticD3Helpers
helpers MyAssetHandler

set :markdown_engine, :redcarpet
set :markdown, :fenced_code_blocks => true, :smartypants => true, input: 'GFM'

set :css_dir,     'assets/stylesheets'
set :fonts_dir,   'assets/fonts'
set :images_dir,  'assets/images'
set :js_dir,      'assets/javascripts'
set :pdf_dir,     'download/pdf'
set :data_dir,    'data'
set :video_dir,   'assets/video'

activate :autoprefixer
activate :livereload
activate :sprockets
activate :lunr
activate :syntax, :inline_theme => Rouge::Themes::Github.new

page '/*.xml',  layout: false
page '/*.json', layout: false
page '/*.txt',  layout: false

configure :build do
  activate :minify_css
  activate :minify_html, remove_input_attributes: false
  activate :minify_javascript
  activate :gzip
  activate :asset_hash
  activate :relative_assets

  set :relative_links, true
end

# Helpers
helpers do
  def nav_link(name, url, id, options={})
    options = {
      class: "",
      active_if: url,
      id: id,
      page: current_page.url,
    }.update options
    active_url = options.delete(:active_if)
    active = Regexp === active_url ? current_page.url =~ active_url : current_page.url == active_url
    options[:class] += " active" if active

    link_to name, url, options
  end

  def current_page?(path)
    current_page.url.chomp('/') == path.chomp('/')
  end


  def strip_trailing_zero(n)
  n.to_s.sub(/\.?0+$/, '')
end

  def active_class(page)
    current_page.url == page ? {:class => 'active'} : {}
  end
end
