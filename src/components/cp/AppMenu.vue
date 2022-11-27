<template>
  <aside id="sidebar" class="sidebar break-point-lg has-bg-image">
    <div class="image-wrapper">
      <!-- <img src="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg" alt="sidebar background" /> -->
    </div>
    <div class="sidebar-layout">
      <div class="sidebar-header">
        <span style="
                text-transform: uppercase;
                font-size: 15px;
                letter-spacing: 3px;
                font-weight: bold;
              "> Меню</span>
      </div>
      
     
      <div class="sidebar-content">
        <nav class="menu open-current-submenu">
          <AppSubmenu :items="model" class="layout-menu" :root="true" @menuitem-click="onMenuItemClick" />
        </nav>
      </div>
      <div class="sidebar-footer"><span>Sidebar footer</span></div>
    </div>
  </aside>
</template>
<script async setup>
import { watch,ref } from 'vue'
const props = defineProps({
  model: Array
})
const emit = defineEmits(['menuitem-click'])
const onMenuItemClick = (event) => {
 emit('menuitem-click', event)
}
const bannerImage = () => {
    return '' //this.$appState.darkTheme ? 'images/banner-primeblocks-dark.png' : 'images/banner-primeblocks.png';
}
//computed: {
 //darkTheme() {return this.$appState.darkTheme;},
//},
</script>
<style scoped></style>