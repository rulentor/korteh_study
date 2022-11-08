доп полей нет

<template>
<div class="grid">
  <div class="col-8 md:col-8 lg:col-8 m-0 py-7 px-16" style="border-radius:6px; background: linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0));">

                    <div class="text-center mb-5">
                        <div class="text-900 text-3xl font-medium mb-3">Регистрация</div>
                        <span class="text-600 font-medium">
						  <router-link to="/login" class="">Вход
						  </router-link>
						</span>
                    </div>
                
                    <!--div class="w-full md:w-10 mx-auto"-->
					<div class="card p-fluid">
                    <div class="field col">
					    <label for="last_name" class="block text-900 text-xl font-medium mb-1">Фамилия</label>
                        <InputText id="last_name" v-model="state.last_name" type="text" class="mb-1" placeholder="Фамилия" style="padding:1rem;" />
                    </div>
						<div class="formgrid grid">
							<div class="field col">
								<label for="first_name" class="block text-900 text-xl font-medium mb-1">Имя</label>
								<InputText id="first_name" v-model="state.first_name" type="text" class="mb-1" placeholder="Имя" style="padding:1rem;" />
								<label for="username" class="block text-900 text-xl font-medium mb-1">Логин</label>
								<InputText id="username" v-model="state.username" type="text" class="mb-1" placeholder="Логин" style="padding:1rem;" />	
							</div>
							  <div class="field col">
								<label for="patronymic" class="block text-900 font-medium text-xl mb-1">Отчество</label>
								<InputText id="patronymic" v-model="state.patronymic" type="text" class="mb-1" placeholder="Отчество" style="padding:1rem;" />	
								<label for="password" class="block text-900 font-medium text-xl mb-1">Пароль</label>
								<Password id="password" v-model="state.password" placeholder="Password" :toggleMask="true" class="mb-1" inputClass="w-full" inputStyle="padding:1rem"></Password>
							  </div>							  
						</div>
						<div class="formgrid grid">
							<div class="field col">						
                              <label for="email" class="block text-900 text-xl font-medium mb-1">Email</label>
                              <InputText id="email" v-model="state.email" type="text" class="mb-3" placeholder="Email" style="padding:1rem;" />
                            </div>
							<div class="field col">
						      <label for="font_name">Выберите роль</label>
            			      <Dropdown v-model="state.role" :options="options.role" optionLabel="name" optionValue="id" placeholder="выберите" />	

                            </div>							
                        </div>
                
                        <div class="flex align-items-center justify-content-between mb-5"/>
                        <Button label="Регистрация" class="w-md p-3 text-xl" @click="actionRegister"></button>
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
const addStudyOrder = ref(false)
const addAuthorOrder = ref(false)

const actionRegister = () => {

}

const options = ref({
  role: [
    {id: 1, name: 'Амбассадор'},
	{id: 2, name: 'Автор'},
	{id: 3, name: 'VIP Пользователь'},	
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
