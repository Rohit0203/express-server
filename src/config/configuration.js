var dotenv = require('dotenv');
var result = dotenv.config();
if (result.error) {
    throw result.error;
}
var envs = result.parsed;
module.exports = envs;
