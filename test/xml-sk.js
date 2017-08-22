var assert = require("assert"),
	svatky = require("../svatky");

exports['GET /xml?lang=sk&date=0102'] = function () {
	assert.response(svatky,
		{ url: '/xml?lang=sk&date=0102', method: 'GET' },
		{ status: 200, headers: { 'Content-Type': 'text/xml; charset=UTF-8' } },
		function (res) {
			assert.includes(res.body, '<?xml version="1.0" encoding="UTF-8"?>');
			assert.includes(res.body, '<svatky>');
			assert.includes(res.body, '<svatek><date>0102</date><name>Tatiana</name></svatek>');
			assert.includes(res.body, '</svatky>');
		});
};

exports['GET /xml?lang=sk&name=Tatiana'] = function () {
	assert.response(svatky,
		{ url: '/xml?lang=sk&name=Tatiana', method: 'GET' },
		{ status: 200, headers: { 'Content-Type': 'text/xml; charset=UTF-8' } },
		function (res) {
			assert.includes(res.body, '<?xml version="1.0" encoding="UTF-8"?>');
			assert.includes(res.body, '<svatky>');
			assert.includes(res.body, '<svatek><date>0102</date><name>Tatiana</name></svatek>');
			assert.includes(res.body, '</svatky>');
		});
};

exports['GET /xml?lang=sk&date=0111'] = function () {
	assert.response(svatky,
		{ url: '/xml?lang=sk&date=0111', method: 'GET' },
		{ status: 200, headers: { 'Content-Type': 'text/xml; charset=UTF-8' } },
		function (res) {
			assert.includes(res.body, '<?xml version="1.0" encoding="UTF-8"?>');
			assert.includes(res.body, '<svatky>');
			assert.includes(res.body, '<svatek><date>0111</date><name>Denis</name></svatek>');
			assert.includes(res.body, '<svatek><date>0111</date><name>Denisa</name></svatek>');
			assert.includes(res.body, '</svatky>');
		});
};
