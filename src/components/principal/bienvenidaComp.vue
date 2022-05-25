<template>
<div class="card1">
    <div class="gpo0">
        <img class="gpo0" alt="" src="../../../public/img/principal/laptop.png">
    </div>
    <div class="gpo1">
        <div class="ttt">
            <span class="simpli">Simplificamos</span>
            <br>
            <span class="expe"> tu experiencia en la nube.</span>
        </div>
        <div class="text">
            <span>Ofrecemos una forma simplificada de</span><br />
            <span>disfrutar de los servicios en la nube</span><br />
            <span>para aplicaciones y servicios de TI de</span><br />
            <span>nueva generación.</span>
        </div>
        <div class="buttonPrueba">
            <b-button pill variant="success">30 días de prueba gratis</b-button>
        </div>
    </div>
</div>
</template>

<style lang="scss">
.gpo0{
    width: auto;
    height: 340px;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
}
.gpo1{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 40px;
    width: 522px;
    height: 350px;
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
}
.ttt{
    flex: none;
    order: 0;
    flex-grow: 0;
}
.simpli {
    font-weight: 700;
    /* Inside auto layout */
    font-size: 60px;
    color:#009349;
}
.expe{
    font-weight: 700;
    font-size: 30px;
    color: white;
}
.text {
    width: 522px;
    height: 101px;
    font-family: 'Century Gothic';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 27px;
    text-align: center;
    color: #2D2A26;
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
}
.buttonPrueba {
    color: #009845;
    /* Inside auto layout */
    flex: none;
    order: 2;
    flex-grow: 0;
}
.card1{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 60px 60px;
    gap: 26px;
    width: auto;
    height: auto;
    background: url("../../../public/img/principal/bg.png");
    // border-radius: 30px;
    background-repeat: no-repeat;
    background-size: cover;
    //margin: 0 auto;
    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    flex-wrap: wrap
}

.frame15941452-frame15941452 {
  display: flex;
  padding: 60px 55px;
  position: relative;
  align-self: stretch;
  box-sizing: border-box;
  align-items: center;
  border-color: transparent;
  justify-content: center;
}
.frame15941452-svg {
  width: 694;
  height: 441;
  margin: 0 26px 0 0;
}
.frame15941452-frame27136408 {
  display: flex;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  flex-shrink: 1;
  border-color: transparent;
  flex-direction: column;
}
.frame15941452-svg1 {
  width: 492;
  height: 110;
  margin: 0 0 57px 0;
}

.frame15941452-vbtn35787 {
  height: 44px;
  display: flex;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  border-color: transparent;
  border-radius: 44px;
  background-color: var(--dl-color-default-verde642d7);
}
.frame15941452-content-i3578747890 {
  display: flex;
  padding: 11px 0;
  position: relative;
  align-self: stretch;
  box-sizing: border-box;
  align-items: center;
  flex-shrink: 1;
  border-color: transparent;
}
.frame15941452-text8 {
  color: rgba(255, 255, 255, 1);
  height: auto;
  align-self: auto;
  text-align: center;
  line-height: 36px;
  text-decoration: none;
}
</style>
