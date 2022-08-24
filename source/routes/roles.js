var services =  require('../services/roles')
var indexer = require('../services/indexers/roles')
const autoRouter = require('../utils/autoRouter/autoRouter')

router = autoRouter(indexer, services)

module.exports = router