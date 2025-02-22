<template>
  <div
    class="font-display grid min-h-screen grid-rows-[auto,auto,1fr,auto] bg-white dark:bg-gray-900 transition-colors">
    <AppHeaderBanner />
    <AppNavbar />
    <slot />
    <AppFooter />
  </div>
</template>

<style lang="postcss"></style>