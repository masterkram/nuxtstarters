<template>
  <div class="rounded-md bg-gray-100 ring-1 ring-gray-300 dark:ring-gray-600 dark:bg-gray-700 py-3 px-3.5">
    <p class="font-semibold p-0 m-0">
      <ContentSlot name="title" unwrap="p" />
    </p>
    <p class="m-0 mt-2 p-0">
      <ContentSlot unwrap="p" />
    </p>
  </div>
</template>