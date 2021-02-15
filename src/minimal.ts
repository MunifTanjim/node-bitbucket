import { Client } from './client'
import authPlugin from './plugins/auth'
import noticePlugin from './plugins/notice'
import paginationPlugin from './plugins/pagination'
import registerEndpointsPlugin from './plugins/register-endpoints'
import validateRequestPlugin from './plugins/validate-request'

const Plugins = [
  noticePlugin,
  paginationPlugin,
  registerEndpointsPlugin,
  validateRequestPlugin,
  authPlugin,
]

export const Bitbucket = Client.plugins(Plugins)
