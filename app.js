var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const cors = require("cors");

const db = require("./utils/database");
// const testDB = require("./utils/test-db");
// const testDB = require('./utils/midterm_test_96');

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

const cardRouter_96 = require("./routes/card_96");
const card2Router_96 = require("./routes/card2_96");

const card2ApiRouter_96 = require("./routes/api/apiCard2Router_96");

const apiMidtermRouter_96 = require('./routes/api/apiMidtermRouter_96');
const apiMidprepRouter_96 = require('./routes/api/apiMidprepRouter_96');

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.use("/card_96", cardRouter_96);
app.use("/card2_96", card2Router_96);
app.use("/api/card2_96", card2ApiRouter_96);

// MID EXAM
app.use('/api/mid_96', apiMidtermRouter_96);
app.use('/api/midprep_96', apiMidprepRouter_96);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
