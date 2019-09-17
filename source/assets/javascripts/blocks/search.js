$(function() {
    function e(e) {
      r ? e() : $.getJSON("/search.json", function(n) {
          r = lunr.Index.load(n.index), c = n.map, e()
      })
    }
    function n(n) {
      e(function() {
        var e = r.search(n);
        $(".searchbar .content-search .result").remove(),
        e.length > 0 ? (s = e.length, o = 0, e.forEach(function(e, n) {
            var t = $('<div class="result"/>'),
                r = $('<a href ="' + e.ref + '">').appendTo(t);
            r.append('<h3 class="title">' + (n + 1) + ". " + c[e.ref].page_title + "</h3>"), r.append('<p class="description">' + c[e.ref].description + "</p>"), t.mouseover(function() {
                o = $(".searchbar .content-search .result").index(this), a()
            }), t.appendTo(".searchbar .content-search")
        }), a()) : $('<div class="result"/>')
        .append('<p class="u-pb-4">We’re sorry! We can’t find any matches for your search term.</p>')
        .append('<p>What can you do?</p>')
        .append('<ul class="e-list"><li>Make sure that all the words are spelled correctly</li><li>Try using a different keyword</li></ul>')
        .appendTo(".searchbar .content-search"),
        $(".searchbar").show()
      })
    }

    function a() {
      var e = $(".searchbar .content-search .result");
      e.removeClass("active"),
      $(e.get(o)).addClass("active")
    }

    function t() {
      var e = $($(".searchbar .content-search .result").get(o)).find("a").attr("href");
      e && (window.location = e)
    }
    var r = null,
      c = null,
      o = null,
      s = null;
  $(".searchbar").hide(),

  $(".search").keyup(function(e) {
      var r = $(this).val();
      40 == e.keyCode ? (o++, o >= s && (o = 0), a()) : 38 == e.keyCode ? (o--, 0 > o && (o = s - 1), a()) : 13 == e.keyCode ? t() : 27 == e.keyCode ? $(".searchbar").hide() : r.length > 0 ? n(r) : $(".searchbar").hide()
  }).focus()
});
