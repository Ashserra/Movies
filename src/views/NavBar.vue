<template>
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    
    <a class="navbar-brand" href="#">TvShows</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
         <li class="nav-item">
          <a class="nav-link active" aria-current="page"><router-link to="/">Home</router-link></a>
        </li>  

         <li class="nav-item">
          <a class="nav-link active" aria-current="page"><router-link to="/search">Search</router-link></a>
        </li>  
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Genre</a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Comedy</a></li>
            <!-- <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Hindi</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Korean</a></li> -->
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Language</a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">English</a></li>
            <!-- <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Hindi</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Korean</a></li> -->
          </ul>
        </li>

        </ul>
      </div>

     <!--  <div >
      
      <form class="d-flex" >
        <input class="form-control me-2" type="text" placeholder="Search" aria-label="Search" >
         <router-link to="/search">Search</router-link> 
        <button class="btn btn-outline-success" type="submit">Search</button>   
      </form>
      </div> -->
    
  </div>
</nav>
   
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:'NavBar',
        
        data(){ 
          return{
              data: '',
              searches: [],
              
          }
        },


       /*  mounted(){
          this.getList()

        }, */

        methods: {
            getsearches(){
                 axios.get('https://api.tvmaze.com/shows')
                .then((response)=>{
                    console.log(response.data)
                    this.searches=response.data;
                })
                .catch((error)=>{
                    console.log(error)
                    

                })
            }
        },


    }

</script>

<style scoped>


</style>