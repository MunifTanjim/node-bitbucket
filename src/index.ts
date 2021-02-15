import { Client } from './client'
import authenticatePlugin from './plugins/auth'
import noticePlugin from './plugins/notice'
import paginationPlugin from './plugins/pagination'
import registerApiEndpointsPlugin from './plugins/register-api-endpoints'
import registerEndpointsPlugin from './plugins/register-endpoints'
import validateRequestPlugin from './plugins/validate-request'

const Plugins = [
  noticePlugin,
  paginationPlugin,
  registerEndpointsPlugin,
  registerApiEndpointsPlugin,
  validateRequestPlugin,
  authenticatePlugin,
]

export const Bitbucket = Client.plugins(Plugins)
