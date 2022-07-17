<template>

  <div v-if="tv !== {}" class="tv-detail">
    <h2>{{tv.name}}</h2>
    <p>Premiered:  {{tv.premiered}}</p> 
  <br>
  <img v-if="tv.image" :src="tv.image.medium" alt="tv.value Poster" class="featured-img">
  <br>
  <br>
  <div v-if="tv.summary">
    <span>Plot :  <p v-html="tv.summary"></p></span>
    </div>
    <br>
    <div v-if="tv.genres.length>0">
      <span>Genre : <p v-html="tv.genres"></p></span>
    </div>
    <br>
    <span v-if="tv.rating">Rating : <p v-html="tv.rating.average"></p></span>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  setup(){
    const route = useRoute();
    return {
      route,
    }
  },
  data(){
    const tv = {};
    
    return{
      tv,
    };
  },

  computed: {
    show(){
      if (this.tv && this.tv.value){
        return this.tv.value;
      }
      return {};
    },
  },

  created(){
  console.log(this.$route);
    
    fetch(`https://api.tvmaze.com/shows/${this.route.params.id}`)
    .then((response) => response.json())
    .then((data) => {
      this.tv = data;
    });
  },

    }

</script>

<style lang="scss">
.tv-detail{
  padding: 16px;
  

  h2{
    color: rgb(236, 167, 16);
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  p{
    color: #fff;
    font-size: 18px;
    line-height: 1.4;
  }
  span{
    color: rgb(225, 211, 9);
    font-size: 18px;
    line-height: 1.4;
  }
}

</style>