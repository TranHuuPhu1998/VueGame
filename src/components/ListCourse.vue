<template>
    <div>
        <h2 class="btn btn-primary w-full">List Course</h2>
        <div class="list-course">

            <div v-for="(course , index) in courses" :key="index" class="item-course">
                <ItemCourse :course="course"/>
            </div>
            <button @click="addCouse" type="button" class="btn btn-outline-secondary">add Course &nbsp; <i class="bi bi-plus-square"></i>
            </button>
        </div>
        <ModelCourse 
            v-if="check === true"
            @SaveClose="handleSaveClose"
            @onCancel="handleCancel"
         />
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import ItemCourse from './ItemCourse.vue'
    import ModelCourse from './ModelCourse.vue'
    export default {
        data() {
            return {
                check: false
            }
        },
        components : {
            ItemCourse,
            ModelCourse
        },
        computed: {
            ...mapGetters(['courses'])
        },
        methods: {
            ...mapActions(['AddSourse','GetSourse']),
            addCouse(){
                this.check = true
            },
            handleSaveClose(course) {
                this.AddSourse(course)
                this.check = false
            },
            handleCancel(){
                this.check = false
            }
        },
        created () {
            this.GetSourse()
        },
    }
</script>

<style scoped>
    .list-course {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
    .item-course {
        width: 24%;
        max-width: 200px;
        margin: 10px;
    }
    .w-full {
        width: 100%;
    }
    .btn {
        height: 50px;
        color: white;
        font-weight: bold;
    }
</style>