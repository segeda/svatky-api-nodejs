var assert = require("assert"),
	svatky = require("../svatky");

exports['GET /txt?date=0102'] = function() {
	assert.response(svatky,
		{ url: '/txt?date=0102', method: 'GET'},
		{ status: 200, headers: { 'Content-Type': 'text/plain; charset=UTF-8' }},
		function(res){
			assert.includes(res.body, '0102;Hynek');
		});
};

exports['GET /txt?name=Hynek'] = function() {
	assert.response(svatky,
		{ url: '/txt?name=Hynek', method: 'GET'},
		{ status: 200, headers: { 'Content-Type': 'text/plain; charset=UTF-8' }},
		function(res){
			assert.includes(res.body, '0102;Hynek');
		});
};

exports['GET /txt?date=0109'] = function() {
	assert.response(svatky,
		{ url: '/txt?date=0109', method: 'GET'},
		{ status: 200, headers: { 'Content-Type': 'text/plain; charset=UTF-8' }},
		function(res){
			assert.includes(res.body, '0109;Linda');
			assert.includes(res.body, '0109;Samuel');
		});
};

exports['GET /txt?name=Petr'] = function() {
	assert.response(svatky,
		{ url: '/txt?name=Petr', method: 'GET'},
		{ status: 200, headers: { 'Content-Type': 'text/plain; charset=UTF-8' }},
		function(res){
			assert.includes(res.body, '2202;Petr');
			assert.includes(res.body, '2906;Petr');
		});
};
