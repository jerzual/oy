import { Chance } from "chance";

function generateRandomData(userContext, events, done) {
  // generate data with Faker:
  const chance = new Chance();
  // add variables to virtual user's context:
  userContext.vars.uid = chance.guid();
  userContext.vars.name = chance.name();
  // continue with executing the scenario:
  return done();
}

module.exports = {
    generateRandomData,
}