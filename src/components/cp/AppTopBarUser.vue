<template>
  <!-- eslint-disable -->
  <div
    class="layout-topbar-user fixed top-0 bg-indigo-900 text-white left-0 h-5rem w-full px-5 flex align-items-center justify-content-between"
  >
    <div class="flex col-1">
      <router-link to="/" class="layout-topbar-logo">
        <img :src="logoUrl" alt="logo" />
      </router-link>
    </div>

    <div class="col-3 flex align-items-center">
      <div
        class="flex flex-column justify-content-center px-4 mr-4 surface-900 h-5rem"
      >
        <span class="uppercase text-2xl">username</span>
        <div>
          <span class="uppercase text-sm">новичок</span> - <span>0%</span>
        </div>
      </div>
      <div>
        <i class="pi pi-inbox text-4xl"></i>
      </div>
    </div>

    <div class="col-6 flex justify-content-end gap-4 pr-6">
      <div class="flex flex-column">
        <span class="">Кешбек</span>
        <span class="text-2xl text-right font-bold">0 T</span>
      </div>

      <div class="flex flex-column">
        <span class="">Баллы</span>
        <span class="text-2xl text-right font-bold">0</span>
      </div>

      <div class="flex flex-column">
        <span class="">На счете</span>
        <span class="text-2xl text-right font-bold">0 T</span>
      </div>
    </div>

    <div class="col-2 bg-yellow-200 h-5rem p-0">
      <button
        class="border-none bg-red-500 w-full h-full text-white text-2xl uppercase"
      >
        <span> Пополнить счёт </span>
      </button>
    </div>
  </div>
</template>

<script async setup lang="ts"></script>

<style scoped></style>
