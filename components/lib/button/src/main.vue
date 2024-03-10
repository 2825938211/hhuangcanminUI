<template>
  <div class="hhcm-button" :style="width? {width: width + 'px'} : {}">
    <div v-if="context" class="hhcm-button-context">
      {{ context }}
    </div>
    <div v-else class="hhcm-button-context">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hhcm-button',
  props: {
    width: { // 按钮宽度
      type: Number,
      default: 0,
    },
    context: { // 按钮内容
      type: String,
      default: '',
    }
  }
}
</script>