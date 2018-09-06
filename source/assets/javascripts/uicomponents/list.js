$(document).ready(function() {
  var table = $('.table');

  if (!table.length) {
    return false;
  }


  var table = $('.table').DataTable({
    paging: true,
    filter: false,
    info: false,
    iDisplayLength: 5,
    language: {
     paginate: {
     next:  <%= image_tag 'uicomponents/pagination/ic-single-arrow.svg' %>,
     previous: '<img src="/source/assets/images/uicomponents/pagination/ic-single-arrow.svg">',
    }
    },
    aoColumnDefs: [{
      "bSortable": false,
      "aTargets": [ 1 ]
      }]
  });

  $('.table tbody').on('click', 'tr', function() {
    if ($(this).hasClass('selected')) {
      $(this).removeClass('selected');
    } else {
      table.$('tr.selected').removeClass('selected');
      $(this).addClass('selected');
    }
  });

  // $('#button').click( function () {
  //     table.row('.selected').remove().draw( false );
  // } );
});
