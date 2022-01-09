import store from './store'

export default class GettersSetter {
  get user() {
    return store.value.user
  }

  set user(user) {
    store.value.user = user
  }

  get first_route() {
    return store.value.first_route
  }

  set first_route(first_route) {
    store.value.first_route = first_route
  }
}
