module.exports = function (app) {
  //web common routes
  app.use("/stripe", require("./stripe"));

  //middleware
  app.use((req, res, next) => {
    const err = new Error("Routes Not Found");
    err.status = 404;
    next(err);
  });

  //err handler
  app.use((err, req, res, next) => {
    res.status(err.status || 500).send({
      success: 0,
      message: err.message,
    });
  });
};
