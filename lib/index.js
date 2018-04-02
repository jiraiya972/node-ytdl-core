'use strict';
const getInfo     = require('./info');
const util        = require('./util');
const sig         = require('./sig');


/**
 * @param {String} link
 * @param {!Object} options
 * @return {Object}
 */
var ytdl = module.exports = function ytdl(link, options) {
  getInfo(link, options, (err, info) => {
    if (err) {
      console.log('error', err);
      return;
    }
  });

  return this;
};


ytdl.getInfo = getInfo;
ytdl.chooseFormat = util.chooseFormat;
ytdl.filterFormats = util.filterFormats;
ytdl.validateID = util.validateID;
ytdl.validateURL = util.validateURL;
ytdl.getURLVideoID = util.getURLVideoID;
ytdl.getVideoID = util.getVideoID;
ytdl.cache = sig.cache;


