var _ = require('lodash');

var localEnvVars = {
  TITLE:      'refugee_helper',
  SAFE_TITLE: 'refugee_helper'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
