<script setup>
import { ref, computed } from 'vue'
import { useStorage } from '@vueuse/core'
//import { useLayout } from '@/layout/composables/layout';
//import AppConfig from '@/layout/AppConfig.vue';
//const { layoutConfig, contextPath } = useLayout();
const router = useRouter()
const store = ref()
const smoothScroll = (id) => {
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    })
}

const logoUrl = computed(() => {
    //return `${contextPath}layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
	return 'logo-white.svg'
})

const onFollow = (role) => {
  console.log('role',role)
  //const store = useStorage('counter', theDefault)
  //const store = useStorage('vue-use-local-storage', theDefault)
  store.value = useUserStore()
  store.value.update({role: role})
  router.push('/auth/register')
  //console.log('store',store.value)
  //const text = stringify(store)
}
//max-w-26rem
</script>

<template>
    <div class="surface-0 flex justify-content-center">
        <div id="home" class="landing-wrapper overflow-hidden">
            <div id="features" class="py-4 px-4 lg:px-8 mt-5 mx-0 lg:mx-8">
                <div class="grid justify-content-center">

        <Card class='mb-2 bg-primary-400 text-gray-50' style='background-color: #836EFF !important;'>
            <template #title>
                <p>Здесь помогли мне помогут и вам.</p>
            </template>
            <template #content>
			<div class="flex align-items-center flex-row lg:justify-content-between lg:flex-row pt-0" >
              <div class="flex align-items-start flex-column lg:justify-content-between lg:flex-column ">

				<!--a href='/auth/register' class='mb-8'/-->
				  <Button label="Разместить задачу" @click="onFollow('reader')" class="p-button-outlined p-button-small text-gray-50" icon="pi pi-user-plus"></Button>

                <div class="flex align-items-center text-gray-50 font-medium text-1xl">
                      <i class="pi pi-clock mr-2"></i>
                      <h5 class='text-gray-50'>Будь успешным. Стань исполнителем и закажи курсовую первым!</h5>
					  
                </div>
				
               	<Button label="Стать автором" @click="onFollow('writer')" icon="pi pi-check" class='mt-2 text-gray-50 p-button-small p-button-outlined'></Button>			
	           </div>
		  

                <div class="text-white font-bold border-round m-2 flex align-items-center justify-content-center min-h-full" style="">
				  <div class="flex align-items-center justify-content-center bg-indigo-200" style="width: 100%; height: auto; border-radius: 10px">
                    <!--i class="pi pi-fw pi-map text-indigo-700" style='font-size: 14em;'></i-->
					<img src='/images/icon-library.png' class='max-w-16rem border-round'/>
                  </div>
				</div>
              </div>
            </template>
        </Card>

        <div class='mb-2 bg-gray-50 text-gray-900'>
            <h2 class='text-indigo-500 font-medium'>Гарантия возврата денег</h2>
			<div class="flex align-items-center flex-row lg:justify-content-between lg:flex-row pt-0">
              <div class="flex align-items-start flex-column lg:justify-content-between lg:flex-column ">
                <div class="flex align-items-center font-medium text-1xl">
                      <i class="pi pi-clock mr-3 text-3xl"></i>
                      <h5 style='font-size:.9em;'>
					    <strong>Безопасная сделка</strong>
						<p class='text-gray-500'> Деньги всегда заморожены на Вашем балансе Вы контролируете выплаты сами.</p>
                      </h5>
				</div>
                <div class="flex align-items-center font-medium text-1xl">
                      <i class="pi pi-bookmark mr-3 text-3xl"></i>
                      <h5 style='font-size:.9em;'>
					    <strong>Безопасная сделка</strong>
						<p class='text-gray-500'> Деньги всегда заморожены на Вашем балансе Вы контролируете выплаты сами.</p>
                      </h5>
				</div>				
	           </div>
		  

                <div class="text-white m-1 flex flex-column lg:justify-content-between lg:flex-column align-items-center justify-content-center min-h-full" style="">
                    <h4 class='text-blue-700 font-medium'>Процесс заказа работы</h4>
				  <div class="flex flex-row align-items-center justify-content-center" style="width: 100%; height: auto; border-radius: 10px">

                    <div class="col-12 md:col-4 lg:col-4 p-0 lg:pr-2 lg:pb-2 mt-2 lg:mt-0">
                        <div class='p-1 min-h-full'
                            style="border-radius: 10px; background: linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))"
                        >
                            <div class="bg-gray-700 p-3 surface-card h-full" style="border-radius: 8px">
                                <div class="flex align-items-center justify-content-center mb-3 w-full" style="border-radius: 10px">
                                    <i class="pi pi-fw pi-users text-6xl text-gray-500"></i>
                                </div>
                                <p class="mb-2 text-900">Размещаете задачу</p>
                                <p class="text-600">Заполняете нужные параметры</p>								
                            </div>

                        </div>
                    </div>
                    <div class="col-12 md:col-4 lg:col-4 p-0 lg:pr-2 lg:pb-2 mt-2 lg:mt-0">
                        <div class='p-1 min-h-full'
                            style="border-radius: 10px; background: linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))"
                        >
                            <div class="bg-gray-700 p-3 surface-card h-full" style="border-radius: 8px">
                                <div class="flex align-items-center justify-content-center mb-3 w-full" style="border-radius: 10px">
                                    <i class="pi pi-fw pi-users text-6xl text-gray-500"></i>
                                </div>
                                <p class="mb-2 text-900">Размещаете задачу</p>
                                <p class="text-600">Заполняете нужные параметры</p>								
                            </div>

                        </div>
                    </div>
                    <div class="col-12 md:col-4 lg:col-4 p-0 lg:pr-2 lg:pb-2 mt-2 lg:mt-0">
                        <div class='p-1 min-h-full'
                            style="border-radius: 10px; background: linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))"
                        >
                            <div class="bg-gray-700 p-3 surface-card h-full" style="border-radius: 8px">
                                <div class="flex align-items-center justify-content-center mb-3 w-full" style="border-radius: 10px">
                                    <i class="pi pi-fw pi-users text-6xl text-gray-500"></i>
                                </div>
                                <p class="mb-2 text-900">Размещаете задачу</p>
                                <p class="text-600">Заполняете нужные параметры</p>								
                            </div>

                        </div>
                    </div>


					
                  </div>
				</div>
              </div>
        </div>


			
<!--div class="surface-card h-full shadow-2 p-3 border-round px-4 py-5 md:px-6 lg:px-8" style="border-radius: 8px">
    <div class="flex align-items-start flex-column lg:justify-content-between lg:flex-column">
        <div>
            <div class="font-medium text-3xl text-900">Здесь помогли мне помогут и вам</div>

        </div>
        <div class="mt-3 lg:mt-0">
            <a href='/auth/register'><Button label="Разместить задачу" class="p-button-outlined p-button-small mr-2" icon="pi pi-user-plus"></Button></a>
            
        </div>
    </div>
</div-->				
				
				
                    <!--div class="col-12 text-center mt-2 mb-4">
                        <h2 class="text-900 font-normal mb-2">Процесс заказа работы</h2>
                        <span class="text-600 text-2xl">Гарантия возврата денег</span>
                    </div>

                    <div class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                        <div
                            style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))"
                        >
                            <div class="p-3 surface-card h-full" style="border-radius: 8px">
                                <div class="flex align-items-center justify-content-center bg-yellow-200 mb-3" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-users text-2xl text-yellow-700"></i>
                                </div>
                                <h5 class="mb-2 text-900">Размещаете задачу</h5>
                                <span class="text-600"></span>
                            </div>
                        </div>
                    </div-->

                   </div>
                </div>







        </div>
    </div>
<!-- dark:text-white dark:bg-hex-121212" -->
</template>
<route lang="yaml">
meta:
  layout: 'lite-theme'
</route>
<!-- <style scoped>
#hero {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #eeefaf 0%, #c3e3fa 100%);
    height: 700px;
    overflow: hidden;
}

@media screen and (min-width: 768px) {
    #hero {
        -webkit-clip-path: ellipse(150% 87% at 93% 13%);
        clip-path: ellipse(150% 87% at 93% 13%);
        height: 530px;
    }
}

@media screen and (min-width: 1300px) {
    #hero > img {
        position: absolute;
    }

    #hero > div > p {
        max-width: 450px;
    }
}

@media screen and (max-width: 1300px) {
    #hero {
        height: 600px;
    }

    #hero > img {
        position: static;
        transform: scale(1);
        margin-left: auto;
    }

    #hero > div {
        width: 100%;
    }

    #hero > div > p {
        width: 100%;
        max-width: 100%;
    }
}
</style> -->
