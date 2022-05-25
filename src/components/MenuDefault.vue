<template>
<!-- <b-container fluid class="d-sm-flex justify-content-md-center"> -->
    <b-navbar toggleable="lg" type="dark" variant="dark" sticky>
      <b-navbar-brand href="/">
        <img src="@/assets/drplogo.png"
        class="d-inline-block align-top logo" alt="DRPMexico">
      </b-navbar-brand>
      <b-navbar-toggle target="navbar-toggle-collapse"></b-navbar-toggle>
      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ms-auto">
          <b-nav-item href="/" class="nav-item">Partners</b-nav-item>
          <b-nav-item-dropdown text="Servicios" center>
            <b-dropdown-item to="/baas">BaaS - Respaldos</b-dropdown-item>
            <b-dropdown-item to="/draas">DRaaS - Recuperacion</b-dropdown-item>
            <b-dropdown-item href="#">IaaS - Infraestructura</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="#">Contacto</b-nav-item>
          <b-nav-item href="#">Talento</b-nav-item>
          <b-nav-item href="#">Soporte</b-nav-item>
          <b-nav-item href="#">Portales</b-nav-item>
          <b-nav-item href="#">FREE TRIAL</b-nav-item>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<style lang="scss">
.nav-item:hover{
  background: #009845;
  border-radius: 15px;
  font-weight: 700;
  color: white;
}
 .nav-link{
  text-transform: uppercase;
}
.navbar {
  padding: 10px 70px;
  gap: 10px;
  position: fixed;
  //width: 100vw;
  height: auto;
  border-color: transparent;
  background-color: #1C2A45;
}

#app{
  display: flex;
  flex-direction: column;
  //align-items: center;
  //position: relative;
  //width: auto;
  //overflow-x: auto;
  //margin: auto;
}
.logo{
  width: 300px;
  height: 60px;
}
</style>
