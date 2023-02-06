import { acceptHMRUpdate, defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useUserStore = defineStore('user', () => {
  const count = ref(0)
  const name = ref('Eduardo')
  
  const data = ref({
    id: null,  
    login: null,
	email: null,
	role: null,
	password: null,
  })
  const doubleCount = computed(() => count.value * 2)
  function update(items) {
    //items.forEach((id) => { data.value[id] = items[id] })
	for(let id in items) data.value[id] = items[id]
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
return { data, doubleCount, update }
})
if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))