const removeModules = require("./src/remove-modules");

const args = process.argv;

if (args.includes('-nm')) {
    removeModules()
}