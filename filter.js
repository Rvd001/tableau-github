//REPLACE
function filterSingleValue(){
    activeSheet.applyFilterAsync( //call activeSheet from create.js and parse your argument, the column to filter from and the values to filter to
        "Region",
        "The Americas",
        tableau.FilterUpdateType.REPLACE);
}
//OR
function filterRangeOfValues() {
    activeSheet.applyRangeFilterAsync(
      "F: GDP per capita (curr $)",
      {
        min: 40000,
        max: 60000
      },
      tableau.FilterUpdateType.REPLACE);
  }      
//You can filter by add(no matter what it shows, shows the values we are passing in), replace(no matter what its showing now, just show the values we are passing in) or remove(no matter what it shows, it doesn't show that one value)

//ADD
function addValuesToFilter() {
    activeSheet.applyFilterAsync(
      "Region",
      ["Europe", "Middle East"],
      tableau.FilterUpdateType.ADD);
  }



//REMOVE
function removeValuesFromFilter() {
    activeSheet.applyFilterAsync(
      "Region",
      "Europe",
      tableau.FilterUpdateType.REMOVE);
  }  
  
  //CLEAR FILTERS
  function clearFilters() {
    activeSheet.clearFilterAsync("Region");
    activeSheet.clearFilterAsync("F: GDP per capita (curr $)");
  } 