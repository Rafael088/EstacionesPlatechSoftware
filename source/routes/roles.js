var services =  require('../services/roles')
var indexer = require('../indexers/roles')
const autoRouter = require('../utils/autoRouter/autoRouter')

router = autoRouter(indexer, services)

module.exports = router