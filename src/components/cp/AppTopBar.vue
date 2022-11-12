<template>
<!-- eslint-disable -->
    <div class="layout-topbar">
	    <Toast/>
	    <!--Button class="p-button-rounded p-button-text" icon="pi pi-user" type="button" label="" @click="$refs.menu.toggle($event)" aria-haspopup="true" aria-controls="overlay_menu"/-->
		<Button class="p-link layout-topbar-button" type="button" label="" @click="toggle" aria-haspopup="true" aria-controls="topbar_menu">
          <i class="pi pi-user"></i>
          <span>Profile</span>
        </Button>
		
    <!--Button class="p-button-rounded p-button-text" icon="pi pi-user" type="button" label="" @click="toggle" aria-haspopup="true" aria-controls="topbar_menu" $emit('add-project', $event.target.value)/-->
    <h4>Иванов Карп</h4>
	<AppMenu v-if="topbarmenu_open" id="topbar-menu" ref="menu" :model="menuItems" :popup="true" />

	<!--Menu id="overlay_menu" ref="menu" :model="menuItems" :popup="true" /-->
        <router-link to="/" class="layout-topbar-logo">
            <!--img alt="Logo" :src="topbarImage()" /-->
            <!--span style="font-size: 1.2rem; margin-left:1rem">{{ stateuser?.first_name }} {{ stateuser?.last_name }}</span-->
        </router-link>


        
        <button
            class="p-link layout-topbar-menu-button layout-topbar-button"
            v-styleclass="{
                selector: '@next',
                enterClass: 'hidden',
                enterActiveClass: 'scalein',
                leaveToClass: 'hidden',
                leaveActiveClass: 'fadeout',
                hideOnOutsideClick: true,
            }"
        >
            <i class="pi pi-ellipsis-v"></i>
        </button>
        <ul class="layout-topbar-menu lg:flex origin-top">
            <li>
               <button class="p-link layout-topbar-button">
			     <i class="pi pi-sign-out"></i>
			   </button>
            </li>
        </ul>			
        <!--ul class="layout-topbar-menu md:hidden lg:flex origin-top" style='display:none !important'>
            <li>
			<span style="font-size: 1.2rem; margin-left:1rem">
                <button class="p-link layout-topbar-button">
                    <i class="pi pi-calendar"></i>
                    <span>Events</span>
                </button>
            </li>
            <li>
                <button class="p-link layout-topbar-button">
                    <i class="pi pi-cog"></i>
                    <span>Settings</span>
                </button>
            </li>
            <li>
                <button class="p-link layout-topbar-button">
                    <i class="pi pi-user"></i>
                    <span>Profile</span>
                </button>
            </li>
        </ul-->
    </div>
</template>
<script async setup lang="ts">
import { ref } from 'vue'
defineProps({
  stateuser: Object,
  default: {}
})
const menuItems = ref()
const toggle = () => {

}
</script>
<style scoped></style>