import { Client } from './client'
import authPlugin from './plugins/auth'
import noticePlugin from './plugins/notice'
import paginationPlugin from './plugins/pagination'
import registerEndpointsPlugin from './plugins/register-endpoints'
import validateRequestPlugin from './plugins/validate-request'

const Plugins = [
  noticePlugin,
  authPlugin,
  paginationPlugin,
  registerEndpointsPlugin,
  validateRequestPlugin,
]

export const Bitbucket = Client.plugins(Plugins)
