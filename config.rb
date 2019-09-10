
set :markdown_enginge, :redcarpet
set :markdown, fenced_code_blocks: true
set :haml, { ugly: true }

set :css_dir,     'assets/stylesheets'
set :fonts_dir,   'assets/fonts'
set :images_dir,  'assets/images'
set :js_dir,      'assets/javascripts'
set :pdf_dir,     'download/pdf'
set :data_dir,    'data'
set :video_dir,   'assets/video'

activate :autoprefixer
activate :livereload
activate :lunr
activate :syntax, :inline_theme => Rouge::Themes::Github.new
# activate :sprockets

# activate :google_analytics do |ga|
#   ga.tracking_id = 'UA-127480418-2'
# end


activate :external_pipeline,
 name: :webpack,
 command: build? ?  "yarn run build" : "yarn run start",
 source: ".tmp/dist",
 latency: 1

activate :navtree do |options|
  options.automatic_tree_updates = false # The tree.yml file will be updated automatically when source files are changed.
  options.data_file = 'title.yml' # The data file where our navtree is stored.
  options.ignore_dir = ['assets'] # An array of directories we want to ignore when building our tree.
end

# activate :middleman_scavenger do |config|
#   config.path = "./source/assets/images/icons/"
#   config.prefix = "ic-"
#   config.sprite_path = "/assets/images/sprites.svg"
# end

page '/*.xml',  layout: false
page '/*.json', layout: false
page '/*.txt',  layout: false
page '/source/404.html', directory_index: false

configure :build do
  activate :minify_css
  activate :minify_html, remove_input_attributes: false
  activate :minify_javascript
  activate :gzip
  activate :asset_hash
  activate :relative_assets

  # set :relative_links, true
end

# Helpers
helpers do

  def previous_link(sourcetree)
    pagelist = flatten_source_tree(sourcetree)
    position = get_current_position_in_page_list(pagelist)
    # Skip link generation if position is nil (meaning, the current page isn't in our
    # pagination pagelist).
    if position
      prev_page = pagelist[position - 1]
      options = {:class => "previous"}
      unless first_page?(pagelist)
        link_to(File.basename(prev_page,File.extname(prev_page)).split('_'), prev_page, options)
      end
    end
  end

  def next_link(sourcetree)
    pagelist = flatten_source_tree(sourcetree)
    position = get_current_position_in_page_list(pagelist)
    # Skip link generation if position is nil (meaning, the current page isn't in our
    # pagination pagelist).
    if position
      next_page = pagelist[position + 1]
      options = {:class => "next"}
      unless last_page?(pagelist)
        link_to(File.basename(next_page,File.extname(next_page)).split('_'), next_page, options)
      end
    end
  end

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
