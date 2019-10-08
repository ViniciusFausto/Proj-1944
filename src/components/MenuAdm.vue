<template>
  <div>

  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css">
  </head>
  <body class="body">
<header class="header">
    <div class="titulo">
           <img src="../assets/img/logosite.svg" alt="" srcset="">
         </div>
    <input type="checkbox" id="chk">
    <label for="chk" class="show-menu-btn">
      <i class="fas fa-bars"></i>
    </label>

    <ul class="menu">
      <router-link to="/">Início</router-link>
      <router-link to="/AreaAdm/Index">Gerenciar</router-link>
      <router-link to="/AreaAdm/UsuarioAdm">Usuários</router-link>
      <router-link to="/AreaAdm/HistoriaAdm">História</router-link>
      <router-link to="/AreaAdm/FilmeAdm">Filmes</router-link>
      <router-link to="/AreaAdm/CuriAdm">Curiosidades</router-link>
      <label for="chk" class="hide-menu-btn">
        <i class="fas fa-times"></i>
      </label>
    </ul>
</header>
   

  </body>
</div>
  

</template>
<script>
export default {
}
</script>

<style>
.body{
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
.header{
  height: 100px;
  background: black;
  padding: 0 20px;
  color: #fff;
}
.titulo img{
  line-height: 100px;
  float: left;
  /* text-transform: uppercase; */
  width: 200px;
}

.menu{
  float: right;
  line-height: 100px;
}
.v-application .menu a{
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0 10px;
  font-size: 16px;
  transition: 0.4s;
}

.show-menu-btn,.hide-menu-btn{
  transition: 0.4s;
  font-size: 30px;
  cursor: pointer;
  display: none;
}
.show-menu-btn{
  float: right;
}
.show-menu-btn i{
  line-height: 100px;
}

.v-application .menu a:hover,
.show-menu-btn:hover,
.hide-menu-btn:hover,
.menu a.router-link-exact-active {
  color: #FFB74D;
}

#chk{
  position: absolute;
  visibility: hidden;
  z-index: -1111;
}



@media screen and (max-width:800px) {
  .show-menu-btn,.hide-menu-btn{
    display: block;
  }
  .menu{
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 500px;
    background: #333;
      display: none;
    right: -100%;
    top: 0;
    text-align: center;
    padding: 80px 0;
    line-height: normal;
    transition: 0.7s;
  }
  .menu a{
    display: block;
    padding: 20px;
  }
  .hide-menu-btn{
    position: absolute;
    top: 40px;
    right: 40px;
  }
  #chk:checked ~ .menu{
    right: 0;
  }
 
  .v-parallax{
    position: relative;
    z-index: -12000;
  }
  .v-application .menu a{
     padding-top: 10px;
  padding-bottom: 10px;
  }
 
 
}
</style>