var services =  require('../services/anthenna')
var indexer = require('../indexers/anthenna')
var middleware = require('../middleware/sensor')
const autoRouter = require('../utils/autoRouter/autoRouter')

router = autoRouter(indexer, services, middleware)

module.exports = router