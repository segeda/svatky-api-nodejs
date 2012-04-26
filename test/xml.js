var assert = require("assert"),
	svatky = require("../svatky");

exports['GET /xml?date=0102'] = function() {
	assert.response(svatky,
		{ url: '/xml?date=0102', method: 'GET'},
		{ status: 200, headers: { 'Content-Type': 'text/xml; charset=UTF-8' }},
		function(res){
			assert.includes(res.body, '<?xml version="1.0" encoding="UTF-8"?>');
			assert.includes(res.body, '<svatky>');
			assert.includes(res.body, '<svatek><date>0102</date><name>Hynek</name></svatek>');
			assert.includes(res.body, '</svatky>');
		});
};

exports['GET /xml?name=Hynek'] = function() {
	assert.response(svatky,
		{ url: '/xml?name=Hynek', method: 'GET'},
		{ status: 200, headers: { 'Content-Type': 'text/xml; charset=UTF-8' }},
		function(res){
			assert.includes(res.body, '<?xml version="1.0" encoding="UTF-8"?>');
			assert.includes(res.body, '<svatky>');
			assert.includes(res.body, '<svatek><date>0102</date><name>Hynek</name></svatek>');
			assert.includes(res.body, '</svatky>');
		});
};

exports['GET /xml?date=0109'] = function() {
	assert.response(svatky,
		{ url: '/xml?date=0109', method: 'GET'},
		{ status: 200, headers: { 'Content-Type': 'text/xml; charset=UTF-8' }},
		function(res){
			assert.includes(res.body, '<?xml version="1.0" encoding="UTF-8"?>');
			assert.includes(res.body, '<svatky>');
			assert.includes(res.body, '<svatek><date>0109</date><name>Linda</name></svatek>');
			assert.includes(res.body, '<svatek><date>0109</date><name>Samuel</name></svatek>');
			assert.includes(res.body, '</svatky>');
		});
};

exports['GET /xml?name=Petr'] = function() {
	assert.response(svatky,
		{ url: '/xml?name=Petr', method: 'GET'},
		{ status: 200, headers: { 'Content-Type': 'text/xml; charset=UTF-8' }},
		function(res){
			assert.includes(res.body, '<?xml version="1.0" encoding="UTF-8"?>');
			assert.includes(res.body, '<svatky>');
			assert.includes(res.body, '<svatek><date>2202</date><name>Petr</name></svatek>');
			assert.includes(res.body, '<svatek><date>2906</date><name>Petr</name></svatek>');
			assert.includes(res.body, '</svatky>');
		});
};
