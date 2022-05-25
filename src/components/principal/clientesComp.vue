<template>
    <b-container class="clts">
        <p class="clt">Clientes</p>
        <div class="cltimg">
            <img class="cltimg" src="../../../public/img/principal/clientes/logodrp.png" alt="">
            <img class="cltimg" src="../../../public/img/principal/clientes/logodrp.png" alt="">
            <img class="cltimg" src="../../../public/img/principal/clientes/logodrp.png" alt="">
        </div>
    </b-container>
</template>

<style>
.cltimg{
    height: 150px;
}
.cltimg{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 60px;
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    flex-wrap: wrap;
}
.clt{
    font-family: 'Century Gothic';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #000000;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
}

.clts{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 70px 160px;
    gap: 10px;
    /* Inside auto layout */
    flex: none;
    order: 6;
    align-self: stretch;
    flex-grow: 1;
}
</style>
