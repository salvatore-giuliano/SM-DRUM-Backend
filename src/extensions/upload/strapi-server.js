const _ = require("lodash");
const customUpload = require('./upload')
module.exports = (plugin) => {
  plugin.services.upload = customUpload
  return plugin
}

