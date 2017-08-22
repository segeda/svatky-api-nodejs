var assert = require("assert"),
	svatky = require("../svatky");

exports['GET /json?lang=cs&date=0102'] = function () {
	assert.response(svatky,
		{ url: '/json?lang=cs&date=0102', method: 'GET' },
		{ status: 200, headers: { 'Content-Type': 'application/json; charset=UTF-8' } },
		function (res) {
			assert.includes(res.body, '[{"date":"0102","name":"Hynek"}]');
		});
};

exports['GET /json?lang=cs&name=Hynek'] = function () {
	assert.response(svatky,
		{ url: '/json?lang=cs&name=Hynek', method: 'GET' },
		{ status: 200, headers: { 'Content-Type': 'application/json; charset=UTF-8' } },
		function (res) {
			assert.includes(res.body, '[{"date":"0102","name":"Hynek"}]');
		});
};

exports['GET /json?lang=cs&date=0109'] = function () {
	assert.response(svatky,
		{ url: '/json?lang=cs&date=0109', method: 'GET' },
		{ status: 200, headers: { 'Content-Type': 'application/json; charset=UTF-8' } },
		function (res) {
			assert.includes(res.body, '[{"date":"0109","name":"Linda"},{"date":"0109","name":"Samuel"}]');
		});
};

exports['GET /json?lang=cs&name=Petr'] = function () {
	assert.response(svatky,
		{ url: '/json?lang=cs&name=Petr', method: 'GET' },
		{ status: 200, headers: { 'Content-Type': 'application/json; charset=UTF-8' } },
		function (res) {
			assert.includes(res.body, '[{"date":"2202","name":"Petr"},{"date":"2906","name":"Petr"}]');
		});
};
