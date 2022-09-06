<template>
    <div :class="$style.main">
        本页贡献者：
        <TransitionGroup name="list" tag="div">
            <span v-for="name in myNames" :key="name">{{ name }}</span>
        </TransitionGroup>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, onMounted, ref, PropType } from 'vue'
import { delay } from '../utils'
const props = defineProps({
    names: { type: Array as PropType<string[]>, default: () => [] },
})

const myNames = ref<string[]>([])
onMounted(async () => {
    for (const name of props.names) {
        await delay(300)
        myNames.value.push(name)
    }
})
</script>

<style module lang="scss">
.main {
    font-size: 12px;

    > div {
        display: inline-block;
    }

    span {
        display: inline-block;
        color: var(--link-color);
    }

    span + span {
        margin-left: 8px;
    }
}
</style>