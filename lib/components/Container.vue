<template>
  <div class="d-flex justify-center">
    <div style="display: flex; justify-content: space-between">
      <div
        class="parent_container"
        v-for="(item, index) in result"
        :key="index"
        style="width: 100%"
      >
        <div class="child_container" v-for="(item_result, i) in item" :key="i">
          <slot name="body" :item="item_result" :index="i" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, watch } from 'vue'
import { divideArray } from '../utils/settings'

const props = defineProps({
  itemData: {
    type: Array,
    default: () => [],
  },
  column: {
    type: Number,
    default: 2,
  },
})
const result = ref(divideArray(props.itemData, props.column))
watch(
  () => props.column,
  (newValue) => {
    result.value = divideArray(props.itemData, newValue)
  }
)
</script>

<style lang="postcss" scoped>
.child_container {
  padding: 10px;
}
</style>
