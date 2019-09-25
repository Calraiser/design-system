module CommonHelper
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
