$(document).ready(function(){var e=$(".sidebar-menu > li"),n=$(".o-sidebar-submenu"),i=n.find(".close"),t=$(".main-content"),a="menu-open";if(!e.length)return!1;e.on("click","a",function(i){i.preventDefault(),n.filter("."+this.id).trigger("togglePanel"),e.removeClass("active"),$(this).parent().addClass("active")}),n.on("togglePanel",function(){var e=$(this),i=n.filter(":visible").not(e);i.length?i.one("panelHidden",function(){e.is(":visible")?e.trigger("hidePanel"):e.trigger("showPanel")}).trigger("hidePanel"):e.is(":visible")?e.trigger("hidePanel"):e.trigger("showPanel")}).on("hidePanel",function(){var e=$(this);e.animate({width:"hide"},800,function(){e.trigger("panelHidden")}),e.removeClass("active"),t.removeClass(a),t.parent().removeClass("open")}).on("showPanel",function(){var e=$(this);e.animate({width:"show"},800,function(){e.trigger("panelShown")}),e.addClass("active"),t.addClass(a),t.parent().addClass("open")}),i.on("click",function(){$(this).closest(n).trigger("togglePanel"),e.find("a").removeClass("active")})});