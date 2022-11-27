<template>
<div class="block-2" style="display: block;">
      <div class="HelloUser">Мои заказы</div>
      <div class="placement">
       <div class="orders"><div class="content-indicator"> <div class="indicator">Размещён</div><div class="price-indicator">По договорённости</div>  </div>
       <div class="text-order">Написать курсовую работу на тему</div>
       <div class="content-indicator2"> <div class="indicator-options"><Button class="btn-delet">Удалить</Button><Button class="btn-change" @click="updateOrder('00001')">Изменить заказ</Button></div><div class="author-sugg">Предложения автора</div> 
      </div>
      </div>
      <div class="orders"><div class="content-indicator"> <div class="indicator3">Завершен</div><div class="price-indicator">5700₽</div>  </div>
      <div class="text-order">Написать курсовую работу на тему</div>
      <div class="content-indicator2"> <div class="indicator-options"><Button class="btn-delet">Удалить</Button><Button class="btn-change" @click="updateOrder('00002')">Изменить заказ</Button></div><div class="author-sugg">Предложения автора</div> 
     </div>
     </div>
	 <!-- order -->
     <div class="orders">
	   <div class="content-indicator"> 
	     <div class="indicator2">В работе</div>
		 <div class="price-indicator">3400₽</div>  
	  </div>
     <div class="text-order">Написать курсовую работу на тему</div>
     <div class="content-indicator2"> 
	   <div class="indicator-options">
	     <Button class="btn-delet">Удалить</Button>
		 <Button class="btn-change" @click="updateOrder('00003')">Изменить заказ</Button>
	   </div>
	   <div class="author-sugg">Предложения автора</div> 
    </div>
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
const updateOrder = (id) => {
  router.push(`/forms/${encodeURIComponent(id)}`)
}
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
  layout: column3
</route>
