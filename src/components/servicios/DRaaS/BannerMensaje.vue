<template>
  <div id="banner-mensaje">
    <tarjeta-mensaje
      mensaje="<strong><span class='txtgreen'>DRP</span>México DRaaS</strong>Integrado con Veeam y
      VMware, en conjunto proporcionan las capacidades de <strong>seguridad, replicación y
      conmutación</strong> por error que necesita para garantizar que su empresa esté
      <span class='txtgreen'>siempre en línea y disponible.</span>"
    class="tarjetaMsj">
    </tarjeta-mensaje>
  </div>
</template>

<script>
import TarjetaMensaje from '../../UI/TarjetaMensaje.vue';

export default {
  components: {
    TarjetaMensaje,
  },
};
</script>

<style>
#banner-mensaje{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 150px 150px;
/* gris claro */
background: #F7F8F8;
/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;
}
</style>
