<template>
    <div id="card-item-wapper" :class="{'disabled' : isDisabled}">
        <div
        class="card-item"
            :class="{'is-flipped': isFlipped }"
            @click="toogleFlipped()"
        >
            <div class="card-face card-front"></div>
            <div class="card-face card-back">
                    <div
                        class="card-content"
                        :style="{
                        backgroundImage: `url(${urlBase + carditem.value}.png)`,
                        }"
                    ></div>
            </div>
        </div>
    </div>
</template>

<script>    
    export default {
        props: {
            carditem: {
                type: [Array, String, Number, Object],
            },
        },
        data() {
            return {
                urlBase : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/',
                isFlipped :false,
                isDisabled : false
            }
        },
        methods: {
            toogleFlipped(){
                this.isFlipped = !this.isFlipped
                this.$emit('onFlipped', this.carditem)
            },
            onEnabledDisabledMode() {
                this.isDisabled = true;
            },
            onFlipBackCard() {
                this.isFlipped = false;
            }
        }
    }
</script>

<style scoped>
    #card-item-wapper .card-face {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        backface-visibility: hidden;
    }
    #card-item-wapper .card-content {
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: contain;
        height: 100%;
        width: 100%;
    }
    #card-item-wapper .card-item {
        width: 100px;
        height: 170px;
        margin: 10px;
        position: relative;
        transition: transform 1s;
        transform-style: preserve-3d;
        cursor: pointer;
        position: relative;
        box-shadow: 0 3px 18px 3px rgba(0, 0, 0, 0.2);
    }
    #card-item-wapper .card-item.is-flipped {
       transform: rotateY(-180deg);
    }
    #card-item-wapper .card-front {
        background: url("../assets/icon_back.png") no-repeat center center;
        height: 100%;
        width: 100%;
        background-position: center center;
        background-size: contain;
        border-radius: 15px;
        background-color: rgb(37, 36, 36);
    }
    #card-item-wapper .card-back {
        transform: rotateY(-180deg);
        background-color: white;
        border-radius: 10px;
    }
    .disabled {
        pointer-events: none;
    }
    @media screen and (max-width:767px) {
        #card-item-wapper .card-item {
            width: 50px;
            height: 80px;
        }
    }
</style>
