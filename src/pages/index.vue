<template>
  <div id="homepage">
    <div class="container">
        <h2 class="text-chose">Chose to start game</h2>
        <div class="list-game">
            <router-link class="border" to="/pokemon">
            <img class="logo-game" src="../assets/logo-pokemon.svg" alt="">
            <p class="text-play">Play with Pokemon</p>
            </router-link>
            <router-link class="border" to="/ping-pong">
                <img class="logo-game" src="../assets/ping-pong.jpg" alt="">
                
                <p class="text-play">Play with Ping-pong</p>
            </router-link>
             <router-link class="border" to="/learning-english">
              <img class="logo-game" src="../assets/learning.jpg" alt="">
                <p class="text-play">Learning English</p>
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>

export default {

}

</script>

<style lang="css" scoped>
    #homepage .container {
        max-width: 1200px;
        margin:auto;
    }
    #homepage .text-chose {
        font-size: 3rem;
        padding: 20px;
    }
    #homepage .logo-game{
        width: 200px;
        height: 150px;
        object-fit: contain;
    }
    #homepage .border {
        border: solid 1px rgb(221, 210, 210);
        display: flex;
        justify-content: center;
        border-radius: 5px;
        align-items: center;
        width: max-content;
        flex-direction: column;
        padding: 10px;
        margin: 20px;
    }
    #homepage .text-play {
        font-size: 1.2rem;
        color: white;
        padding: 10px;
    }
    #homepage .list-game {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    #homepage .text-chose {
        font-size: 2rem;
            font-family: "Cabin Sketch", cursive;
    }

</style>