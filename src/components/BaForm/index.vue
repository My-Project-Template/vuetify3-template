<script setup lang="ts" generic="T extends object">
const props = defineProps<{
    model: T;
}>();
</script>

<template>
    <form class="be-form"></form>
</template>
