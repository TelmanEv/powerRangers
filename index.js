/*
    Import modules
*/
const express = require("express");
const app = express();
const logger = require("morgan");
const path = require("path");



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// Allow the views to read CSS files from the public
app.use(express.static(path.join(__dirname, "public")));
// Allow smooth useage of URLs, JSON, and see requests in the console
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));


const indexRouter = require("./routes/indexRouter");

app.use("/", indexRouter);


const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}....`);
});