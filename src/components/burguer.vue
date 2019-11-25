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
  <router-link to="/">
    <div class="titulo">
           <img src="../assets/img/logosite.svg" alt="Logo do site" >
    </div>
  </router-link>
    <input type="checkbox" id="chk">
    <label for="chk" class="show-menu-btn">
      <i class="fas fa-bars"></i>
    </label>

    <ul class="menu">
      <router-link to="/" accesskey="1" title="ALT + 1">Início</router-link>
      <router-link to="/historia" accesskey="2" title="ALT + 2">História</router-link>
      <router-link to="/Curiosidades" accesskey="3" title="ALT + 3">Curiosidades</router-link>
      <router-link to="/about" accesskey="4" title="ALT + 4">Sobre</router-link>
      <router-link to="/AreaAdm/Login" accesskey="5" title="ALT + 5">Área Administrativa</router-link> 
      <!-- <a class="zoom_mais" id="aumentar" title="Aumentar fonte">A+</a> -->
      <!--<a class="zoom_normal" id="normal" title="Normalizar fonte">A</a>
       <a class="zoom_menos" id="diminuir" title="Diminuir fonte">A-</a>
       <a class="ico-acessibilidade ico-contraste" id="contraste" title="Contraste">C</a> --> 
      <label for="chk" class="hide-menu-btn">
        <i class="fas fa-times"></i>
      </label>
    </ul>
</header>
   

  </body>
</div>
  

</template>
<script>
    var body = document.getElementsByTagName('body')
    const aumentar = document.getElementById('aumentar')
    var diminuir = document.getElementById('diminuir')
    var normal = document.getElementById('normal')
    var contraste = document.getElementById('contraste')

    
    // aumentar.onclick = () => {
    //    console.log('a')
    //  }
    // console.log(aumentar)
</script>

<style>
.body{
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
.header{
  height: 120px;
  background: black;
  padding: 0 20px;
  color: #fff;
}
.titulo img{
  line-height: 100px;
  float: left;
  width: 160px;
  margin-top: 25px;
}

.menu{
  float: right;
  line-height: 120px;
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
  color:  rgb(108, 170, 7);
}

#chk{
  position: absolute;
  visibility: hidden;
  z-index: -1111;
}



@media screen and (max-width:920px) {
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
    top: 0;
    text-align: center;
    padding: 80px 0;
    line-height: normal;
    transition: 20s;
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
    display: block;
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