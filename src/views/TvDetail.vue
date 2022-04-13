<template>
  <div v-if="tv !== {}" class="tv-detail">
    <h2>{{tv.name}}</h2>
    <p>{{tv.premiered}}</p>
  <img v-if="tv.image" :src="tv.image.medium" alt="tv.value Poster" class="featured-img">
    <p>{{tv.summary}}</p>
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
    color: #fff;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  p{
    color: #fff;
    font-size: 18px;
    line-height: 1.4;
  }
}

</style>