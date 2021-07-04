<template>
  <div id="app">
      <h1 class="logo"><img src="../../assets/logo-pokemon.svg" alt="logo-pokemon"></h1>
      <h2 class="title">POKE MEMORIES</h2>    
      <ResultGame 
        v-if="statusMatch === 'end'"
        :timer="player.timer"
        @onStartGame="onStartGame"
      />
      <StartGame 
        v-if="statusMatch === 'default'"
        @onPlayGame="handleStartGame"
      />
      <CardList 
        v-if="statusMatch === 'start'"
        :dataCards="dataStartGame"
        :player="player"
        @onFinish="handleGameEnd"
      />
      <Popup 
        v-if="statusModel === true"
        @SaveClose="handleSaveClose"  
        @onCancel="handleOnCancel"
      />
  </div>
</template>

<script>
import StartGame from '../../components/StartGame'
import CardList from '../../components/CardList'
import ResultGame from '../../components/ResultGame'
import Popup from '../../components/Model'

import { shuffled} from '../../utils/array'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      dataStartGame : [],
      startAt : null,
      endGameAt :null,
      statusMatch : 'default',
      statusModel:false,
      dateStart : 0,
      player : {
        name:'',
        timer : 0,
        date : ''
      }
    }
  },
  name: 'App',
  components: {
    StartGame,
    CardList,
    ResultGame,
    Popup
  },
  methods: {
    ...mapActions(['addPlayer']),
    handleStartGame(value) {
      this.statusMatch = 'start';
      this.statusModel = true;
      let startgame = Array.from({length : value / 2} , (_,x) => x+1);
      let clonestartgame = [...startgame];
      let mergeArray = [...startgame ,...clonestartgame];
      this.dataStartGame =  shuffled(mergeArray);
      this.player.dateStart = new Date().getTime() / 1000;
      this.player.date = new Date().toUTCString();
    },
    handleGameEnd() {
      this.statusMatch = 'end';
      let timerEnd = new Date().getTime() / 1000;
      this.player.timer = Math.round(timerEnd) - Math.round(this.player.dateStart);
      this.addPlayer(this.player)
    },
    onStartGame() {
      this.statusMatch = 'default';
    },
    handleSaveClose(value) {
      this.player.name = value;
      this.statusModel = false;
    },
    handleOnCancel(){
      this.$router.push('/')  
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
#app .logo {
    padding-top: 10px;
    width: 200px;
    margin: auto;
}
#app .title {
    font-size: 3rem;
    padding-top:30px;
}
#app .text {
    font-size: 1.5rem;
}
@media screen and (max-width:767px) {
  #app .title {
    font-size: 2rem;
  }
  #app .text {
    padding-top: 10px;
    font-size: 1rem;
  }
}
</style>
