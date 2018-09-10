$(document).ready(function() {
  var table = $('.table');

  if (!table.length) {
    return false;
  }

  table.append(
    '<caption class="table-caption bx--type-legend" style="caption-side: bottom">On/Off Legend</caption>');

  var table = $('.table').DataTable({
    paging: true,
    filter: false,
    info: false,
    iDisplayLength: 11,
    fixedColumns: false,
    language: {
     paginate: {
     next: '<img src="/assets/images/uicomponents/pagination/ic-single-arrow.svg">',
     previous: '<img src="/assets/images/uicomponents/pagination/ic-single-arrow.svg">',
      }
    },
    aoColumnDefs: [
      {"bSortable": false, "aTargets": [1]},
      {"width": "55px", "targets": [0]},
      {"width": "20px", "targets": [1]}
    ]
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
