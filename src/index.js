require('dotenv').config()

module.exports = function (app) {
  //import all routes
  require("./routes")(app);
};
