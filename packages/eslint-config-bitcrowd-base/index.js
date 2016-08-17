Object.assign = Object.assign || require('object-assign'); // eslint-disable-line global-require
module.exports = Object.assign({ extends: 'airbnb-base' }, require('./overrides'));
