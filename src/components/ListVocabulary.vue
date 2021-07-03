<template>
    <ItemVocabulary :vocabulary="vocabulary"/>
</template>
<script>
import ItemVocabulary from './ItemVocabulary.vue'

export default {
    components : {
        ItemVocabulary
    },
    props: {
        vocabulary: {
             type: [Array, Object],
            default: null
        },
    },
}
</script>
<style lang="css" scroped>
    
</style>