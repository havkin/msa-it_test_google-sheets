function doGet(e){
   const sheet = SpreadsheetApp.openById("1tF8jCgbztdCldv0KiP_JxYXmyo4US3vwgwXZ8EeKS0c");

   //n - количество записей, храним в ячейке А1
   const n = sheet.getRange("A1").getValue();

   sheet.getRange(`B${n + 1}`).setValue(e.parameter.p1);
   sheet.getRange(`C${n + 1}`).setValue(e.parameter.p2);
   sheet.getRange("A1").setValue(n + 1);
 }