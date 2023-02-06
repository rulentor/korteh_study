<script setup>
import { ref, computed } from 'vue';
//import { useLayout } from '@/layout/composables/layout';
//const { layoutConfig, contextPath } = useLayout();
const email = ref('');
const password = ref('');
const checked = ref(false);

const logoUrl = computed(() => {
    //return `${contextPath}layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
	return 'logo-white.svg'
});
</script>

<template>
    <div class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
        <div class="flex flex-column align-items-center justify-content-center">
            <img :src="logoUrl" alt="Портал лого" class="mb-5 w-6rem flex-shrink-0" />
            <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                <div class="w-full surface-card py-8 px-5 sm:px-8" style="border-radius: 53px">
                    <div class="text-center mb-5">
                        <img src="/demo/images/login/avatar.png" alt="Image" height="50" class="mb-3" />
                        <div class="text-900 text-3xl font-medium mb-3">Вход</div>
                        <span class="text-600 font-medium">Войти на портал</span>
                    </div>

                    <div>
                        <label for="email1" class="block text-900 text-xl font-medium mb-1">Email</label>
                        <InputText id="email1" type="text" placeholder="Email address" class="w-full mb-2" style="padding: 1rem" v-model="email" />

                        <label for="password1" class="block text-900 font-medium text-xl mb-1">Пароль</label>
                        <Password id="password1" v-model="password" placeholder="Password" :toggleMask="true" class="w-full mb-2" inputClass="w-full" inputStyle="padding:1rem"></Password>

                        <div class="flex align-items-center justify-content-between mb-5 gap-5">
                            <div class="flex align-items-center">
                                <Checkbox v-model="checked" id="rememberme1" binary class="mr-2"></Checkbox>
                                <label for="rememberme1">Запомнить меня</label>
                            </div>
                            <a class="font-medium no-underline ml-2 text-right cursor-pointer" style="color: var(--primary-color)">Forgot password?</a>
                        </div>
                        <Button label="Войти" class="w-full p-3 text-xl"></Button>
                    </div>
					
<div class="card text-center">
        <div class="template">
            <Button class="google p-0" aria-label="Google">
                <i class="pi pi-google px-2"></i>
                <span class="px-3">Google</span>
            </Button>
            <Button class="vimeo p-0" aria-label="Vk">
                <i class="pi pi-reddit px-2"></i>
                <span class="px-3">Vk</span>
            </Button>
            <Button class="facebook p-0" aria-label="Facebook">
                <i class="pi pi-facebook px-2"></i>
                <span class="px-3">Facebook</span>
            </Button>
            <Button class="discord p-0" aria-label="Discord">
                <i class="pi pi-discord px-2"></i>
                <span class="px-3">Discord</span>
            </Button>
        </div>
            </div>
				
					
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
