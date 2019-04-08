/*
Reference: http://jsfiddle.net/BB3JK/47/
*/
$(document).ready(function(){
  $('select').each(function(){
      var $this = $(this),
          numberOfOptions = $(this).children('option').length;

      $this.addClass('select-hidden');
      $this.wrap('<div class="select"></div>');
      $this.after('<div class="select-styled"></div>');

      var $styledSelect = $this.next('.select-styled');
      $styledSelect.text($this.children('option').eq(0).text());

      var $list = $('<ul />', {
          'class': 'select-options'
      }).insertAfter($styledSelect);

      for (var i = 0; i < numberOfOptions; i++) {
          $('<li />', {
              text: $this.children('option').eq(i).text(),
              rel: $this.children('option').eq(i).val()
          }).appendTo($list);
      }

      if($this.attr('disabled') == "disabled" ) {
        $styledSelect.addClass('disabled');
      }

      var $listItems = $list.children('li');

      $styledSelect.click(function(e) {
          e.stopPropagation();

          if($this.attr('disabled') == "disabled" ) {
            return false;
          }
          $('div.select-styled.active').not(this).each(function(){
              $(this).addClass('active').next('ul.select-options').hide();
          });
          $(this).next('ul.select-options').toggle();
          $(this).toggleClass('open');
      });

      $listItems.click(function(e) {
          e.stopPropagation();
          $styledSelect.text($(this).text()).addClass('active');
          $this.val($(this).attr('rel'));
          $list.hide();
          //console.log($this.val());
      });
  });
});
