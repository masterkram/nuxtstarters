<script setup lang="ts">
const { flatUnwrap, unwrap } = useUnwrap();
import { resolveComponent, h } from 'vue';

const slots = useSlots();

function renderListElements() {
  // TODO: find how to set target = blank
  const result = [];
  for (let element of flatUnwrap(slots.default!(), ['ul'])) {
    const e1 = unwrap(element, ['li'])[0];
    const href = e1?.props?.href || '#';
    const e2 = unwrap(e1, ['a'])[0];
    const component = h(resolveComponent('MDCSlot'), { use: () => e2, href });
    result.push(component);
  }

  return result;
}
</script>

<template>
  <div class="flex m-0 p-0 gap-4 font-semibold not-prose">
    <a v-for="el in renderListElements()" :href="el.props?.href"
      class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 dark:aria-disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center">
      <button class="flex items-center gap-x-1.5">
        <component :is="() => unwrap(el, ['a'])" />
        <Icon name="tabler:external-link" />
      </button>
    </a>
  </div>
</template>