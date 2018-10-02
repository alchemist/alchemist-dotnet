const path = require("path");

module.exports = config => {

    if(!config.externals)
    { config.externals = {}; }

    config.externals["@alchemist-editor/core"] = "@alchemist-editor/core";
    config.externals["@treacherous/core"] = "@treacherous/core";
    config.externals["@treacherous/vue"] = "@treacherous/vue";
    config.externals["@treacherous/decorators"] = "@treacherous/decorators";
    config.externals["tslib"] = "tslib";
};