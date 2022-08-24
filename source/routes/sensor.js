var services =  require('../services/sensor')
var indexer = require('../services/indexers/sensor')
const autoRouter = require('../utils/autoRouter/autoRouter')

router = autoRouter(indexer, services)

module.exports = router