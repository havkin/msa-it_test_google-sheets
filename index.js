const { google } = require("googleapis");
const sheets = google.sheets({
  version: "v4",
  auth: "API_KEY",
});

function listMajors(auth) {
  sheets.spreadsheets.values.get(
    {
      spreadsheetId: "1mH4CGePt1f_wRziNZHUhFxVgIgUCn486z0btDbsDq-s",
      range: "Roles!A3:C",
    },
    (err, res) => {
      if (err) {
        console.error("The API returned an error.");
        throw err;
      }
      const rows = res.data.values;
      if (rows.length === 0) {
        console.log("No data found.");
      } else {
        for (const row of rows) {
          // Print columns A and E, which correspond to indices 0 and 4.
          console.log(`${row[0]}, ${row[1]}`);
        }
      }
    }
  );
}

listMajors();
