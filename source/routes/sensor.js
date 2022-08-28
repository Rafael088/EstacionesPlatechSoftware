var services =  require('../services/sensor')
var indexer = require('../indexers/sensor')
const autoRouter = require('../utils/autoRouter/autoRouter')

router = autoRouter(indexer, services)

module.exports = router