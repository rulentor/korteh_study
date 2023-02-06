<template>
    <div class="grid panel-demo">
	    <ConfirmDialog/>
		
        <div class="col-7 md:col-6">
					<Card class='text-center surface-card p-4 shadow-2 border-round w-full lg:w-12'>
					<template #header>
                        <h5>Добавить задание</h5>
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
                        <!--Slider v-model="state.orygin" /-->	
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
					<!--h5 class='m-0 mb-3'>Бюджет (руб.)</h5>
					<div class="formgrid grid">
					  <div class="field col">
						<InputText id="price_from" class='p-inputtext-sm' v-model="state.price_from" type="text" placeholder="От" />
					  </div>
					  <div class="field col">
						<InputText id="price_to" class='p-inputtext-sm' v-model="state.price_to" type="text" placeholder="До" />
					  </div>							  
				    </div-->					
					
						<!--div class="field ">
								<label for="frequency">Уточнить детали заказа</label>
								авт. сохранение
								Чат - сворачиваться экономия места
						</div-->					
						</template> 
                        <!--template #footer>
						  <Button label="Разместить заказ" class="p-button-success p-button-md p-2 text-md mr-2" @click="addOrder" icon="pi pi-check" :disabled="isSendButton"/>
                          <Button label="Сбросить форму" class="p-button-secondary p-button-md p-2 text-md ml-2" @click="showAddOrder = !showAddOrder" icon="pi pi-check" />
                        </template-->               
                        <!--div class="align-items-center justify-content-between mb-1 w-sm"-->
                    </Card>		
		
	</div>	

        <div class="col-12 lg:col-3">
            <div class="p-3 h-full">
                <div class="shadow-2 p-3 h-md flex flex-column surface-card" style="border-radius: 6px">
                    <div class="text-900 font-medium text-xl mb-2">Укажите сумму (руб.)</div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <div class="flex align-items-center">
                        <span class="font-bold text-2xl text-900">1000</span>
                        <span class="ml-2 font-medium text-600">Итого по заказу</span>
                    </div>
					<div class="field">
						<InputText id="price" class='p-inputtext-sm mt-2' v-model="state.price" type="text" placeholder="Плата за работу" />
                    </div>
                    <hr class="my-1 mx-0 border-top-1 border-none surface-border" />
                    <ul class="list-none p-0 m-0 flex-grow-1">
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-black-500 mr-2"></i>
                            <span>Мин. стоимость - 1000</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-black-500 mr-2"></i>
                            <span>Бонус за быстрый заказ +150</span>
                        </li>
                    </ul>
                    <hr class="mb-3 mx-0 border-top-1 border-none surface-border" />
                    <Button label="Заказать" class="p-button-sm p-2 w-full"  />
					<span class="block text-600 font-medium mb-3">Нажимая кнопку действие необратимо и неповторимо</span>
                </div>
            </div>
        </div>
		
		
        <div class="col-12 xl:col-3">

            <div class="card">
                <div class="flex align-items-center justify-content-between mb-1">
                    <h5>Чат</h5>
                    <div>
                        <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" @click="$refs.menu1.toggle($event)"></Button>
                        <Menu ref="menu1" :popup="true" :model="items"></Menu>
                    </div>
                </div>

                <span class="block text-600 font-medium mb-1">В РАБОТЕ</span>
                <ul class="p-0 mx-0 mt-0 mb-4 list-none">
                    <li class="flex align-items-center py-2 border-bottom-1 surface-border">
					<Avatar image="/demo/images/avatar/amyelsner.png" class='mr-2' size="" shape="circle" style='width:48px;height:auto;'/>
                        <!--div class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                            <i class="pi pi-dollar text-xl text-blue-500"></i>
                        </div-->
                        <span class="text-900 line-height-3"
                            >Алина Родионова
                            <span class="text-700">Я сделаю работу за <span class="text-blue-500">79$</span></span>
                        </span>
						<span class="pl-1 text-900 line-height-3">
						  <p>11.11.23 10:45</p>
						</span>
                    </li>
                    <li class="flex align-items-center py-2 border-bottom-1 surface-border">
					<Avatar image="/demo/images/avatar/ivanmagalhaes.png" class='mr-2' size="" shape="circle" style='width:48px;height:auto;'/>
                        <span class="text-900 line-height-3"
                            >Пётр Достоевский
                            <span class="text-700">Я сделаю работу за <span class="text-blue-500">179$</span></span>
                        </span>
						<span class="pl-1 text-900 line-height-3">
						  <p>11.11.23 11:45</p>
						</span>
                    </li>

                </ul>

                <span class="block text-600 font-medium mb-3">АРХИВ</span>
                <ul class="p-0 m-0 list-none">
                    <li class="flex align-items-center py-2 border-bottom-1 surface-border">
					<Avatar image="/demo/images/avatar/amyelsner.png" class='mr-1' size="" shape="circle" style='width:48px;height:auto;'/>
                        <span class="text-900 line-height-3"
                            >Алина Родионова
                            <span class="text-700">Я сделаю работу за <span class="text-blue-500">1000$</span></span>
                        </span>
						<span class="pl-1 text-900 line-height-3">0:45</span>
                    </li>
                </ul>
            </div>
            <!--div
                class="px-4 py-5 shadow-2 flex flex-column md:flex-row md:align-items-center justify-content-between mb-3"
                style="border-radius: 1rem; background: linear-gradient(0deg, rgba(0, 123, 255, 0.5), rgba(0, 123, 255, 0.5)), linear-gradient(92.54deg, #1c80cf 47.88%, #ffffff 100.01%)"
            >
                <div>
                    <div class="text-blue-100 font-medium text-xl mt-2 mb-3">TAKE THE NEXT STEP</div>
                    <div class="text-white font-medium text-5xl">Try PrimeBlocks</div>
                </div>
                <div class="mt-4 mr-auto md:mt-0 md:mr-0">
                    <a href="https://www.primefaces.org/primeblocks-vue" class="p-button font-bold px-5 py-3 p-button-warning p-button-rounded p-button-raised"> Get Started </a>
                </div>
            </div-->
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
  layout: 'lite-theme'
</route>