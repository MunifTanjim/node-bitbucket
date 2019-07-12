import Bitbucket from './client'
import authPlugin from './plugins/auth'
import noticePlugin from './plugins/notice'
import paginationPlugin from './plugins/pagination'
import registerApiEndpointsPlugin from './plugins/register-api-endpoints'
import registerEndpointsPlugin from './plugins/register-endpoints'
import validateRequestPlugin from './plugins/validate-request'

const Plugins = [
  noticePlugin,
  authPlugin,
  paginationPlugin,
  registerEndpointsPlugin,
  registerApiEndpointsPlugin,
  validateRequestPlugin
]

export default Bitbucket.plugins(Plugins)
