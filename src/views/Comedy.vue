<template>
    <div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col" v-for="list in showBasedOnComedy" :key="list.id">
          <router-link :to="'/shows/' + list.id" class="list-link">
          <div class="card shadow-sm">
            <img v-if="list.image" :src="list.image.medium" alt="image" height="475">

            <div class="card-body">
              <p class="card-text">{{list.name}}</p>
              <span  v-if="list.rating"><p>Rating : {{list.rating.average}}</p></span>
              <div class="d-flex justify-content-between align-items-center">
               <small class="text-muted" v-html="list.genres"></small>
                <small class="text-muted">{{list.premiered}}</small>
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
        name: 'Comedy',

        data(){
            return{
                   
                    lists:[],
                    
            }
        },

        mounted(){
          this.getList()

        },

        computed: {
             showBasedOnComedy(){
                 return this.lists.filter(show=>show.genres[0]=="Comedy")
             }
                
            
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


<style lang="scss">
span{
    color: rgb(12, 12, 12);
    font-size: 16px;
    line-height: 1.4;
  }

</style>
