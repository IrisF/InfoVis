App.CsvReader = (function() {
    var that = {},
        csv = null,
   
    init = function() {

    var file = "file:///C://Users/Iris/Documents/InfoVis/res/csv/aerztedichte.csv";  
    readTextFile(file);
    parseCsvToArray();

      return that;        
    },

    readTextFile = function(file){
      var rawFile = new XMLHttpRequest();
      rawFile.open("GET", file, false);
      rawFile.onreadystatechange = function (){
        if(rawFile.readyState === 4){
          if(rawFile.status === 200 || rawFile.status == 0){
            var allText = rawFile.responseText;
            csv = allText;
            alert(allText);
          }
        }
      }
      rawFile.send(null);
    },

    parseCsvToArray = function(){
     Papa.parse(csv, {
        complete: function(results) {
         console.log("Finished:", results.data);
        }
     });
    };

    that.init = init;

  return that;
})();