<template>
<div>
      <div class="block-1">
     <div class="HelloUser">Добро пожаловать Алексей</div>
     <div class="events-time">
      <div class="events">События за последнее время</div>
      <div class="answer">На ваш заказ ответили <button class="btnanswer">посмотреть</button> </div>
      <div class="completed-by">Ваш заказ был завершен исполнителем <button class="btncompleted">посмотреть</button>  </div>
    </div>
     <div class="advertisement">
      <div class="advertisement1">Реклама партнера</div>
      <div class="advertisement1">Реклама партнера</div>
      <div class="advertisement1">Реклама партнера</div>
     </div>
     </div>


     <div class="block-2">
      <div class="HelloUser">Мои заказы</div>
      <div class="placement">
       <div class="orders"><div class="content-indicator"> <div class="indicator">Размещён</div><div class="price-indicator">По договорённости</div>  </div>
       <div class="text-order">Написать курсовую работу на тему</div>
       <div class="content-indicator2"> <div class="indicator-options"><button class="btn-delet">Удалить</button><button class="btn-change">Изменить заказ</button></div><div class="author-sugg">Предложения автора</div> 
      </div>
      </div>
      <div class="orders"><div class="content-indicator"> <div class="indicator3">Завершен</div><div class="price-indicator">5700₽</div>  </div>
      <div class="text-order">Написать курсовую работу на тему</div>
      <div class="content-indicator2"> <div class="indicator-options"><button class="btn-delet">Удалить</button><button class="btn-change">Изменить заказ</button></div><div class="author-sugg">Предложения автора</div> 
     </div>
     </div>
     <div class="orders"><div class="content-indicator"> <div class="indicator2">В работе</div><div class="price-indicator">3400₽</div>  </div>
     <div class="text-order">Написать курсовую работу на тему</div>
     <div class="content-indicator2"> <div class="indicator-options"><button class="btn-delet">Удалить</button><button class="btn-change">Изменить заказ</button></div><div class="author-sugg">Предложения автора</div> 
    </div>
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
