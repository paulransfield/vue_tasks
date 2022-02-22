<template>
  <footer>
    <p>Copyright &copy; 2021</p>
    <router-link to="/about">
      <button :style="{ background: #669900 }" class="btn">
        About
      </button>
    </router-link> 
    <router-link to="/wiki">
      <button :style="{ background: #990000 }" class="btn">
        Wiki
      </button>
    </router-link>
  </footer>
</template>

<style scoped>
footer {
  margin-top: 30px;
  text-align: center;
}
</style>
