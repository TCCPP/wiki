<script setup lang="ts">
const props = defineProps<{
    src: string;
    alt?: string;
}>();
</script>

<style module lang="scss">
.inline_icon {
    // aligning like font-awesome does
    display: inline-block;
    box-sizing: content-box;
    overflow: visible;
    height: 1em;
    vertical-align: -0.125em;
    transform: scale(1.2);
}
</style>

<template>
    <img v-bind="props" :class="$style.inline_icon" />
</template>
