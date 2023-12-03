<script setup>
const reloadPage = () => {
  window.location.reload();
};
</script>


<template>
  <div class="header">
    <div class="header-container">
      <img class="header-logo" src="../assets/logo.svg" alt="logo">
      <div class="reload-btn__background">
        <button class="reload-btn" @click="reloadPage"> UPDATE </button>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">

.header {
display: flex;
width: 100%;
height: 20vh;
top: 0;
position: fixed;
z-index: 100;
background: #C6FF00;
}
.header-container{
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
}
.reload-btn__background{
  width: 229px;
  height: 57px;
  background: #000;
  position: relative;
}
.reload-btn{
    font-size: 24px;
    border: none;
    left: -9px;
    top: -6px;
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff;
    color: #000;
    font-family: 'Anton',serif;
    transition:  0.3s ease-in-out;
}
.reload-btn:hover{
    left: 0;
    top: 0;
   
}
</style>
