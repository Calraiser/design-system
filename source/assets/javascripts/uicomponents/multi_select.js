$(document).ready(function() {
  $(".multi").multi_select({
    selectColor: "purple",
    selectSize: "small",
    selectText: "Select Project",
    listMaxHeight: "100%",
    selectedCount: 2,
    sortByText: false,
    fillButton: false,
    data: {
      BD: "Bangladesh",
      BE: "Belgium",
      BF: "Burkina Faso",
      BG: "Bulgaria",
      BA: "Bosnia and Herzegovina",
      BB: "Barbados",
      WF: "Wallis and Futuna",
      BL: "Saint Barthelemy",
      BM: "Bermuda"
    }
  });
});
