Object.assign = Object.assign || require('object-assign'); // eslint-disable-line global-require
module.exports = Object.assign({ extends: ['bitcrowd-base/legacy', 'angular'] }, require('./overrides')); // eslint-disable-line max-len
