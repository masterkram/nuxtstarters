<script setup lang="ts">
const { layout } = useContent();

useHead({ link: [{rel: 'icon', href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚗️</text></svg'}] });
</script>

<template>
  <Body :class="background">
    <AppLayout>
      <NuxtLayout :name="layout as string || 'wide'">
        <NuxtPage class="page-enter-active" />
      </NuxtLayout>
    </AppLayout>
  </Body>
</template>

<style>
.dark body {
  @apply bg-gray-800;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(.5rem)
  }

  to {
    opacity: 1;
    transform: none
  }
}

@keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translateY(.5rem)
  }
}

.page-enter-active {
  animation: fadeInUp .6s forwards
}

.page-leave-active {
  animation: fadeOutDown .6s backwards;
}
</style>