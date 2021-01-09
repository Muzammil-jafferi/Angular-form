import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

let app = express();

app.use(bodyParser.json({ limit: "1mb" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

require("./routes").default(app);

app.listen(4000, function () {
  console.log(`APP LISTENING ON PORT 4000!`);
});