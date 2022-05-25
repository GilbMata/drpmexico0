<template>
  <b-container fluid id="descComp">
    <tarjeta-descripcion
    :mensaje1="varTxt1"
    :mensaje2="varTxt2"
    :mensaje3="varTxt3"
    :mensaje4="varTxt4"
    :mensaje5="varTxt5"
    >
    </tarjeta-descripcion>
  </b-container>
</template>

<script>
import tarjetaDescripcion from '../../UI/tarjetaDescripcion.vue';

const varTxt1 = 'Protéjase contra amenazas internas y externas a sus datos, incluidos delitos cibernéticos, ransomware, fallas de hardware y eliminaciones accidentales o maliciosas.';
const varTxt2 = 'Elimine la tecnología de copia de seguridad en cinta más antigua y el tiempo y el esfuerzo necesarios para enviar, almacenar y recuperar cintas físicas.';
const varTxt3 = 'Modernice la solución de respaldo existente y mejore las capacidades de retención y cumplimiento.';
const varTxt4 = 'Amplíe su copia de seguridad principal con almacenamiento en la nube escalable, flexible, ilimitado y administrado por DRPMéxico.';
const varTxt5 = 'Mejore la eficiencia de los recursos de TI y elimine los costos operativos asociados con las soluciones de respaldo locales más antiguas';

export default {
  data: () => ({
    varTxt1,
    varTxt2,
    varTxt3,
    varTxt4,
    varTxt5,
  }),
  components: {
    tarjetaDescripcion,
  },
};
</script>

<style lang="scss">
#descComp{
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 100px 100px;
  gap: 200px;
  /* gris claro */
  background: #ffffff;
  /* Inside auto layout */
  flex: none;
  order: 5;
  flex-grow: 0;
}
</style>
