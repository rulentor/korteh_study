<template>
    <div class="grid panel-demo">
	    <ConfirmDialog/>
		
        <div class="col-7 md:col-7">
					<Card class='text-center surface-card p-4 shadow-2 border-round w-full lg:w-12'>
					<template #header>
                        <div class="text-900 text-md font-medium mb-0">Добавить задание</div>
					</template>
					<template #content>
                    <div class="field col">
					    <!--label for="last_name" class="block text-900 text-md font-medium mb-1">Расскажите подробнее о задании</label-->
						<Textarea id='description' class='p-inputtext-sm' v-model="state.description" placeholder="Расскажите подробнее о задании" :autoResize="true" rows="3" cols="30" />
                    </div>
					<div class="formgrid grid">
					  <div class="field col">
						<!--label for="first_name" class="block text-900 text-md font-medium mb-1">Имя</label-->
						<InputText id="phone" class='p-inputtext-sm mb-3' v-model="state.phone" type="text" placeholder="Ваш телефон" />
            			<Dropdown class='p-inputtext-sm w-full mb-3' v-model="state.job_type" :options="options.job_type" optionLabel="name" optionValue="id" placeholder="Выберите тип работы" />
						<InputText id="title" class='p-inputtext-sm mb-3' v-model="state.title" type="text" placeholder="Название работы" />
						<InputText id="tabs" class='p-inputtext-sm mb-3' v-model="state.tabs" type="text" placeholder="Поля" />
						<InputText id="interval" class='p-inputtext-sm mb-3' v-model="state.interval" type="text" placeholder="Интервал" />
                        <label for="orygin" class='mb-3'>Оригинальность: {{ state.orygin }}</label>
                        <Slider v-model="state.orygin" />	
					  </div>
					  <div class="field col">
						<InputText id="email" class='p-inputtext-sm mb-3' v-model="state.email" type="text" placeholder="Email" />
						<InputText id="science" class='p-inputtext-sm mb-3' v-model="state.sciense" type="text" placeholder="Дисциплина" />
						<InputText id="pages" class='p-inputtext-sm mb-3' v-model="state.pages" type="text" placeholder="Кол-во стр." />         
                		<Dropdown class='p-inputtext-sm w-full mb-3' v-model="state.font_name" :options="options.font_name" optionLabel="name" optionValue="id" placeholder="Шрифт" />					
                		<Dropdown class='p-inputtext-sm w-full mb-3' v-model="state.font_size" :options="options.font_size" optionLabel="name" optionValue="id" placeholder="Размер текста" />						
                        <label for="orygin" class='mb-3'>Загрузка файла</label>					
                        <FileUpload name="file[]" :customUpload="true" @uploader="importUploader" mode="basic" ref='file' accept="" :maxFileSize="50000000000" label="Файл" chooseLabel="Файл" class="ml-6" :auto="true"/>					
					  </div>							  
				    </div>
                    <h5 class='m-0'>Срок сдачи</h5>	
					<!--div class="formgrid grid"-->
					  <div class="field col">
						<label for="range" class='mb-3'>Выберите интервал от и до</label>
						<Calendar class='p-inputtext-sm w-full' inputId="range" v-model="state.dates" selectionMode="range" :manualInput="false" :touchUI="true" dateFormat="dd.mm.yy"/>				  
                      </div>
					<!--/div-->
					<h5 class='m-0 mb-3'>Бюджет (руб.)</h5>
					<div class="formgrid grid">
					  <div class="field col">
						<InputText id="price_from" class='p-inputtext-sm' v-model="state.price_from" type="text" placeholder="От" />
					  </div>
					  <div class="field col">
						<InputText id="price_to" class='p-inputtext-sm' v-model="state.price_to" type="text" placeholder="До" />
					  </div>							  
				    </div>					
					
						<!--div class="field ">
								<label for="frequency">Уточнить детали заказа</label>
								авт. сохранение
								Чат - сворачиваться экономия места
						</div-->					
						</template> 
                        <template #footer>
						  <Button label="Разместить заказ" class="p-button-success p-button-md p-2 text-md mr-2" @click="addOrder" icon="pi pi-check" :disabled="isSendButton"/>
                          <Button label="Сбросить форму" class="p-button-secondary p-button-md p-2 text-md ml-2" @click="showAddOrder = !showAddOrder" icon="pi pi-check" />
                        </template>               
                        <!--div class="align-items-center justify-content-between mb-1 w-sm"-->
                    </Card>		
		
	</div>	
		
		
		
		
		
		
		

		
		
    <div class="col-5 md:col-5">
	  <div class="card p-fluid">


        <div class="flex align-items-center justify-content-between mb-4">
		  <h5>Чат с преподавателем</h5>
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
			<span class="text-900 line-height-3">Иванов И.И. 
			<span class="text-700">Иван, удалось сформулировать задачу
			  <span class="text-blue-500">моё предложение 79$</span>
		    </span>
			</span>
		  </li>
		  <li class="flex align-items-center py-2 border-bottom-1 surface-border">
		    <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-pink-100 border-circle mr-3 flex-shrink-0">
			  <i class="pi pi-question text-xl text-pink-500"></i>
			</div>
			<span class="text-900 line-height-3">Студент
			<span class="text-700">Извините пропустил Ваше сообщение
			  <span class="text-blue-500">не согласен 79$</span>
		    </span>
			</span>
		  </li>	
          <li>
            <div class="col-12 md:col-12">
              <div class="p-inputgroup">
                <Button icon="pi pi-check" class="p-button-success"/>
                  <InputText placeholder="Vote"/>
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