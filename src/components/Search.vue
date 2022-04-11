<template>
<form @submit.prevent="searchMovies()" class="search-box">
      <input type="text" placeholder="What are you looking for?" v-model="search">
      <!-- <input type="submit" value="Search">  -->
    </form>
<div class="album py-5 bg-light">
    <div class="container">
        
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col" v-for="list in lists" :key="list.id">
        <router-link :to="'/shows/' + list.show.id" class="movie-link">
          <div class="card shadow-sm">
             <img :src="list.show.image.medium" alt="image" height="400">  

            <div class="card-body">
              <p class="card-text">{{list.show.name}}</p>
              <div class="d-flex justify-content-between align-items-center">
               
                <small class="text-muted">{{list.show.premiered}}</small>
              </div>
              
            </div>
          </div>
          </router-link>
        </div>
        </div>
        
    </div>
</div>
</template>

<script>
import axios from 'axios'


export default {
    name: 'Search',

   data(){
            return{
                   
                    lists:[],
                    search:'',
                    
            }
        },

        methods: {
            searchMovies(){
                 axios.get(`https://api.tvmaze.com/search/shows?q=${this.search}`)
                .then((response)=>{
                    console.log(response.data)
                    this.lists=response.data;
                })
                .catch((error)=>{
                    console.log(error)
                    

                })
            },
        },
}
</script>

<style scoped>
</style>

