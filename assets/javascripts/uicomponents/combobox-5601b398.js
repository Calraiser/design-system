$(document).ready(function(){$("select").each(function(){var e=$(this),t=$(this).children("option").length;e.addClass("select-hidden"),e.wrap('<div class="select"></div>'),e.after('<div class="select-styled"></div>');var i=e.next("div.select-styled");i.text(e.children("option").eq(0).text());for(var s=$("<ul />",{"class":"select-options"}).insertAfter(i),l=0;l<t;l++)$("<li />",{text:e.children("option").eq(l).text(),rel:e.children("option").eq(l).val()}).appendTo(s);"disabled"==e.attr("disabled")&&i.addClass("disabled");var a=s.children("li");i.click(function(t){if(t.stopPropagation(),"disabled"==e.attr("disabled"))return!1;$("div.select-styled.active").not(this).each(function(){$(this).removeClass("active").next("ul.select-options").hide()}),$(this).toggleClass("active").next("ul.select-options").toggle()}),a.click(function(t){t.stopPropagation(),i.text($(this).text()).removeClass("active"),e.val($(this).attr("rel")),s.hide()}),$(document).click(function(){i.removeClass("active"),s.hide()})})});