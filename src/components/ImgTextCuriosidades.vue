<template>
    <div class="d-inline-flex caixa mt-12 mx-10 "
    background-color="light-blue">
        <div class="mx-3 my-3">
            <img src="../assets/img/slide1.jpg" alt="">
        </div>
        <div class="ml-5 text-center texto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi vitae veniam, sunt quo exercitationem maiores ipsam? Architecto molestias quia est. Odit accusamus minima nesciunt. Repellendus mollitia magni facilis obcaecati asperiores.
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
img{
    width: 500px;
}
.caixa{
    background-color: rgb(185, 177, 177);
    align-items: center;
}
@media (max-width: 700px) {
.caixa{
    flex-wrap: wrap;

}
img{
    width: 350px;
    text-align: center;
}
}
</style>