var path = require("path");

module.exports = function (app) {
  app.get("/", function (req, res) {
    debugger;
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/exercise", function (req, res) {
    debugger;
    console.log("path is ", path.join(__dirname, "../public/exercise.html"));
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};
