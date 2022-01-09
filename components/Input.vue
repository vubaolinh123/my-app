<template>
  <div>
    <label>
      {{ label }}
    </label>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="onInput"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({})
export default class Input extends Vue {
  @Prop() type!: string
  @Prop() placeholder!: string
  @Prop() label!: string
  @Prop() value!: string

  onInput($event: any) {
    this.$emit('input', $event.target.value)
  }
}
</script>
