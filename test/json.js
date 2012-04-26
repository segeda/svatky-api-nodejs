var assert = require("assert"),
	svatky = require("../svatky");

exports['GET /json?date=0102'] = function() {
	assert.response(svatky,
		{ url: '/json?date=0102', method: 'GET'},
		{ status: 200, headers: { 'Content-Type': 'application/json; charset=UTF-8' }},
		function(res){
			assert.includes(res.body, '[{"date":"0102","name":"Hynek"}]');
		});
};

exports['GET /json?name=Hynek'] = function() {
	assert.response(svatky,
		{ url: '/json?name=Hynek', method: 'GET'},
		{ status: 200, headers: { 'Content-Type': 'application/json; charset=UTF-8' }},
		function(res){
			assert.includes(res.body, '[{"date":"0102","name":"Hynek"}]');
		});
};

exports['GET /json?date=0109'] = function() {
	assert.response(svatky,
		{ url: '/json?date=0109', method: 'GET'},
		{ status: 200, headers: { 'Content-Type': 'application/json; charset=UTF-8' }},
		function(res){
			assert.includes(res.body, '[{"date":"0109","name":"Linda"},{"date":"0109","name":"Samuel"}]');
		});
};

exports['GET /json?name=Petr'] = function() {
	assert.response(svatky,
		{ url: '/json?name=Petr', method: 'GET'},
		{ status: 200, headers: { 'Content-Type': 'application/json; charset=UTF-8' }},
		function(res){
			assert.includes(res.body, '[{"date":"2202","name":"Petr"},{"date":"2906","name":"Petr"}]');
		});
};
