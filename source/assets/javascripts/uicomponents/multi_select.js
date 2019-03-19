

$(document).ready(function() {
  $('.multi').multi_select({
    selectColor: 'purple',
    selectSize: 'small',
    selectText: 'Select Project',
    duration: 300,
    easing: 'slide',
    listMaxHeight: '100%',
    selectedCount: 2,
    sortByText: true,
    fillButton: true,
    data: {
      "BD": "Bangladesh",
      "BE": "Belgium",
      "BF": "Burkina Faso",
      "BG": "Bulgaria",
      "BA": "Bosnia and Herzegovina",
      "BB": "Barbados",
      "WF": "Wallis and Futuna",
      "BL": "Saint Barthelemy",
      "BM": "Bermuda",
    },
    onSelect: function(values) {
      console.log('return values: ', values);
    }
    });
  });
