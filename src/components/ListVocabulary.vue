<template>
    <div>
        <button class="btn btn-primary" @click="onBack">Back to Home</button>
        <div class="list-card">
            <div class="card-item" v-for="(vocabulary, index) in filterVocabulary" :key="index">
                <ItemVocabulary :vocabulary="vocabulary"/>
            </div>
             <button @click="addVocabulary" type="button" class="btn btn-outline-secondary">
                 add vocabulary &nbsp; <i class="bi bi-plus-square"></i>
            </button>
        </div>
        <ModelVocabulary 
            v-if="checkmodel === true"
            @SaveClose="handleSaveClose"
            @onCancel="handleonCancel"
            :type="type"
        />
    </div>
</template>
<script>
import { mapActions ,mapGetters } from 'vuex'
import ItemVocabulary from './ItemVocabulary.vue'
import ModelVocabulary from './ModelVocabulary.vue'
export default {
    name:'learningEnglish',
    data() {
        return {
            type: '',
            checkmodel:false
        }
    },
    computed : {
        ...mapGetters(['vocabularys']),
        filterVocabulary : function(){
            return this.vocabularys.filter((item) => item.type === this.type);
        },

    },
    components : {
        ItemVocabulary,
        ModelVocabulary
    },
    methods : {
        ...mapActions(['GetVocabulary','AddVocabulary']),
        onBack(){
            this.$router.push('/')
        },
        addVocabulary(){
            this.checkmodel = true
        },
        handleSaveClose(vocabulary){
            this.AddVocabulary(vocabulary)
            this.handleonCancel()
        },
        handleonCancel(){
            this.checkmodel = false
        }
    },
    created() {
        this.GetVocabulary();
    },
    beforeMount () {
        this.type = this.$route.params.type; 
    }
}
</script>
<style lang="css" scoped>
    .list-card {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        background-color: #555;
        align-items: center;
        padding-left: 10px;
        padding-right: 10px;
    }
    .card-item {
        width: 24%;
        max-width: 200px;
    }
    .btn {
        width: 175px;
        max-width: 200px;
        color: white;
        font-weight: bold;
        border: 2px solid rgb(141, 119, 119);
        margin: 10px;
    }
    @media screen and (max-width:768px){
        .card-item {
            width: 48%;
        }
        .btn {
            width: 100%;
        }
    }
</style>    