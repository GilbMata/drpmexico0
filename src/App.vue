<template>
<div id="app">
  <b-container >
    <menu-default></menu-default>
    <router-view/>
    <footer-Comp></footer-Comp>
    </b-container>
</div>
</template>

<script>
import menuDefault from '@/components/MenuDefault.vue';
import { bodyScript } from '@/assets/external';
import footerComp from '@/components/footerComp.vue';

const cwhite = '#FFFFFF';

export default {
  name: 'AnotherComponent',
  components: {
    menuDefault,
    footerComp,
  },
  data: () => ({
    cwhite,
  }),
  created() {
    // external.headScript('/assets/script1.js');
    bodyScript('https://assets.freshservice.com/widget/freshwidget.js');
  },
  destroyed() {
    /* external.delScript('/assets/script1.js');
    external.delScript('/assets/script2.js'); */
  },
};
</script>

<style>
#app{
  font-family: 'Century Gothic';
}
.txtgreen{
    /* verde */
    color: #009845;
    /* font-weight: 700; */
}
</style>
