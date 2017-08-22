var assert = require("assert"),
	svatky = require("../svatky");

exports['GET /txt?lang=sk&date=0102'] = function () {
	assert.response(svatky,
		{ url: '/txt?lang=sk&date=0102', method: 'GET' },
		{ status: 200, headers: { 'Content-Type': 'text/plain; charset=UTF-8' } },
		function (res) {
			assert.includes(res.body, '0102;Tatiana');
		});
};

exports['GET /txt?lang=sk&name=Tatiana'] = function () {
	assert.response(svatky,
		{ url: '/txt?lang=sk&name=Tatiana', method: 'GET' },
		{ status: 200, headers: { 'Content-Type': 'text/plain; charset=UTF-8' } },
		function (res) {
			assert.includes(res.body, '0102;Tatiana');
		});
};

exports['GET /txt?lang=sk&date=0111'] = function () {
	assert.response(svatky,
		{ url: '/txt?lang=sk&date=0111', method: 'GET' },
		{ status: 200, headers: { 'Content-Type': 'text/plain; charset=UTF-8' } },
		function (res) {
			assert.includes(res.body, '0111;Denis');
			assert.includes(res.body, '0111;Denisa');
		});
};
