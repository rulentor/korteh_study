import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const name = ref('Eduardo')
  const data = ref({})
  const doubleCount = computed(() => count.value * 2)
  function increment(number) {
    count.value += number
  }  
/*
state: () => ({ count: 0, name: 'Eduardo' }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
*/
return { count, name, doubleCount, increment }
})
