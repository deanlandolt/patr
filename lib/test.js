({define:typeof define!="undefined"?define:function(deps, factory){module.exports = factory(exports, require("./runner"), require("./assert"));}}).
define(["exports", "./runner", "./assert"], function(exports, runner, assert){

// for compatibility with http://wiki.commonjs.org/wiki/Unit_Testing/1.0#Test
exports.run = runner.run;
exports.assert = assert;
	
return exports;
});
