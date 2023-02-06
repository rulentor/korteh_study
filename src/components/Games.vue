<template>
  <div class="component-games grid px-3">
    <div class="flex mb-5">
      <span class="text-white mr-8 uppercase text-4xl">Select games</span>
      <label for="filter_provider" class="uppercase text-white mr-4 text-4xl">
        Provider:
      </label>
      <select
        id="filter_provider"
        class="px-4 bg-transparent text-white text-2xl"
      >
        <option value="1" class="text-color bg-black">provider 1</option>
        <option value="1" class="text-color bg-black">provider 2</option>
        <option value="1" class="text-color bg-black">provider 3</option>
      </select>
    </div>
    <div class="grid">
      <div
        v-for="(game, index) in gamesMock"
        :key="index"
        class="col-6 md:col-2 p-2"
        :class="{ 'col-12 md:col-4': game.wide }"
      >
        <div
          class="px-8 bg-no-repeat bg-cover border-round-2xl game-card"
          v-bind:style="{
            backgroundImage: `url(/public/images/games/${game.image})`,
          }"
        ></div>
        <div
          class="border-round-2xl flex flex-column justify-content-center align-items-center gap-3 game-card-hover"
        >
          <span class="uppercase font-bold text-xl text-white">
            {{ game.title }}
          </span>
          <a
            :href="game.link"
            class="px-4 py-2 bg-pink-500 text-white border-none border-round-3xl text-xl uppercase"
          >
            Play
          </a>
          <span v-if="game.demo" class="uppercase font-bold text-xl text-white">
            demo
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script async setup lang="ts">
import { gamesMock } from "../mocks/games"
</script>

<style lang="scss" scoped>
$cardHeight: 140px;

.game-card {
  height: $cardHeight;
}
.game-card-hover {
  background: #000c;
  height: $cardHeight;
  position: relative;
  top: -$cardHeight;
  opacity: 0;
  margin-bottom: -$cardHeight;
  &:hover {
    opacity: 1;
  }
}
</style>
