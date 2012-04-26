var assert = require("assert"),
	svatky = require("../svatky");

exports['GET /'] = function() {
	assert.response(svatky,
		{ url: '/', method: 'GET'},
		{ status: 200, headers: { 'Content-Type': 'text/html; charset=UTF-8' }},
		function(res){
			assert.includes(res.body, '<title>Svátky API</title>');
			assert.includes(res.body, '<p>Ať Vám slouží. Chyby a připomínky hlašte, prosím, na <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#115;&#101;&#103;&#101;&#100;&#97;&#99;&#122;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">&#115;&#101;&#103;&#101;&#100;&#97;&#99;&#122;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</a>.</p>');
		});
};

exports['GET /asdf'] = function() {
	assert.response(svatky,
		{ url: '/asdf', method: 'GET'},
		{ status: 404, headers: { 'Content-Type': 'text/plain' }},
		function(res){
			assert.eql(res.body, '404 Not found');
		});
};
