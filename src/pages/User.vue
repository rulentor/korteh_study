<template>
  <div class="col-12">
<Dropdown v-model="selectedGame" :options="games" @change='onSelectGame' optionLabel="name" :filter="true" placeholder="Select игры" :showClear="true">
    <template #value="slotProps">
        <div class="p-dropdown-car-value" v-if="slotProps.value">
            <span>{{slotProps.value.name}}</span>
        </div>
        <span v-else>
            {{slotProps.placeholder}}
        </span>
    </template>
    <template #option="slotProps">
		<div class="p-dropdown-car-option">
			<span>{{slotProps.option.name}}</span>
		</div>
	</template>
</Dropdown>	
  </div>
  <div class="col-12">
    <Slider />
    <Winners />
    <Games />
  </div>	

</template>
<script setup>
import { ref } from 'vue'

const router = useRouter()
const selectedGame = ref()
const games = ref([
  {name: 'Лапту', code: 'laptu'},
  {name: 'Футбол', code: 'football'},
  {name: 'Казино', code: 'casino'},
])
const onSelectGame = (e) => {
  console.log('select-game',e.value.name)
  router.push(`/games/${encodeURIComponent(e.value.code)}`)
}
</script>
<style scoped lang="scss"></style>
