<script setup lang="ts">
const { flatUnwrap, unwrap } = useUnwrap()
import { resolveComponent } from 'vue';

const slots = useSlots();


function renderListElements() {
  return flatUnwrap(slots.default!(), ['ul']
  ).map((element: any) => h(resolveComponent('MDCSlot'), { use: () => element, unwrap: 'li' }));
}

</script>

<template>
  <ul class="not-prose">
    <li v-for="el in renderListElements()" class="flex gap-2 items-center">
      <Icon name="tabler:check" class="text-primary-400" />
      <span>
        <component :is="() => unwrap(el, ['li'])" />
      </span>
    </li>
  </ul>
</template>
