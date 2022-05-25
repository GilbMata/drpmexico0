<template>
  <div id="tarjeta-descripcion">
    <div class="rowdesc">
      <b-img :src="require('@/../public/img/servicios/baas/img.png')"></b-img>
      <span v-html="mensaje1"></span>
    </div>
    <div class="rowdesc">
      <b-img :src="require('@/../public/img/servicios/baas/img.png')"></b-img>
      <span v-html="mensaje2"></span>
    </div>
    <div class="rowdesc">
      <b-img :src="require('@/../public/img/servicios/baas/img.png')"></b-img>
      <span v-html="mensaje3"></span>
    </div>
    <div class="rowdesc">
      <b-img :src="require('@/../public/img/servicios/baas/img.png')"></b-img>
      <span v-html="mensaje4"></span>
    </div>
    <div class="rowdesc" v-if="mensaje5">
      <b-img :src="require('@/../public/img/servicios/baas/img.png')"></b-img>
      <span v-html="mensaje5"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mensaje1: String,
    mensaje2: String,
    mensaje3: String,
    mensaje4: String,
    mensaje5: String,
  },
};
</script>

<style lang="scss">
.rowdesc{
  display: flex;
flex-flow: row nowrap;
justify-content: center;
align-items: center;
padding: 0px;
gap: 50px;
/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
}
#tarjeta-descripcion{
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    gap: 15px;
    font-family: 'Century Gothic';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 30px;
  text-align: left;
    padding: 4% 10%;
}
</style>
