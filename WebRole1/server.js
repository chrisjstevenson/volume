var index = require('./index.js');
var router = require('./router.js')

index.start(router.route);