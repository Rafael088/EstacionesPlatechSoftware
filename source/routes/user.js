var services =  require('../services/user')
var indexer = require('../indexers/user')
const autoRouter = require('../utils/autoRouter/autoRouter')

router = autoRouter(indexer, services)

module.exports = router