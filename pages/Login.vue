<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
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
    {{ user }}
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import store from '@/controllers/store'
import controllers from '@/controllers/index'

@Component({})
export default class Login extends Vue {
  email: string = ''
  password: string = ''

  get user() {
    return store.value.user
  }

  async onSubmit() {
    await controllers.Login(this.email, this.password)
  }
}
</script>

<style lang="less">
    .container{
      margin: 0 auto;
      width: 80%;
    }
</style>
