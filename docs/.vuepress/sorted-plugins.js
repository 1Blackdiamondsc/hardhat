const plugins = require("./plugins.js");

try {
  const downloads = require("./plugin-downloads.json");

  plugins.sort((p1, p2) => downloads[p2.name] - downloads[p1.name]);
} catch (e) {
  // we just don't sort here
}

module.exports = plugins;
