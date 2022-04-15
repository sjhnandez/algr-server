const express = require("express");

var app = express();

app.set("port", process.env.PORT);

/* app.use(morgan("combined")); */

app.listen(app.get("port"), () => {
  /* eslint-disable no-console */
  console.log("auth-service is running at localhost:" + app.get("port"));
  /* eslint-enable no-console */
});
