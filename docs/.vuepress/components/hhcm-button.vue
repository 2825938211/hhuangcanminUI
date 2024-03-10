<template>
    <div class="hhcm-button" :style="width ? { width: width + 'px' } : {}">
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
            default: '按钮',
        }
    }
}
</script>

<style>
.hhcm-button {
  width: 70px;
  height: 32px;
  border-radius: 5px;
  border: 1px solid #DCDFE6;
  box-shadow: 0 6px 10px 0 rgba(95, 101, 105, 0.15);
}
.hhcm-button-context {
    text-align: center;
    padding: 6px;
    font-size: 13px
  }
.hhcm-button:hover {
  border: 1px solid #4EA5FF;
  background-color: #ECF5FF;
  color: #4EA5FF;
  cursor: pointer;
}
</style>


