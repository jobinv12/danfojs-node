var dfd = require("danfojs-node");

function loadData() {
  dfd.read_csv("AAPL_daily_update.csv").then((df) => {
    var layout1 = {
      title: "APPL Finance",
    };
    var layout2 = {
      title: "APPL Finance(Open, Close)",
    };
    // display all columns
    df.plot("div1").line({ layout: layout1 });

    // displays specfied columns
    df.plot("div2").line({ columns: ["Open", "Close"], layout: layout2 });
  });
}
