
const crypto = require('crypto');

const jwToken = crypto.randomBytes(64).toString("base64")
console.log(jwToken);