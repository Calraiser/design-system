/*
Reference: http://jsfiddle.net/BB3JK/47/
*/

$(document).ready(function(){

  $('.btn_dropdown').each(function() {

      var $this = $(this),
          numberOfOptions = $(this).children('option').length;

      $this.addClass('select-hidden');
      $this.wrap('<div class="btn-select"></div>');
      $this.after('<div class="btn-styled"></div>');


      var $styledSelect = $this.next('.btn-styled');
      $styledSelect.text($this.children('option').eq().val());


      var $list = $('<ul />', {
          'class': 'select-options'
      })

      $('.btn-select').each(function(){
        $list.insertAfter($styledSelect);
      })

      for (var i = 0; i < numberOfOptions; i++) {
          $('<li />', {
              text: $this.children('option').eq(i).text(),
              rel: $this.children('option').eq(i).val()
          }).appendTo($list);
      }

      var $listItems = $list.children('li');

      $styledSelect.click(function(e) {
          e.stopPropagation();

          $('div.btn-styled.active').not(this).each(function(){
              $(this).removeClass('active').next('ul.select-options').hide();
          });
          $(this).toggleClass('active').next('ul.select-options').toggle();
      });

      $listItems.click(function(e) {
          e.stopPropagation();

          $(this).each(function(){
            $(this).up(4).find('.btn_link a')
              .attr('href', $(this).attr('rel'))
              .text($(this).text());
            })

          $styledSelect.removeClass('active');
          $list.hide();

      });

      // $(document).on('click', function() {
      //     $styledSelect.removeClass('active');
      //     $list.hide();
      // });

  });
});
