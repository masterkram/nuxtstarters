<script setup lang="ts">
const { flatUnwrap } = useUnwrap()

</script>

<template>
  <div>
    {{ $slots.default!() }}
    <ul>
      <li v-for="(item, index) of flatUnwrap($slots.default!(), ['ul'])" :key="index">
        ☑︎
        <span>
          <ContentSlot :use="() => item" unwrap="li" />
        </span>
      </li>
    </ul>
  </div>
</template>
