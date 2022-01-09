import { Context } from '@nuxt/types'
import controllers from '@/controllers'

export default (context: Context) => {
  context.app.router?.beforeEach((_to, _from, next) => {
    if (controllers.first_route) {
      controllers.first_route = false
    }

    next()
  })
}
