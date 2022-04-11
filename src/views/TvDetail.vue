<template>
  <div class="tv-detail">
    <h2>{{tv.name}}</h2>
    <p>{{tv.premiered}}</p>
    <img :src="tv.image.medium" alt="Tv Poster" class="featured-img">
    <p>{{tv.summary}}</p>
  </div>
</template>

<script>
import {ref, onBeforeMount} from 'vue';
import {useRoute} from 'vue-router';

export default {
  setup(){
    const tv = ref({});
    const route = useRoute();

    onBeforeMount(() => {
      fetch(`https://api.tvmaze.com/shows/${route.params.id}`)
       
      .then(response => response.json())
      .then(data => {
        tv.value = data;
      });
    });

    return{
      tv
      
    }
  }

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