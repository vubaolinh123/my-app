<template>
  <div>
    <form @submit.prevent="onSubmit">
      <Input v-model="first_name" placeholder="First Name" label="First Name" />
      <Input v-model="last_name" placeholder="Last Name" label="Last Name" />
      <Input v-model="email" placeholder="Email" label="Email" />
      <Input
        v-model="password"
        type="password"
        placeholder="Password"
        label="Password"
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import store from '@/controllers/store'
import controllers from '@/controllers'

@Component({})
export default class Register extends Vue {
  first_name = ''
  last_name = ''
  email = ''
  password = ''

  get user() {
    return store.value.user
  }

  async onSubmit() {
    await controllers.Register(
      this.first_name,
      this.last_name,
      this.email,
      this.password
    )
  }
}
</script>
