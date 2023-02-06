<template>
  <div class="component-winners grid mb-6">
    <Carousel
      :value="winnersMock"
      :numVisible="5"
      :numScroll="1"
      :circular="false"
      :autoplayInterval="sliderInterval"
      :showNavigators="false"
      :showIndicators="false"
      class="w-full"
    >
      <template #item="slotProps">
        <div class="flex gap-4 py-4 bg-white px-4">
          <div class="h-6rem">
            <img
              class="h-full border-round-2xl"
              :src="`/public/images/winners/${slotProps.data.image}`"
            />
          </div>
          <div class="flex flex-column justify-content-center">
            <span class="text-xl">
              {{ slotProps.data.username }}
            </span>
            <span class="text-xl font-bold"> {{ generateAmount() }} ₽ </span>
            <a class="text-xl font-bold" href="#">
              {{ slotProps.data.game }}
            </a>
          </div>
        </div>
      </template>
    </Carousel>
    <div class="arrows w-full">1</div>
  </div>
</template>

<script async setup lang="ts">
import { winnersMock } from "../mocks/winners"
const sliderInterval = 2000

const generateAmount = () => {
  return Math.floor(Math.random() * (800 - 1 + 1) + 1) * 500
}
</script>

<style lang="scss" scoped>
.arrows {
  height: 0.5rem;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDE4IDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+PHBhdGggZD0iTTkgMEwwIDhWMEg5SDI3SDQ1SDYzSDgxSDk5SDExN0gxMzVIMTUzSDE3MUgxODlIMjA3SDIyNUgyNDNIMjYxSDI3OUgyOTdIMzE1SDMzM0gzNTFIMzY5SDM3NVY1LjMzMzMzTDM2OSAwTDM2MCA4TDM1MSAwTDM0MiA4TDMzMyAwTDMyNCA4TDMxNSAwTDMwNiA4TDI5NyAwTDI4OCA4TDI3OSAwTDI3MCA4TDI2MSAwTDI1MiA4TDI0MyAwTDIzNCA4TDIyNSAwTDIxNiA4TDIwNyAwTDE5OCA4TDE4OSAwTDE4MCA4TDE3MSAwTDE2MiA4TDE1MyAwTDE0NCA4TDEzNSAwTDEyNiA4TDExNyAwTDEwOCA4TDk5IDBMOTAgOEw4MSAwTDcyIDhMNjMgMEw1NCA4TDQ1IDBMMzYgOEwyNyAwTDE4IDhMOSAwWiIgZmlsbD0id2hpdGUiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJjbGlwMCI+PHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjgiIGZpbGw9IndoaXRlIi8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+);
}
</style>
