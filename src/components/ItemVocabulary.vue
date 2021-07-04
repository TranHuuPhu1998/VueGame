<template>
    <div class="card-wapper" :class="{'is-flipped' : check}">
        <form 
            v-on:submit.prevent="onCheck(vocabulary.vnvalue)" 
            class="card-face card-front" >
            <p class="text">{{vocabulary.enValue}} 
                <span class="void" @click="onPlayVolume(vocabulary.enValue)">
                    <i class="bi bi-volume-up-fill"></i>
                </span>
            </p>
            <input placeholder="vietnamese" v-model="mdvnValue" class="from-control" type="text">
            <input v-on:keyup.enter="onCheck(vocabulary.vnvalue)"  class="btn" type="submit" value="check">
        </form>
        <div class="card-face card-back">
            <div class="card-content">
                <p>{{vocabulary.vnvalue}}</p>
            </div>
        </div>
    </div>
</template>
<script>
// import { useRoute } from 'vue-router'

export default {
    data() {
        return {
            mdvnValue: '',
            check:false,
            type:''
        }
    },
    props: {
         vocabulary: {
            type: [Array, Object],
            default: null
        },
    },
    methods: {
        onCheck(value,event) {
            if (event) {
                event.preventDefault()
            }
            if(value.toUpperCase().trim() === this.mdvnValue.toUpperCase().trim()){
                this.check = true
            }else {
                this.check = false
            }
        },
        onPlayVolume(message){
            let msg = new SpeechSynthesisUtterance(message)
            let voices = window.speechSynthesis.getVoices()
            msg.voice = voices[0]
            window.speechSynthesis.speak(msg)
        }
    },

}
</script>
<style lang="css" scoped>
    .text {
        padding-top: 5px;
    }
    .void {
        float: right;
        padding-right: 10px;
    }
    .card-face {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        backface-visibility: hidden;
        color: #333333;
    }
    .card-back {
        transform: rotateY(-180deg);
        background-color: white;
        border-radius: 10px;

         display: flex;
        justify-content: center;
        align-content: center;
        font-size: 20px;
    }
    .card-content {
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: contain;

        display: flex;
        justify-content: center;
        align-items: center;

        color: #333333;
        font-size: 20px;
    }
     .card-content p{
        color: #333333;
        font-size: 25px;
    }
    .card-wapper {
        height: 110px;
        display: flex;
        justify-content: center;
        background-color: #eaf1f1;
        color: #333333;
        margin: 10px;
        border-radius: 10px;

         position: relative;
        transition: transform 1s;
        transform-style: preserve-3d;
        cursor: pointer;
        position: relative;
        box-shadow: 0 3px 4px 3px rgba(0, 0, 0, 0.5);
    }
    .card-wapper.is-flipped {
       transform: rotateY(-180deg);
    }
    .btn {
        margin-top: 0.5rem;
        position: relative;
        color: #7b8ab8;
        border-radius: 50rem;
        background-color: #d9e3f1;
        padding: 3px 30px;
        border: none;
        box-shadow: 5px 5px 10px rgb(55 94 148 / 20%), -5px -5px 10px rgb(255 255 255 / 40%);
        transition: background-color .15s ease-in-out, border .15s ease-in-out, box-shadow .15s ease-in-out, color .15s ease-in-out;
    }
    .from-control {
        margin-top: 0.5rem;
        display: block;
        text-indent: 7px;
        width: 100%;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #7b8ab8;
        background-color: #f0f5fa;
        background-clip: padding-box;
        border: 0 solid #bed1e6;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border-radius: 0.25rem;
        box-shadow: inset 2px 2px 8px rgb(55 94 148 / 30%), inset -3px -2px 5px rgb(255 255 255 / 80%);
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
</style>