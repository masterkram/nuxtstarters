<script setup lang="ts">
const cardConfig = useAppConfig().directory.grid.card;
const props = defineProps(['item']);
</script>

<template>
  <NuxtLink :to="item._path"
    class="border col-span-1 border-gray-200 dark:border-gray-500 hover:border-primary-400 hover:border-solid dark:hover:border-primary-300 rounded relative group transition-all"
    :class="cardConfig.border === 'shadow' ? 'shadow-sm' : cardConfig.border === 'dashed' ? 'border-dashed' : ''">
    <DirectoryFeaturedTag class="ml-6" v-if="item.sponsored" />
    <NuxtImg v-if="item.card_image && cardConfig?.image" sizes="400px" class="w-full h-48 rounded-t object-cover"
      :src="item.card_image ?? '/logo.png'" />
    <div v-else-if="cardConfig?.image"
      class="w-full h-48 flex justify-center items-center rounded-t font-bold text-2xl text-center relative border-b dark:border-gray-700 px-4 select-none">
      <div
        class="absolute inset-0 -z-10 h-full w-full bg-gray-50 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-gray-900 dark:bg-[linear-gradient(to_right,#27272A_1px,transparent_1px),linear-gradient(to_bottom,#27272A_1px,transparent_1px)]">
      </div>
      {{ item.title }}
    </div>
    <div class="p-6">
      <h3 class="m-0 text-lg font-semibold dark:text-gray-50">
        {{ item.title }}
      </h3>
      <p class="line-clamp-4">
        {{ item.description }}
      </p>
      <div class="p-0 mt-2 flex gap-2">
        <UiTag v-for="tag in item.tags" :tag="tag" />
      </div>
    </div>
  </NuxtLink>
</template>