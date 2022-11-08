<template>
    <div class="grid panel-demo">
	    <ConfirmDialog/>
		
        <div class="col-7 md:col-7">
		  <div class="card p-fluid">
            <div class="formgrid grid">
			  <div class="field">
				<label for="description">Описание проблемы</label>
				<Textarea id='description' v-model="description" :autoResize="true" rows="5" cols="30" />
			  </div>			  
			</div>

<!--Главная, Мои заказы-->

                    <h5>Профиль на платформе</h5>	
					<div class="formgrid grid">
					  <div class="col">
					  <div class="field">
						<label for="phone">Ваш телефон</label>
						<InputText id="phone" type="text" :value="state.phone"/>
                      </div>
					  <div class="field">	
						<label for="email">email</label>
						<InputText id="email" type="text" :value="state.email"/>
                      </div>
					  
					  </div>
					</div>

					<div class="formgrid grid">					
					<div class="field col">
					    <Button label="Отправить запрос" @click="addOrder" icon="pi pi-check" class="p-button-success" :disabled="isSendButton"/>
						<!--Button label="Субтитры" @click="showAddSubs = !showAddSubs" icon="pi pi-check" class="p-button-success" /-->
                    </div>
					<div class="field col">
                        <Button label="Отмена" @click="showAddOrder = !showAddOrder" icon="pi pi-check" class="p-button-secondary" />
                    </div>
						
					</div>
                </div>

        </div>
		
		
    <div class="col-5 md:col-5">
	  <div class="card p-fluid">


        <div class="flex align-items-center justify-content-between mb-4">
		  <h5>Чат с поддержкой</h5>
		   <div>
		     <button class="p-button p-component p-button-icon-only p-button-text p-button-plain p-button-rounded" type="button"><!---->
			   <span class="pi pi-ellipsis-v p-button-icon"></span>
			   <span class="p-button-label">&nbsp;</span><!---->
			   <span class="p-ink"></span>
			 </button>
		    </div>
		</div>
		<span class="block text-600 font-medium mb-3">06.11.21</span>
		<ul class="p-0 mx-0 mt-0 mb-4 list-none">
		  <li class="flex align-items-center py-2 border-bottom-1 surface-border">
		    <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
			  <i class="pi pi-dollar text-xl text-blue-500"></i>
			</div>
			<span class="text-900 line-height-3">Иванов И.И. поддержка 
			<span class="text-700">Иван, удалось Вам войти в систему?
		    </span>
			</span>
		  </li>
		  <li class="flex align-items-center py-2 border-bottom-1 surface-border">
		    <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-pink-100 border-circle mr-3 flex-shrink-0">
			  <i class="pi pi-question text-xl text-pink-500"></i>
			</div>
			<span class="text-900 line-height-3">Вы
			<span class="text-700">Извините не удалось
		    </span>
			</span>
		  </li>	
          <li>
            <div class="col-12 md:col-12">
              <div class="p-inputgroup">
                <Button icon="pi pi-check" class="p-button-success"/>
                  <InputText placeholder="Ок"/>
                  <Button icon="pi pi-times" class="p-button-danger"/>
              </div>
            </div>		  
			</li>		  
      </ul>  

заказчик
автор 
амбассадор

Главное - добавить заказ

Главная 
Мои заказы
Создать заказ
Техподдержка

email, Vk
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

const addOrder = () => {

}
const importUploader = () => {

}
const showAddOrder = ref(false)
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
  description:null,
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