<script setup>
import { onMounted, reactive, ref, watch } from 'vue';
import ProductService from '~/service/ProductService';
//import { useLayout } from '@/layout/composables/layout';
//const { isDarkTheme, contextPath } = useLayout();

const products = ref(null);
const lineData = reactive({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: '#2f4860',
            borderColor: '#2f4860',
            tension: 0.4
        },
        {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            backgroundColor: '#00bb7e',
            borderColor: '#00bb7e',
            tension: 0.4
        }
    ]
});
const items = ref([
    { label: 'Add New', icon: 'pi pi-fw pi-plus' },
    { label: 'Remove', icon: 'pi pi-fw pi-minus' }
]);
const lineOptions = ref(null);
const productService = new ProductService();

onMounted(() => {
    productService.getProductsSmall().then((data) => (products.value = data));
});

const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
const applyLightTheme = () => {
    lineOptions.value = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            }
        }
    };
};

const applyDarkTheme = () => {
    lineOptions.value = {
        plugins: {
            legend: {
                labels: {
                    color: '#ebedef'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#ebedef'
                },
                grid: {
                    color: 'rgba(160, 167, 181, .3)'
                }
            },
            y: {
                ticks: {
                    color: '#ebedef'
                },
                grid: {
                    color: 'rgba(160, 167, 181, .3)'
                }
            }
        }
    };
};

watch(
    //isDarkTheme,
    (val) => {
        if (val) {
            applyDarkTheme();
        } else {
            applyLightTheme();
        }
    },
    { immediate: true }
);
</script>

<template>
    <div class="grid">


        <div class="col-12 xl:col-6">

            <div class="card">
                <div class="flex justify-content-between align-items-center mb-5">
                    <h5>Заказать работу</h5>
                    <div>
                        <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" @click="$refs.menu2.toggle($event)"></Button>
                        <Menu ref="menu2" :popup="true" :model="items"></Menu>
                    </div>
                </div>
                <ul class="list-none p-0 m-0">
                    <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                        <div>
                            <span class="text-900 font-medium mr-2 mb-1 md:mb-0">Рязанов Иван Порфирьевич</span>
							<span class="text-900 font-medium mr-2 mb-1 md:mb-0">rozan rozan@tair.ru</span>
                            <div class="mt-1 text-600">мл. модератор (забанен 1ч.)</div>
                        </div>
                        <div class="mt-2 md:mt-0 flex align-items-center">
                            <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height: 8px">
                                <div class="bg-orange-500 h-full" style="width: 50%"></div>
                            </div>
                            <span class="text-orange-500 ml-3 font-medium">%50</span>
                        </div>
                    </li>
                    <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                        <div>
                            <span class="text-900 font-medium mr-2 mb-1 md:mb-0">Анкета</span>
                            <div class="mt-1 text-600">13.13.22, РФ Баден-Баден</div>
                        </div>
                        <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                            <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height: 8px">
                                <div class="bg-cyan-500 h-full" style="width: 16%"></div>
                            </div>
                            <span class="text-cyan-500 ml-3 font-medium">%16</span>
                        </div>
                    </li>
                    <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                        <div>
                            <span class="text-900 font-medium mr-2 mb-1 md:mb-0">Платёжные данные</span>
                            <div class="mt-1 text-600">Тинькофф</div>
                            <div class="mt-1 text-600">****3232 Баланс - 12 монет</div>							
                        </div>
                        <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                            <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height: 8px">
                                <div class="bg-pink-500 h-full" style="width: 67%"></div>
                            </div>
                            <span class="text-pink-500 ml-3 font-medium">%67</span>
                        </div>
                    </li>

                </ul>
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
