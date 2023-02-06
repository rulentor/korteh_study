<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useStorage } from '@vueuse/core'
//import { useLayout } from '@/layout/composables/layout';
//const { layoutConfig, contextPath } = useLayout();
const router = useRouter()
const store = ref()
const active = ref(0)
const email = ref('')
const password = ref('')
const checked = ref(false)

  store.value = useUserStore()

const state = reactive({
  id: null,
  role: null,
  login: null,
  password: null,
  email: null,
})
const onRegister = () => {
  let url = 'home'
  store.value.update({
    login: 'Test',
	email: state.email,
	password: state.password,
  })
//if(active.value === 0) url = 'home' //'add-work-reader'
//if(active.value === 1) url = 'home' //'add-work-writer'
router.push(`/${state.role}/`)
//const params = state
//router.push({ path: '/home', name: 'home', params: { userId: '123' } })
}
const logoUrl = computed(() => {
    //return `${contextPath}layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
	return 'logo-white.svg'
})

const btnreader = ref()
const btnwriter = ref()

const init = () => {
  state.role = store.value.data.role || null
  if(state.role === 'reader') { 
    btnreader.value.focus()
    active.value = 0	
  }
  if(state.role === 'writer') { 
    btnwriter.value.focus()
    active.value = 1	
  }
}

  onMounted(
    async () => { 
      //console.log('btn',await btnreader.value)
      //btnreader.value.focus()
	  //btnreader.value.focus()
	  init()
	}
  )



</script>

<template>
<!--div class="card">
    <div class="flex justify-content-center flex-wrap card-container yellow-container">
        <div class="flex align-items-center justify-content-center w-4rem h-4rem bg-yellow-500 font-bold text-gray-900 border-round m-2">1</div>
        <div class="flex align-items-center justify-content-center w-4rem h-4rem bg-yellow-500 font-bold text-gray-900 border-round m-2">2</div>
        <div class="flex align-items-center justify-content-center w-4rem h-4rem bg-yellow-500 font-bold text-gray-900 border-round m-2">3</div>
    </div>
</div-->


    <div class="flex flex-row justify-content-center align-items-center surface-card m-4 shadow-2">

      <div class="shadow-2 p-1 flex flex-column align-items-center justify-content-center surface-card m-4 max-w-14rem" >

		  <button ref='btnreader' class="text-center p-button p-button-lg p-button-outlined min-w-12rem m-2 col-10" @click="active = 0">
		    <div class='flex flex-column text-center w-full'>
		    <i class="pi pi-clock m-2 text-4xl"></i>
		    <p> заказчик </p>
			</div>
		  </button>
		

		  <button ref='btnwriter' class="p-button p-button-lg p-button-outlined max-w-12rem m-2 col-10" @click="active = 1" ><!-- disabled="disabled" -->
		    <div class='flex flex-column w-full'>
		    <i class="pi pi-clock m-2 text-4xl"></i>
		    <p class='text-1xl'>исполнитель</p>
			</div>		  
		  </button>
		
	  </div>
      <div class="p-1 flex flex-column surface-card m-2 col-3" >
        <div class="col-12 md:col-12">


				
                <TabView v-model:activeIndex="active" class='text-center w-full'>
                  <TabPanel >
				    <template #header>
			          <i class="pi pi-user"></i>
			          <!--span>Заказать работу</span-->
		            </template>
                    <div class="text-900 font-medium text-xl mb-2">Регистрируйся и размещай заказ</div>
                  </TabPanel>
                  <TabPanel>
				    <template #header>
			          <i class="pi pi-user-edit"></i>
			          <!--span>Заказать работу</span-->
		            </template>				  
                    <div class="text-900 font-medium text-xl mb-2">Регистрация автором</div>
                  </TabPanel>

                </TabView>	
                <div class="text-600">Заполните все поля</div>				
                <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                <div class="w-full surface-card border-radius" >
                    <div>
                        <label for="email" class="block text-900 text-xl font-medium mb-1">Email</label>
                        <InputText id="email" type="text"  v-model="state.email" placeholder="Email address" class="w-full mb-1" inputClass="w-full" style="padding:.5rem" />

                        <label for="password" class="block text-900 font-medium text-xl mb-1">Пароль</label>
                        <Password id="password" v-model="state.password" placeholder="Password" :toggleMask="true" class="w-full mb-1" inputClass="w-full" inputStyle="padding:.5rem"></Password>

                        <div class="flex align-items-center justify-content-between mb-5 gap-1">
                            <div class="flex align-items-center">
                            </div>
                            <a class="font-medium no-underline ml-2 text-right cursor-pointer" style="color: var(--primary-color)">Войти как пользователь</a>
                        </div>
						<div class='w-full text-center mb-4'>
                        <Button label="Регистрация" @click='onRegister' class="w-max-content px-4 py-2 text-md p-button-small p-button-outlined"></Button>
                        </div>
						<div class='w-full text-center'>
                          <Button icon="pi pi-google" class="p-button-outlined p-button-secondary" />
                          <Button icon="pi pi-facebook" class="p-button-outlined p-button-success" />
                          <Button icon="pi pi-twitter" class="p-button-outlined p-button-info" />
                          <Button icon="pi pi-discord" class="p-button-outlined p-button-warning" />
                        </div>						
						<!--router-link :to="{ path: '/home' }">
                        <Button label="Регистрация" class="w-full p-3 text-xl p-button-small p-button-outlined"></Button>
						</router-link-->
					
					</div>

			
				
				
                   <!--ul class="list-none p-0 m-0 flex-grow-1">
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Arcu vitae elementum</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Dui faucibus in ornare</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Morbi tincidunt augue</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Duis ultricies lacus sed</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Imperdiet proin</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Nisi scelerisque</span>
                        </li>
                    </ul-->
                </div>
            </div>

    </div>

</div>
</template>
<route lang="yaml">
meta:
  layout: 'single'
</route>
<style lang="scss" scoped>
    .p-button {
    margin-right: 0.5rem;
}

.p-buttonset {
    .p-button {
        margin-right: 0;
    }
}

.sizes {
    .button {
        margin-bottom: 0.5rem;
        display: block;

        &:last-child {
            margin-bottom: 0;
        }
    }
}

.template .p-button i {
    line-height: 2.25rem;
}
.template .p-button.google {
    background: linear-gradient(to left, var(--purple-600) 50%, var(--purple-700) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #fff;
    border-color: var(--purple-700);
}
.template .p-button.google:hover {
    background-position: left bottom;
}
.template .p-button.google i {
    background-color: var(--purple-700);
}
.template .p-button.google:focus {
    box-shadow: 0 0 0 1px var(--purple-400);
}
.template .p-button.youtube {
    background: linear-gradient(to left, var(--pink-600) 50%, var(--pink-700) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #fff;
    border-color: var(--pink-700);
}
.template .p-button.youtube:hover {
    background-position: left bottom;
}
.template .p-button.youtube i {
    background-color: var(--pink-700);
}
.template .p-button.youtube:focus {
    box-shadow: 0 0 0 1px var(--pink-400);
}
.template .p-button.vimeo {
    background: linear-gradient(to left, var(--green-200) 50%, var(--green-300) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #000;
    border-color: var(--green-300);
}
.template .p-button.vimeo:hover {
    background-position: left bottom;
}
.template .p-button.vimeo i {
    background-color: var(--green-300);
}
.template .p-button.vimeo:focus {
    box-shadow: 0 0 0 1px var(--green-400);
}
.template .p-button.facebook {
    background: linear-gradient(to left, var(--indigo-600) 50%, var(--indigo-700) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #fff;
    border-color: var(--indigo-700);
}
.template .p-button.facebook:hover {
    background-position: left bottom;
}
.template .p-button.facebook i {
    background-color: var(--indigo-700);
}
.template .p-button.facebook:focus {
    box-shadow: 0 0 0 1px var(--indigo-400);
}
.template .p-button.twitter {
    background: linear-gradient(to left, var(--blue-400) 50%, var(--blue-500) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #fff;
    border-color: var(--blue-500);
}
.template .p-button.twitter:hover {
    background-position: left bottom;
}
.template .p-button.twitter i {
    background-color: var(--blue-500);
}
.template .p-button.twitter:focus {
    box-shadow: 0 0 0 1px var(--blue-200);
}
.template .p-button.slack {
    background: linear-gradient(to left, var(--orange-400) 50%, var(--orange-500) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #fff;
    border-color: var(--orange-500);
}
.template .p-button.slack:hover {
    background-position: left bottom;
}
.template .p-button.slack i {
    background-color: var(--orange-500);
}
.template .p-button.slack:focus {
    box-shadow: 0 0 0 1px var(--orange-200);
}
.template .p-button.amazon {
    background: linear-gradient(to left, var(--yellow-400) 50%, var(--yellow-500) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #000;
    border-color: var(--yellow-500);
}
.template .p-button.amazon:hover {
    background-position: left bottom;
}
.template .p-button.amazon i {
    background-color: var(--yellow-500);
}
.template .p-button.amazon:focus {
    box-shadow: 0 0 0 1px var(--yellow-200);
}
.template .p-button.discord {
    background: linear-gradient(to left, var(--bluegray-700) 50%, var(--bluegray-800) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #fff;
    border-color: var(--bluegray-800);
}
.template .p-button.discord:hover {
    background-position: left bottom;
}
.template .p-button.discord i {
    background-color: var(--bluegray-800);
}
.template .p-button.discord:focus {
    box-shadow: 0 0 0 1px var(--bluegray-500);
}

@media screen and (max-width: 640px) {
    .p-button {
        margin-bottom: 0.5rem;

        &:not(.p-button-icon-only) {
            display: flex;
            width: 100%;
        }
    }

    .p-buttonset {
        .p-button {
            margin-bottom: 0;
        }
    }
}
</style>
