<script setup lang="ts">
const config = useAppConfig();
const { page } = useContent();
</script>

<template>
  <div class="max-w-prose 2-xl:max-w-6xl px-5 py-20 mx-auto">
    <DocumentProse>
      <slot />
    </DocumentProse>
  </div>
</template>