"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chance_1 = require("chance");
function generateRandomData(userContext, events, done) {
    const chance = new chance_1.Chance();
    userContext.vars.uid = chance.guid();
    userContext.vars.name = chance.name();
    return done();
}
module.exports = {
    generateRandomData,
};
//# sourceMappingURL=functions.js.map