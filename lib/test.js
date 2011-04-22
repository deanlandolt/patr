({define:typeof define!="undefined"?define:function(deps, factory){module.exports = factory(exports, require("./runner"), require("./assert"), require("promised-io/lib/promise"));}}).
define(["exports", "./runner", "./assert", "promised-io/lib/promise"], function(exports, runner, assert, promise){

// for compatibility with http://wiki.commonjs.org/wiki/Unit_Testing/1.0#Test
exports.run = runner.run;
exports.assert = assert;
exports.when = promise.when;
	
return exports;
});
