<template>
<div class="grid-no">
		
        <div class="col-12 md:col-6 lg:col-4">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Стать амбассадором</span>
                        <div class="text-900 font-medium text-xl">
						и раньше своих однокурсников сдать диплом или курсовую и получить отличную оценку в зачётку
						</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">+ 20 добавились</span>
                <span class="text-500">за последний час</span>
				<span>
				<Button label="Стать амбассадором" class="p-button-outlined p-button-success" @click="addAmbassadorOrder = true"/>
				</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-4">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Стать автором</span>
                        <div class="text-900 font-medium text-xl">
						и получать стабильный доход занимаясь в своё свободное время
						</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-map-marker text-orange-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">+ 1000</span>
                <span class="text-500">уникальных работ и документов</span>
				<span>
				<Button label="Стать автором" class="p-button-outlined p-button-success" @click="addAuthorOrder = true"/>
				</span>				
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-4">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Стать заказчиком</span>
                        <div class="text-900 font-medium text-xl">
						и получать стабильный доход занимаясь в своё свободное время
						</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-map-marker text-orange-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">+ 1000</span>
                <span class="text-500">уникальных работ и документов</span>
				<span>
				<Button label="Начать зарабатывать" class="p-button-outlined p-button-success" @click="addMasterOrder = true" />
				</span>				
            </div>
        </div>		
</div>		
</template>
<script async setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import { useToast } from 'primevue/usetoast'
import { useCookies } from '@vueuse/integrations/useCookies'
import { useRoute, useRouter } from 'vue-router'
import fetch from 'cross-fetch'

const router = useRouter()
const toast = useToast()

const addAmbassadorOrder = ref(false)
const addMasterOrder = ref(false)
const addAuthorOrder = ref(false)

const options = ref({
  job_type: [
    {id: 1, name: 'параметр'}
  ],
  font_name: [
    {id: 1, name: 'Arial'},
	{id: 2, name: 'Verdana'},
	{id: 3, name: 'Sans serif'},	
  ],
  font_size: [
    {id: 1, name: '8'},
    {id: 2, name: '9'},	
    {id: 3, name: '12'},	
  ],
})
const state = reactive({
  id: null,
  last_name: null,
  first_name: null,
  email: null,
  phone: null,
  title: null,
  tabs: null,
  interval: null,
  orygin: 0,
  sciense: null,
  pages: 0,
  dates: null,
  date_from: null,
  date_to: null,
})
const responsiveOptions = ref([
 {
    breakpoint: '1400px',
    numMonths: 2
 },
 {
    breakpoint: '1200px',
    numMonths: 1
 }
])

  onMounted(
    async () => { 
	  //if(initState()) init()
	}
  )
const cookies = useCookies(['locale']) 
</script>
<style scoped>
input, textarea{width:100% !important;}
.p-slider-horizontal, .p-inputtext {
    width: 14rem;
}
.p-slider-vertical {
     height: 14rem;
}

.special-day {
    text-decoration: line-through;
}

</style>
<route lang="yaml">
meta:
  layout: default
</route>
