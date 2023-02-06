import { acceptHMRUpdate, defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', () => {
  /**
   * Current name of the user.
   */
  const savedName = ref('')
  const updateData = ref('')  
  const previousNames = ref(new Set<string>())
  const storedUser = ref(new Set<Object>())  

  const usedNames = computed(() => Array.from(previousNames.value))
  const otherNames = computed(() => usedNames.value.filter(name => name !== savedName.value))
  const usedUser = computed(() => Object.from(storedUser.value))
  /**
   * Changes the current name of the user and saves the one that was used
   * before.
   *
   * @param name - new name to set
   */
   
  function updateUser(data: Object) {
    //if (savedName.value)
    //storedUser.value.add(savedName.value)
    storedUser.value.email = data.email || null
    storedUser.value.password = data.password || ''
    storedUser.value.role = data.role || 'reader'	
  }   
   
  function setNewName(name: string) {
    if (savedName.value)
      previousNames.value.add(savedName.value)

    savedName.value = name
  }

  return {
    setNewName,
    otherNames,
    savedName,
	
	usedUser,
	updateUser,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useProfileStore, import.meta.hot))
