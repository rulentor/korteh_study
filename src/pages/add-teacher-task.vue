<template>
    <div class="grid panel-demo">
	    <ConfirmDialog/>
		
        <div class="col-8 md:col-8">
		  <div class="card p-fluid">
            <div class="formgrid grid">
			  <div class="field">
				<label for="description">Расскажите подробнее о задании</label>
				<Textarea id='description' v-model="description" :autoResize="true" rows="5" cols="30" />
			  </div>			  
			</div>

<!--Главная, Мои заказы-->

                    <h5>Уточнить детали заказа</h5>	
					<div class="formgrid grid">
					  <div class="col">
					  <div class="field">
						<label for="phone">Ваш телефон</label>
						<InputText id="phone" type="text" :value="state.phone"/>
                      </div>
					  <div class="field">					  
						<label for="job_type">Тип работы</label>
            			<Dropdown v-model="state.job_type" :options="options.job_type" optionLabel="name" optionValue="id" placeholder="выберите" />	
                      </div>
					  <div class="field">	
						<label for="title">Название работы</label>
						<InputText id="title" type="text" :value="state.title"/>
                      </div>
					  <div class="field">							
						<label for="tabs">Поля</label>
						<InputText id="tabs" type="text" :value="state.tabs"/>	
                      </div>
					  <div class="field">							
						<label for="interval">Интервал</label>
						<InputText id="interval" type="text" :value="state.interval"/>	
                      </div>
					  <div class="field">							
                        <label for="orygin">Оригинальность: {{ state.orygin }}</label>
                        <Slider v-model="state.orygin" />	
                      </div>						
    				  </div>
					  <div class="col">
					  <div class="field">						  
						<label for="email">Email</label>
						<InputText id="email" type="text" :value="state.email"/>
                      </div>
					  <div class="field">							
						<label for="sciense">Дисциплина</label>
						<InputText id="sciense" type="text" :value="state.sciense"/>
                      </div>
					  <div class="field">	
						<label for="pages">Кол-во стр.</label>
						<InputText id="pages" type="text" :value="state.pages"/>
                      </div>
					  <div class="field">							
						<label for="font_name">Шрифт</label>
            			<Dropdown v-model="state.font_name" :options="options.font_name" optionLabel="name" optionValue="id" placeholder="выберите" />	
                      </div>
					  <div class="field">	
						<label for="font_size">Размер текста</label>
            			<Dropdown v-model="state.font_size" :options="options.font_size" optionLabel="name" optionValue="id" placeholder="выберите" />	
					  </div>
					  <div class="field">	
						<label for="file" class="ml-6">Загрузка файла</label>
                        <FileUpload name="file[]" :customUpload="true" @uploader="importUploader" mode="basic" ref='file' accept="" :maxFileSize="50000000000" label="Файл" chooseLabel="Файл" class="ml-6" :auto="true"/>					
					  </div>					  
					  </div>
					</div>

                    <h5>Срок сдачи</h5>	
					<div class="formgrid grid">
					  <div class="field col">
						<label for="range">Выберите интервал от и до</label>
						<Calendar inputId="range" v-model="state.dates" selectionMode="range" :manualInput="false" :touchUI="true" dateFormat="dd.mm.yy"/>				  
    				  </div>
					</div>
                    <h5>Бюджет (руб.)</h5>	
					<div class="formgrid grid">
					  <div class="field col">
						<label for="price_from">От</label>
						<InputText id="price_from" type="text" :value="state.price_from"/>				  
    				  </div>
					  <div class="field col">
						<label for="price_to">До</label>
						<InputText id="price_to" type="text" :value="state.price_to"/>				  
    				  </div>					  
					</div>
					
						<div class="field ">
								<label for="frequency">Уточнить детали заказа</label>
								авт. сохранение
								Чат - сворачиваться экономия места
						</div>

					<div class="formgrid grid">					
					<div class="field col">
					    <Button label="Разместить заказ" @click="addVideo" icon="pi pi-check" class="p-button-success" :disabled="isSendButton"/>
						<!--Button label="Субтитры" @click="showAddSubs = !showAddSubs" icon="pi pi-check" class="p-button-success" /-->
                    </div>
					<div class="field col">
                        <Button label="Сбросить форму" @click="showAddVideo = !showAddVideo" icon="pi pi-check" class="p-button-secondary" />
                    </div>
						
					</div>
                </div>

        </div>
		
		
    <div class="col-4 md:col-4">
	  <div class="card p-fluid">

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
