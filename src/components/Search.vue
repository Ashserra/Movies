<template>


     
<div class="container">
    <form @submit.prevent="searchMovies()" class="d-flex">
      <div class="input-group">
        <input class="form-control" type="text" placeholder="Search" aria-label="Search" v-model="search">  
      
      <div class="input-group-btn">
        <button class="btn btn-default" type="submit">
        <i class="glyphicon glyphicon-search"></i></button>
        </div>
        </div>
      </form>
  </div>
 
 <div class="find" v-if="searchCount!==0 && lists.length==0">
   No Movie Found
 </div>

  <div v-if="lists.length>[0] ">
<div class="album py-5 bg-light">
    <div class="container">
        
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col" v-for="list in lists" :key="list.id">
        <router-link :to="'/shows/' + list.show.id" class="movie-link">
          <div class="card shadow-sm">
             <img v-if="list.show && list.show.image" :src="list.show.image.medium" alt="image" height="475">  

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
                    loading: false,
                    err: '',
                    searchCount: 0
                    
                    
            }
        },

        methods: {
          
            searchMovies(){
              this.loading=true;
              this.searchCount++;
                 axios.get(`https://api.tvmaze.com/search/shows?q=${this.search}`)
                .then((response)=>{
                    console.log(response.data)
                    this.lists=response.data;
                    this.loading=false;
                    
                    
                    
                })
                .catch((err)=>{
                  this.loading=false;
                  this.err='Somthing went wrong....'
                    console.log(err)
                    console.log('error', err)
                    

                })
            },
        },
}
</script>

<style scoped>
.container{
  margin-top: 25px;
}

.form-control{
  padding: 10px;
  font-size: 15px;
}

.find{
  font-size: 25px;
  text-align: center;
  margin-top: 50px;
   color: rgb(225, 211, 9);
   background-color: rgb(38, 32, 120);
}
</style>


