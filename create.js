function initializeViz(){
    var placeholderDiv = document.getElementById("tableauViz");//from my div tag
    var url = "https://public.tableau.com/views/WorldIndicators/GDPpercapita";
    var options = {   //javascript object to contain how viz should be loaded
        width: placeholderDiv.offsetWidth,
        height:placeholderDiv.offsetHeight,
        hideTabs: true,
        hideToolbar: true,
        onFirstInteractive: function(){
            workbook = viz.getWorkbook();
            activeSheet = workbook.getActiveSheet();
        
    }
};
viz = new tableau.Viz(placeholderDiv, url, options);
}

function vizFilter(filterName, filterValue, filterType){
    sheet = viz.getWorkbook().getActiveSheet();
    if(sheet.getSheetType() == 'worksheet')
    {
        sheet.applyFilterAsync(filterName, filterValue, filterType);
    }
    else{
        worksheetArray = sheet.getWorksheets();
        for (var i=0; i < worksheetArray.length; i++){
            worksheetArray[i].applyFilterAsync(filterName, filterValue, filterType)
        }
    }
}
