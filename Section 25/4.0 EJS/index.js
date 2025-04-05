import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

const d = new Date();
let day = d.getDay();

var day_of_week = "";
var saying = "";

function dayOfWeek(req, res, next) {
	if (day == 0 || day == 6) {
		day_of_week = "the weekend";
		saying = "it's time to have fun";
	} else {
		day_of_week = "a weekday";
		saying = "it's time to work hard";
	}
	next();
}
app.use(dayOfWeek);

app.get("/", (req, res) => {
	res.render("index.ejs", { day_of_week: day_of_week, saying: saying });
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
