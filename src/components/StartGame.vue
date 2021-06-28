<template>
    <div id="start">
        <div class="container">
            <p class="text">Select mode to start game</p>
        
            <div class="list-btn">
                 <button class="btn" @click="onPlayGame(4)">
                    <span>2x2</span>
                    <span>Easy</span>
                </button>
                <button class="btn" @click="onPlayGame(16)">
                    <span>4x4</span>
                    <span>Easy</span>
                </button>

                <button class="btn" @click="onPlayGame(36)">
                    <span>6x6</span>
                    <span>Normal</span>
                </button>
                
                <button class="btn" @click="onPlayGame(64)">
                    <span>8x8</span>
                    <span>Hard</span>
                </button>

                <button class="btn" @click="onPlayGame(100)">
                    <span>10x10</span>
                    <span>Super Hard</span>
                </button>

                <button class="btn" @click="onPlayGame(225)">
                    <span>15x15</span>
                    <span>To Hard</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        onPlayGame(value) {
            this.$emit('onPlayGame', value)
        }
    },
}
</script>

<style lang="css" scoped>

#start {
    color: white;
}
#start .container {
    max-width: 1200px;
    margin: auto;
}
#start .list-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    font-size: 3rem;
}

#start .btn {
    width: 150px;
    height: 150px;
    background: transparent;
    box-shadow: none;
    border: 1px solid white;
    color: white;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    margin: 0 1rem;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background .3s ease-in-out;
    font-size: 1.3rem;
}
    @media screen and (max-width:767px) {
        #start .list-btn {
            flex-wrap: wrap;
        }
        #start .btn { 
            margin-bottom: 20px;
        }
    }
</style>