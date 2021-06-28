<template>
    <div id="list-card">
        <div class="container">
            <div class="card-list">
                <div v-for="(carditem,index) in dataCards" :key="index">
                    <CarItem :carditem="{index, value: carditem }"
                             @onFlipped="checkRule($event)"
                             :ref="`card-${index}`"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CarItem from './CardItem'

export default {
    data() {
        return {
            isFlipped : false,
            cardContent : [],
            timer:0,
            updateTimer:null
        }
    },
    components : {
        CarItem,
    },
    props: {
        dataCards: {
            type: Array,
        },
        player : {
            type : Object
        }
    },
    methods: {
        
        checkRule(card) {
            
            if(this.cardContent.length === 2) return false;
           
            this.cardContent.push(card)
            
            if(this.cardContent.length === 2 && this.cardContent[0].index && this.cardContent[1].index && this.cardContent[0].index === this.cardContent[1].index) {
                this.$refs[`card-${this.cardContent[0].index}`].onFlipBackCard();
                this.cardContent = [];
                return false;
            }

            if(this.cardContent.length === 2 && this.cardContent[0].value === this.cardContent[1].value) {
                console.log("right...");
                this.$refs[`card-${this.cardContent[0].index}`].onEnabledDisabledMode();
                this.$refs[`card-${this.cardContent[1].index}`].onEnabledDisabledMode();

                this.cardContent = []

                let checkResult = Array.from(document.querySelectorAll('.disabled'))

                if(checkResult && (checkResult.length + 2) === this.dataCards.length){
                    this.$emit('onFinish');
                }
               

            }else if(this.cardContent.length === 2 && this.cardContent[0].value !== this.cardContent[1].value) {

                setTimeout(() => {
                    this.$refs[`card-${this.cardContent[0]?.index}`].onFlipBackCard();
                    this.$refs[`card-${this.cardContent[1]?.index}`].onFlipBackCard();
                    this.cardContent = []
                },600)

                
            }
        }
    },
}
</script>

<style lang="css" scoped>
    #list-card {
        background-color: #212121;
        margin-top: 20px;
    }
    #list-card .container {
        max-width: 1200px;
        margin: auto;
    }
    #list-card .card-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    #list-card .timer {
        font-size: 30px;
        color: rebeccapurple;
        border: 1px solid;
        width: 100px;
        height: 42px;
        padding: 10px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        margin: auto;
        text-align: center;
        justify-content: center;
        margin-bottom: 10px;
    }
    @media screen and (max-width:767px) {
        #list-card .card-list {
            flex-wrap: wrap;
        }
    }
</style>
