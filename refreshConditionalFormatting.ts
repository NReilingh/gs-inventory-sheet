function refreshConditionalFormatting() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  
  var newRule = ruleMaker(sheet);
  
  function criteria(value) {
    var firstRow = sheet.getDataRange().offset(0, 0, 1);
    var finder = firstRow.createTextFinder("Status");
    return '=$' + finder.findNext().getA1Notation() + '="' + value + '"';
  }
  
  sheet.setConditionalFormatRules([
    newRule(criteria("Active"), "#B7E1CD"),
    newRule(criteria("Inventory"), "#FCE8B2"),
    newRule(criteria("Work Order"), "#F4C7C3"),
    newRule(criteria("Unmanaged"), "#D9D9D9")
  ]);
}

function ruleMaker(forSheet) {
  var dataRange = forSheet.getDataRange();
  return function newRule(criteria, background) {
    return SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied(criteria)
    .setBackground(background)
    .setRanges([dataRange])
    .build();
  };
}
