var services =  require('../services/sensor')
var indexer = require('../services/indexers/sensor')
var middleware = require('../middleware/sensor')
const autoRouter = require('../utils/autoRouter/autoRouter')

router = autoRouter(indexer, services, middleware)

module.exports = router