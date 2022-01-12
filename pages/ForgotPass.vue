<template>
  <div class="container">
    <h2>Nhập Email Quên Mật Khẩu</h2>
    <form v-if="state == 0" id="form" @submit.prevent="onSubmit">
      <Input v-model="email" placeholder="Email" label="Email" />
      <br />
      <button type="submit">Submit</button>
    </form>
    {{ user }}
    <form v-if="state == 1">
      <h2>Email đúng</h2>
      <Input v-model="code" placeholder="Nhập Mã" label="Nhập Mã" />
      <Input
        v-model="newpass"
        placeholder="Nhập mật khẩu mới"
        label="Nhập mật khẩu mới"
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
export default class Login extends Vue {
  email = ''
  state = 0

  get user() {
    return store.value.user.email
  }

  async onSubmit() {
    try {
      await this.$axios.post(
        'http://localhost:3000/api/v2/identity/users/generate_code',
        {
          email: this.email,
        }
      )
      if (this.email !== '') {
        this.state = 1
      }
    } catch (error) {
      return error
    }
  }
}
</script>
