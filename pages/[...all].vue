<script setup lang="ts">
import { useContent, useRequestEvent, useSeoMeta } from '#imports'
import { callWithNuxt } from '#app';
const app = useNuxtApp();

const { page, layout } = useContent();

callWithNuxt(app, useSeoMeta, [{ title: page?.value?.title ?? "Nuxt Starters", description: page?.value?.description ?? "Best Nuxt Starting Templates." }]);

if (page.value) {

  defineOgImage({
    component: 'Custom',
    title: page?.value?.title ?? "Nuxt Starters",
    description: page?.value?.description ?? "A curated list of nuxt starter projects.",
    cover: page?.value?.cover,
    link: page?.value?.link,
    ...(page?.value?.ogImage || {}),
  });
}

definePageMeta({ middleware: ['search-from-url'] })
</script>

<template>
  <div class="document-driven-page">
    <ContentRenderer v-if="page" :key="(page as any)._id" :value="page">
      <template #empty="{ value }">
        <DocumentEmpty :value="value" />
      </template>
    </ContentRenderer>
    <DocumentNotFound v-else />
  </div>
</template>