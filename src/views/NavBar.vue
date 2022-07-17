<template>
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    
    <a class="navbar-brand">
    <img src="../asset/new1.jpg" alt="" width="50" height="44" class="d-inline-block align-text-left"/>
      Tv Shows</a>
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
            <li><a class="dropdown-item"><router-link to="/comedy">Comedy</router-link></a></li>
             <li><hr class="dropdown-divider"></li>
             <li><a class="dropdown-item"><router-link to="/action">Action</router-link></a></li>
             <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item"><router-link to="/drama">Drama</router-link></a></li>
            

          </ul>
        </li>


        </ul>
      </div>

     
    
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

<style lang="scss">
a{
  color: rgb(69, 104, 216);
  font-size: 20px;
}
.nav-link-dropdown-toggle{
font-size: 20px;
color: rgb(69, 104, 216);
}


</style>