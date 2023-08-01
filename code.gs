function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate();
}

function getPlayerData(playerSheetName) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(playerSheetName);
  var data = sheet.getRange(2, 1, sheet.getLastRow()-1, sheet.getLastColumn()).getValues();
  return aggregateData(data); // returns the aggregated data for the player
}

function aggregateData(data) {
  var aggregatedData = [];
  for (var i = 0; i < data.length; i++) {
    var gameNumber = i + 1;
    var rowData = data[i];
    var timesAtBat = rowData[0];
    var hits = rowData[1];
    var battingAverage = rowData[2];
    var onBase = rowData[3];
    var onBaseAverage = rowData[4];
    var rbis = rowData[5];
    var runsScored = rowData[6];
    var strikeouts = rowData[7];
    var walks = rowData[8];

    aggregatedData.push([gameNumber, timesAtBat, hits, battingAverage, onBase, onBaseAverage, rbis, runsScored, strikeouts, walks]);
  }
  return aggregatedData;
}
