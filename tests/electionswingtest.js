"use strict";
exports.__esModule = true;
var election_1 = require("../scripts/election");
var chai_1 = require("chai");
describe('electionSwing', function () {
    it('should return 100', function () {
        var result = election_1["default"]();
        chai_1.expect(result).to.equal(100);
    });
});
//# sourceMappingURL=electionswingtest.js.map