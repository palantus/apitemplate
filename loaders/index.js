let expressLoader = require('./express');
let storageLoader = require('./storage');
require('./events');

module.exports = async ({ expressApp }) => {
  await expressLoader({ app: expressApp });
  await storageLoader();
};