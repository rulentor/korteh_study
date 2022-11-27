<template>
<!-- eslint-disable -->
    <header class="header" style="  z-index: 1000;">
      <!--a id="btn-collapse" href="#">
        <i class="ri-menu-line ri-xl"></i>
      </a-->
	  <Button class="p-link layout-topbar-button" type="button" label="" @click="toggle" aria-haspopup="true" aria-controls="topbar_menu">
          <i class="pi pi-user"></i>
          <span class='ml-2'>Иванов Карп</span>
      </Button>	
      <!--h4></h4-->
      <router-link to="/" id="btn-toggle" class="sidebar-toggler break-point-lg">	  
        <i class="ri-menu-line ri-xl"></i>
      </router-link>
	<!--AppMenu v-if="topbarmenu_open" id="topbar-menu" ref="menu" :model="menuItems" :popup="true" /-->

        <!--button
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
        </ul-->	
	  
    </header>
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