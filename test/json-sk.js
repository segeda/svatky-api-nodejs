var assert = require("assert"),
	svatky = require("../svatky");

exports['GET /json?lang=sk&date=0102'] = function () {
	assert.response(svatky,
		{ url: '/json?lang=sk&date=0102', method: 'GET' },
		{ status: 200, headers: { 'Content-Type': 'application/json; charset=UTF-8' } },
		function (res) {
			assert.includes(res.body, '[{"date":"0102","name":"Tatiana"}]');
		});
};

exports['GET /json?lang=sk&name=Tatiana'] = function () {
	assert.response(svatky,
		{ url: '/json?lang=sk&name=Tatiana', method: 'GET' },
		{ status: 200, headers: { 'Content-Type': 'application/json; charset=UTF-8' } },
		function (res) {
			assert.includes(res.body, '[{"date":"0102","name":"Tatiana"}]');
		});
};

exports['GET /json?lang=sk&date=0111'] = function () {
	assert.response(svatky,
		{ url: '/json?lang=sk&date=0111', method: 'GET' },
		{ status: 200, headers: { 'Content-Type': 'application/json; charset=UTF-8' } },
		function (res) {
			assert.includes(res.body, '[{"date":"0111","name":"Denis"},{"date":"0111","name":"Denisa"}]');
		});
};
