<script lang="ts" setup>
defineProps(['sectionStyle']);
defineEmits(['update:sectionStyle']);
</script>

<template>
  <section class="text-white bg-black">
    <div
        class="mx-auto flex flex-col min-h-[300px] md:px-2 md:max-w-[820px] md:min-h-[600px] lg:flex-row lg:justify-center lg:px-0 lg:max-w-[1920px] lg:min-h-[500px]">
      <slot></slot>
    </div>
  </section>
</template>