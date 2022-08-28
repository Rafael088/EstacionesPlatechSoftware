var services =  require('../services/aiMotor')
var indexer = require('../indexers/aiMotor')
var middleware = require('../middleware/sensor')
const autoRouter = require('../utils/autoRouter/autoRouter')

router = autoRouter(indexer, services, middleware)

module.exports = router