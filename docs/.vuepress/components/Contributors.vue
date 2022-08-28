<template>
    <div>本页贡献者：<span v-for="name in names" :key="name">{{ name }}</span></div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
defineProps({
    names: { type: String, default: () => [] },
})
</script>