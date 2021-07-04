<template>
    <div class="card bg-secondary" @mouseover="showLearningTrue" @mouseout="showLearningFalse">
            <div class="card-header">{{course.name}}</div>
            <div class="card-body card-header">
                <h4 class="card-title">{{course.description}}</h4>
            </div>
            <p class="card-header">type : {{course.type}}</p>
            <p class="card-text card-header">{{new Date(course.createdAt).toDateString()}}</p>
            <div 
                class="card-learning" 
                v-show="checkhover === true" 
                @click="onLearning(course.type)">
                <button>Leaning</button>
            </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checkhover: false
        }
    },
    props: {
        course: {
            type: [Array,Object],
            default: null
        },
    },
    methods: {
        showLearningTrue() {
            this.checkhover = true
        },
        showLearningFalse(){
            this.checkhover = false
        },
        onLearning(type){
            this.$router.push({ name: 'listvocabulary', params: { type: type } })
        }
    },
};
</script>

<style lang="css" scoped>
.card-learning {
    position: absolute;
    width: 100%;
    height: 100%;
    font-size: 30px;
    color: #2c054f;
    background-color: rgba(240, 226, 226, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;
}
.card-learning button{
    border: 1px solid #2c054f;
    border-radius: 5px;
    background-color: white;
    padding: 6px;
}
.card-title {
    margin-bottom: 0px;
}
.card {
    cursor: pointer;
}
.card-header {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.card-body h4 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
