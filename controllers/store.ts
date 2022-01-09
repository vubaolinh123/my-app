import { ssrRef } from '@nuxtjs/composition-api'

const store = ssrRef<{
  first_route: boolean
  user: {
    uid: string | null
    email: string | null
    first_name: string | null
    last_name: string | null
    bio: string | null
    state: string | null
    role: string | null
    alone: any
  }
}>({
  first_route: true,
  user: {
    uid: null,
    email: null,
    first_name: null,
    last_name: null,
    bio: null,
    state: null,
    role: null,
    alone: null,
  },
})

export default store
