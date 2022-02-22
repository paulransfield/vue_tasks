<template>
  <footer>
    <p>Copyright &copy; 2021</p>
    <router-link to="/about">
      <button :style="{ background: color }" class="btn">
        About
      </button>
    </router-link> 
    <router-link to="/wiki">
      <button :style="{ background: color }" class="btn1">
        Wiki
      </button>
    </router-link>
  </footer>
</template>

<style scoped>
.btn {
  color: #669900;
}
.btn1 {
  color: #990000;
}

footer {
  margin-top: 30px;
  text-align: center;
}
</style>
