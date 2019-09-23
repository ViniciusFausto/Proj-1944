<template>
    <div>
        <div class="d-inline-flex caixa2 mx-10 my-5 ">
            <div class="my-3 mx-3 foto"> <img src="../assets/img/slide2.png" alt="" srcset=""></div>
           
             <div class="my-3 mx-3 foto"><img src="../assets/img/slide3.jpg" alt="" srcset=""></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.caixa2{
    background-color: rgb(173, 130, 73);
}
.foto img{
 width: 300px
}
@media (max-width: 700px) {
.caixa2{
    flex-wrap: wrap;

}
}
</style>