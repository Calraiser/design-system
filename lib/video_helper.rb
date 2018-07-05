module MyAssetHandler
  class << self
    def registered(app)
      app.send :include, InstanceMethods
    end
    alias :included :registered
  end

module InstanceMethods
    def video_path(video_resource, type, width, height)
      video = data_uri("../../source/assets/video/#{video_resource}", "#{type}")
      %{<video width="#{width}" heigth="#{height}" autoplay controls="controls">
        <source src="#{video}" type="#{type}">
      }
    end
  end
end
