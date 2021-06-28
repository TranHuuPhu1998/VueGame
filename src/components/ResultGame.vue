<template>
    <div class="resultgame">
       <div class="container">
        <h1>
            ✨ Congratulations ✨
        </h1>
        <button 
          @click="onStartGame"
          class="btn"  
        >Start Again</button>
        <section class="list-player">
          <h1>Game rankings</h1>
          <div class="group-btn">
            <button @click="onSortTop">sort top</button>
            <button @click="onSortBotton">sort bottom</button>
          </div>
          <div class="tbl-header">
            <table cellpadding="0" cellspacing="0" border="0">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Timer</th>
                  <th>Date Time</th>
                </tr>
              </thead>
            </table>
          </div>
          <div class="tbl-content">
            <table cellpadding="0" cellspacing="0" border="0">
              <tbody>
                <tr v-for="(player , index) in players || players" :key="index">
                  <td>{{player.name}}</td>
                  <td>{{player.timer}}</td>
                  <td>{{player.date}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          
        </section>

        <img class="img-congralution" src="../assets/confetti-27.gif" alt="">
       </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      Arrplayer: []
    }
  },
  props: {
    timer: {
      type: Number,
      default: null
    }
  },
  computed : {
    ...mapGetters(['players'])
  },
  methods:{
    ...mapActions(['getPlayer']),
    onStartGame() {
      this.$emit('onStartGame'),
      this.$router.push('/pokemon')
    },
    onSortTop() {
      this.Arrplayer = this.players;
      this.Arrplayer.sort((a,b) => a.timer > b.timer ? 1 : -1)
    },
    onSortBotton() {
       this.Arrplayer = this.players;
      this.Arrplayer.sort((a,b) => a.timer < b.timer ? 1 : -1)
    }
  },
  created() {
    this.getPlayer()
   
    setTimeout(()=>{
      document.querySelector('.img-congralution').style.display = "none"
    },5000)
  }
}
</script>
 
<style scoped>
.resultgame .container {
  max-width: 1000px;
  margin: auto;
}
.resultgame .group-btn {
  text-align: right;
}
.resultgame .group-btn button {
  margin: 10px;
  padding: 10px 20px;
  color: white;
  font-size: 1.2rem;
  background-color: blueviolet;
  border: none;
  border-radius: 5px;
}
.resultgame .list-player {
  margin-bottom: 50px;
}
.resultgame h1 {
  font-size: 2rem;
}
.resultgame p {
  font-size: 1rem;
}
.resultgame p span {
  font-size: 2rem;
  color: brown;
}
.resultgame h3 {
  margin-top: 1.5rem;
  font-size: 3rem;
}
.resultgame .btn {
  background: transparent;
  box-shadow: none;
  border: 1px solid white;
  color: white;
  margin: 1rem;
  padding: 1rem 1.25rem;
  border-radius: 0.5rem;
  font-size: 1.25rem;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  
  position: relative;
  z-index: 1;
}
.resultgame .img-congralution {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

h1{
  font-size: 30px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;
  margin-bottom: 15px;
}
table{
  width:100%;
  table-layout: fixed;
}
.tbl-header{
  background-color: rgba(255,255,255,0.3);
 }
.tbl-content{
  height:auto;
  overflow-x:auto;
  margin-top: 0px;
  border: 1px solid rgba(255,255,255,0.3);
}
th{
  padding: 20px 15px;
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
}
td{
  padding: 15px;
  text-align: left;
  vertical-align:middle;
  font-weight: 300;
  font-size: 12px;
  color: #fff;
  border-bottom: solid 1px rgba(255,255,255,0.1);
}


/* demo styles */

@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,300,700);
body{
  background: -webkit-linear-gradient(left, #25c481, #25b7c4);
  background: linear-gradient(to right, #25c481, #25b7c4);
  font-family: 'Roboto', sans-serif;
}

/* follow me template */
.made-with-love {
  margin-top: 40px;
  padding: 10px;
  clear: left;
  text-align: center;
  font-size: 10px;
  font-family: arial;
  color: #fff;
}
.made-with-love i {
  font-style: normal;
  color: #F50057;
  font-size: 14px;
  position: relative;
  top: 2px;
}
.made-with-love a {
  color: #fff;
  text-decoration: none;
}
.made-with-love a:hover {
  text-decoration: underline;
}

/* for custom scrollbar for webkit browser*/

::-webkit-scrollbar {
    width: 6px;
} 
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
} 
::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
}

@media screen and (max-width:767px) {
  .resultgame h1 {
    font-size: 1.5rem;
    padding-top: 20px;
  }
  .resultgame .btn {
    padding: 0.5rem 1rem;
    margin: 0.5rem;
  }
  .resultgame .group-btn button { 
    margin: 5px;
    padding: 5px 10px;
  }
}
</style>