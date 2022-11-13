доп полей нет

<template>
<div class='block-section'>
<div class='block-content'>
<div class="surface-ground px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center">


<!--div class="grid">
  <div class="col-8 md:col-8 lg:col-8 mr-6 ml-6 py-7 px-16" style="border-radius:6px; background: linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0));"-->
                
                    <!--div class="w-full md:w-10 mx-auto"-->
					<Card class='text-center surface-card p-4 shadow-2 border-round w-full lg:w-6'>
					<template #header>

                        <div class="text-900 text-xl font-medium mb-1">Регистрация</div>
                        <span class="text-600 font-medium">
						  <router-link to="/login" class="">Вход
						  </router-link>
						</span>
					  
					</template>
					<template #content>
                    <div class="field col">
					    <label for="last_name" class="block text-900 text-md font-medium mb-1">Фамилия</label>
                        <InputText id="last_name" class='p-inputtext-sm' v-model="state.last_name" type="text" placeholder="Фамилия" />
                    </div>
						<div class="formgrid grid">
							<div class="field col">
								<label for="first_name" class="block text-900 text-md font-medium mb-1">Имя</label>
								<InputText id="first_name" class='p-inputtext-sm' v-model="state.first_name" type="text" placeholder="Имя" />
								<label for="username" class="block text-900 text-md font-medium mb-1">Логин</label>
								<InputText id="username" class='p-inputtext-sm' v-model="state.username" type="text" placeholder="Логин" />
							</div>
							  <div class="field col">
								<label for="patronymic" class="block text-900 font-medium text-md mb-1">Отчество</label>
								<InputText id="patronymic" class='p-inputtext-sm' v-model="state.patronymic" type="text" placeholder="Отчество" />								
								<label for="password" class="block text-900 font-medium text-md mb-1">Пароль</label>
								<Password id="password" v-model="state.password" class='p-inputtext-sm w-full' placeholder="Password" :toggleMask="true" inputClass="w-full" inputStyle="padding:.75em"></Password>
							  </div>							  
						</div>
						<div class="formgrid grid">
							<div class="field col">						
                              <label for="email" class="block text-900 text-md font-medium mb-1">Email</label>
							  <InputText id="email" class='p-inputtext-sm' v-model="state.email" type="text" placeholder="Email" />								  
                            </div>
							<div class="field col">
							  <label for="font_name" class="block text-900 text-md font-medium mb-1">Выберите роль</label>
            			      <Dropdown class='p-inputtext-sm w-full' v-model="state.role" :options="options.role" optionLabel="name" optionValue="id" placeholder="выберите" />	

                            </div>							
                        </div>
						</template> 
                        <template #footer>
                          <Button label="Регистрация" class="p-button-md p-2 text-md" @click="actionRegister"></button>
                        </template>               
                        <!--div class="align-items-center justify-content-between mb-1 w-sm"-->
                    </Card>

		<!--/div>
</div-->
</div></div></div>
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
const addStudyOrder = ref(false)
const addAuthorOrder = ref(false)

const actionRegister = () => {
  location.href = '/index'
}

const options = ref({
  role: [
    {id: 1, name: 'Амбассадор'},
	{id: 2, name: 'Автор'},
	{id: 3, name: 'Пользователь'},	
  ],
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
  role:null,
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
.p-card .p-card-content {
  padding: 0 !important;
}
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
  layout: single
</route>
