<script setup>
const config = useAppConfig();
const colorMode = useColorMode();

const logoPath = computed(() => {
  if (config.general.logo.mainLogo) {
    return config.general.logo.mainLogo;
  }
  if (config.general.logo.lightModeLogo && colorMode.preference === "light") {
    return config.general.logo.lightModeLogo;
  }
  if (config.general.logo.darkModeLogo && colorMode.preference === "dark") {
    return config.general.logo.darkModeLogo;
  }

  return config.general.logo.lightModeLogo;
});
</script>

<template>
  <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
    <NuxtImg sizes="32px" :src="logoPath" class="h-8" :alt="`${config.general.title} Logo`" />
    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{{ config.general.title
      }}</span>
  </NuxtLink>
</template>