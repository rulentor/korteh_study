<script setup lang="ts">
const props = defineProps<{ id: string }>()
const router = useRouter()
const user = useUserStore()
//const { t } = useI18n() //локализацию завезли
watchEffect(() => {
  user.setNewName(props.id)
})
</script>

<template>
  <div>
    <div text-4xl>
      <div i-carbon-pedestrian inline-block />
    </div>
    <p>
      {{ 'Привет, друг это Игры', { id: props.id } }}
    </p>

    <p text-sm opacity-75>
      <em>Вы в разделе {{ props.id }}</em>
    </p>

    <template v-if="user.otherNames.length">
      <p text-sm mt-4>
        <span opacity-75>Рекомендуем также:</span>
        <ul>
          <li v-for="otherName in user.otherNames" :key="otherName">
            <RouterLink :to="`/games/${otherName}`" replace>
              {{ otherName }}
            </RouterLink>
          </li>
        </ul>
      </p>
    </template>

    <div>
      <button
        btn m="3 t6" text-sm
        @click="router.back()"
      >
        Вернуться
      </button>
    </div>
  </div>
</template>