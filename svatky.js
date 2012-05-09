var http = require("http"),
	url = require("url"),
	fs = require('fs'),
	cs = require('./cs'),
	sk = require('./sk');

function format_datetime(datetime) {
	var week_days = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
	var months = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec");

	var datetime_formated = week_days[datetime.getDay()];
	datetime_formated += ", ";
	datetime_formated += datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
	datetime_formated += " ";
	datetime_formated += months[datetime.getMonth()];
	datetime_formated += " ";
	datetime_formated += datetime.getFullYear();
	datetime_formated += " 00:00:00 GMT";

	return datetime_formated;
}

function set_headers(format, request, response, last_modified, date_delta) {
	last_modified.setHours(0);
	last_modified.setMinutes(0);
	last_modified.setSeconds(0);
	last_modified.setMilliseconds(0);

	var expires = new Date(last_modified.getTime() + date_delta * 24 * 60 * 60 * 1000);

	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Last-Modified", format_datetime(last_modified));
	response.setHeader("Cache-Control", "max-age=600");
	response.setHeader("Expires", format_datetime(expires));

	if (typeof request.headers["if-modified-since"] === "string" && (new Date(request.headers["if-modified-since"])).getTime() >= last_modified.getTime()) {
		response.writeHead(304);
		response.end();

		return false;
	} else {
		response.writeHead(200, { "Content-Type": format + "; charset=UTF-8" });

		return true;
	}
}

function get_svatky(request) {
	var querystring = url.parse(request.url, true);

	var lang = cs;
	if (querystring.query["lang"] === "sk") {
		lang = sk;
	}

	if (querystring.query["name"]) {
		return lang.who(querystring.query["name"])
	}

	if (querystring.query["date"]) {
		return lang.when(querystring.query["date"])
	}

	var now = new Date();

	return lang.when((now.getDate() < 10 ? "0" : "") + now.getDate() + ((now.getMonth() + 1) < 10 ? "0" : "") + (now.getMonth() + 1));	
}

function index(request, response) {
	fs.readFile('index.html', function (error, data) {
		if (error) {
			response.writeHead(500, { "Content-Type": "text/plain" });
			response.write(error);
			response.end();
		} else {
			if (set_headers("text/html", request, response, new Date(2011, 11, 1), 365)) {
				response.write(data);
				response.end();
			}
		}
	});
}

function txt(request, response) {
	if (set_headers("text/plain", request, response, new Date(), 1)) {

		var svatky = get_svatky(request);

		for (var svatek in svatky) {
			response.write(svatky[svatek].date + ";" + svatky[svatek].name + "\n");
		}

		response.end();
	}
}

function xml(request, response) {
	if (set_headers("text/xml", request, response, new Date(), 1)) {

		response.write("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
		response.write("<svatky>");

		var svatky = get_svatky(request);

		for (var svatek in svatky) {
			response.write("<svatek><date>" + svatky[svatek].date + "</date><name>" + svatky[svatek].name + "</name></svatek>");
		}

		response.write("</svatky>");

		response.end();
	}
}

function json(request, response) {
	if (set_headers("application/json", request, response, new Date(), 1)) {

		var svatky = get_svatky(request);

		response.write(JSON.stringify(svatky));
		response.end();
	}
}

function onRequest(request, response) {
	var pathname = url.parse(request.url).pathname;
	switch(pathname) {
		case "/":
			index(request, response);
			break;
		case "/txt":
			txt(request, response);
			break;
		case "/xml":
			xml(request, response);
			break;
		case "/json":
			json(request, response);
			break;
		default:
			response.writeHead(404, {"Content-Type": "text/plain"});
			response.write("404 Not found");
			response.end();
	}
}

var server = module.exports = http.createServer(onRequest);
var port = process.env.PORT || 8888;
server.listen(port);
