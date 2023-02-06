<script setup>
import { onMounted, reactive, ref, watch } from 'vue';

const onProfile = ref(false)
const metrics = reactive({
  reg_today: null,
  dep_amount: null,
  dep_sum: null,
  first_dep_amount: null,
  first_dep_sum: null,
  first_dep_avg: null,
  repeat_dep_amount: null,
  repeat_dep_sum: null,
  repeat_dep_avg: null,
  users_win: null,
  users_lose: null,
  diff_win_lose: null,  
})

//const

const {data: result, error} = useFetch({
  url: 'https://vm4131020.62ssd.had.wf/api/admin/metrics',
}) // /metrics

watchEffect(async () => {
   if(result.value) {
    //console.log('metrics',data)
	 //const raw = await JSON.parse(result.value)
	 //{ metrics } = ...raw
	 const raw = await result.value
     metrics.reg_today = raw.reg_today || 0
	 metrics.to_uniq_lides = raw.to_uniq_lides || 0
     metrics.dep_amount = raw.dep_amount || 0
     metrics.dep_sum = raw.dep_sum
     metrics.first_dep_amount = raw.first_dep_amount
     metrics.first_dep_sum = raw.first_dep_sum
     metrics.first_dep_avg = raw.first_dep_avg
     metrics.repeat_dep_amount = raw.repeat_dep_amount
     metrics.repeat_dep_sum = raw.repeat_dep_sum
     metrics.repeat_dep_avg = raw.repeat_dep_avg
     metrics.users_win = raw.users_win
     metrics.users_lose = raw.users_lose
     metrics.diff_win_lose = raw.diff_win_lose
   }
   console.log('metrics',metrics.value)
})

const items = ref([
    { label: 'Add New', icon: 'pi pi-fw pi-plus' },
    { label: 'Remove', icon: 'pi pi-fw pi-minus' }
]);
const lineOptions = ref(null);

onMounted(() => {
    //init()
});

//const formatCurrency = (value) => {
//    return value.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });
//};


watch(
    //isDarkTheme,
    (val) => {
        if (val) {
            //applyDarkTheme();
        } else {
            //applyLightTheme();
        }
    },
    { immediate: true }
);
</script>

<template>
    <div class="grid">
        <div class="col-6 lg:col-6 xl:col-3 h-full">
            <div class="card mb-0 h-full">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Пользователей</span>
                        <div class="text-900 font-medium text-xl">{{ metrics.reg_total }}</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
                    </div>
                </div>
				<div>
                  <Button icon="pi pi-user" class="p-button-rounded p-button-info p-button-text" label="Регистраций" :badge="String(metrics.reg_today)" badgeClass="p-badge-blue"/>        
                  <Button icon="pi pi-user" class="p-button-rounded p-button-info p-button-text" label="Конверсий из уник. в рег." :badge="String(metrics.to_uniq_lides)" badgeClass="p-badge-blue"/>        
				  <!--Button class='mt-2 p-button-sm p-button-raised p-button-secondary p-button-text'>Просмотр регистраций</Button-->				
                </div>
            </div>
        </div>
        <div class="col-6 lg:col-6 xl:col-3 h-full">
            <div class="card mb-0">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Счета по депозитам</span>
                        <div class="text-900 font-medium text-xl">{{ metrics.dep_amount }}</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-map-marker text-orange-500 text-xl"></i>
                    </div>
                </div>
				<div>
                  <Button icon="pi pi-user" class="p-button-rounded p-button-info p-button-text" label="Всего" :badge="String(metrics.dep_sum)" badgeClass="p-badge-blue"/>        
                  <Button icon="pi pi-user" class="p-button-rounded p-button-info p-button-text" label="Сегодня депозитов" :badge="String(metrics.dep_today)" badgeClass="p-badge-blue"/>        
				</div>	
                <div class="grid text-center">
                  <div class="col-6 md:col-4 mb-1 px-2">
                    <span class="p-3 shadow-2 mb-1 inline-block surface-card" style="border-radius: 6px">
					  <i class="pi pi-apple mr-4 p-text-secondary text-1xl text-blue-300" style="font-size: 1.5rem" v-badge.success="metrics.to_reg_depo"></i>
                    </span>
                    <p class="text-700 line-height-2">Конверсий рег. в депозиты</p>
                  </div>
                  <div class="col-6 md:col-4 mb-1 px-2">
                    <span class="p-3 shadow-2 mb-1 inline-block surface-card" style="border-radius: 6px">
                      <i class="pi pi-apple mr-4 p-text-secondary text-1xl text-blue-300" style="font-size: 1.5rem" v-badge.danger="metrics.first_dep_sum"></i>
                    </span>
                    <p class="text-700 line-height-2">Сумма первых депозитов</p>
                  </div>
                  <div class="col-6 md:col-4 mb-1 px-2">
                    <span class="p-3 shadow-2 mb-1 inline-block surface-card" style="border-radius: 6px">
                      <i class="pi pi-apple mr-4 p-text-secondary text-1xl text-blue-300" style="font-size: 1.5rem" v-badge.danger="metrics.first_dep_avg"></i>
                    </span>
                    <p class="text-700 line-height-2">Средний первый депозит</p>
                  </div>				  
                </div>		

            </div>
        </div>
        <div class="col-6 lg:col-6 xl:col-3">
            <div class="card mb-0">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Игры</span>
                        <div class="text-900 font-medium text-xl">28441 партий сыграно</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-cyan-100 border-round" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-inbox text-cyan-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">20 принесло доход в казино</span>
                <span class="text-500">в прошедший месяц</span>
                <div class="grid text-center">
                  <div class="col-6 md:col-4 mb-1 px-2">
                    <span class="p-3 shadow-2 mb-1 inline-block surface-card" style="border-radius: 6px">
					  <i class="pi pi-apple mr-4 p-text-secondary text-1xl text-blue-300" style="font-size: 1.5rem" v-badge.success="metrics.users_win"></i>
                    </span>
                    <p class="text-700 line-height-2">Выигрыш игроков</p>
                  </div>
                  <div class="col-6 md:col-4 mb-1 px-2">
                    <span class="p-3 shadow-2 mb-1 inline-block surface-card" style="border-radius: 6px">
                      <i class="pi pi-apple mr-4 p-text-secondary text-1xl text-blue-300" style="font-size: 1.5rem" v-badge.danger="metrics.users_lose"></i>
                    </span>
                    <p class="text-700 line-height-2">Проигрыш игроков</p>
                  </div>
                  <div class="col-6 md:col-4 mb-1 px-2">
                    <span class="p-3 shadow-2 mb-1 inline-block surface-card" style="border-radius: 6px">
                      <i class="pi pi-apple mr-4 p-text-secondary text-1xl text-blue-300" style="font-size: 1.5rem" v-badge.danger="metrics.diff_win_lose"></i>
                    </span>
                    <p class="text-700 line-height-2">Средний процент успеха</p>
                  </div>				  
                </div>				
            </div>
        </div>
        <div class="col-12 lg:col-6 xl:col-3">
            <div class="card mb-0">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Техподдержка</span>
                        <div class="text-900 font-medium text-xl">152 обращений в системе</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-purple-100 border-round" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-comment text-purple-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">5 </span>
                <span class="text-500">выполнено за прошедший час</span>
            </div>
        </div>


    </div>
</template>
<route lang="yaml">
meta:
  layout: 'lite-theme'
</route>