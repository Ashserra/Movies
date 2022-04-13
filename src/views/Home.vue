<template>
    <div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col" v-for="list in lists" :key="list.id">
          <router-link :to="'/shows/' + list.id" class="list-link">
          <div class="card shadow-sm">
            <img :src="list.image.medium" alt="image" height="400">

            <div class="card-body">
              <p class="card-text">{{list.name}}</p>
              <div class="d-flex justify-content-between align-items-center">
               
                <small class="text-muted">{{list.premiered}}</small>
              </div>
            </div>
          </div>
           </router-link> 
        </div>
        </div>
    </div>
</div>



    <!-- <button @click="getList()">Home list</button> -->
        
         <!-- <div v-for="list in lists" :key="list.id">
            <h3>{{list.id}}</h3>
            <h3>{{list.name}}</h3>
            
            
            

        </div> 
 -->
</template>

<script>

import axios from 'axios'
    export default {
        name: 'Home',

        data(){
            return{
                   
                    lists:[],
                    
            }
        },

        mounted(){
          this.getList()

        },

        methods: {
            getList(){
                 axios.get('https://api.tvmaze.com/shows')
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
