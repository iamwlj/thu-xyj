<template>
    <div :class="$style.main">
        <slot />
    </div>
</template>

<script lang="ts" setup>
    import { useSlots } from 'vue'
    
    const slots = useSlots()
    console.log(slots.default())
    console.log(slots.default()[0].children)
</script>

<style module lang="scss">
.main {
    color: aquamarine;
}
</style>