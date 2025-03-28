<script setup lang="ts">
const props = defineProps<{
    src: string;
    alt?: string;
}>();
</script>

<style module>
.inline_icon {
    width: 14pt;
    display: inline;
}
</style>

<template>
    <img v-bind="props" :class="$style.inline_icon" />
</template>
