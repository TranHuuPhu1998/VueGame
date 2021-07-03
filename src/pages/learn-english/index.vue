<template>
    <div class="list-card">
        <div class="card-item" v-for="(vocabulary, index) in vocabularys" :key="index">
            <ListVocabulary :vocabulary="vocabulary"/>
        </div>
    </div>
</template>
<script>
import { mapActions ,mapGetters } from 'vuex'
import ListVocabulary from '../../components/ListVocabulary.vue'
export default {
    name:'learningEnglish',
    computed : {
        ...mapGetters(['vocabularys']),
    },
    components : {
        ListVocabulary
    },
    methods : {
        ...mapActions(['GetVocabulary']),
    },
    created() {
        this.GetVocabulary()
    },
}
</script>
<style lang="css" scoped>
    .list-card {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        background-color: #555;
        align-content: flex-start;
        min-height: 100vh;
    }
    .card-item {
        width: 24%;
    }
    @media screen and (max-width:768px){
        .card-item {
            width: 48%;
        }
    }
</style>    