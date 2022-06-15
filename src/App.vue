<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/Tab">Tab</router-link> |
      <router-link to="/Modal">Modal</router-link> |
      <router-link to="/Dropdown">Dropdown</router-link> |
      <router-link to="/Table">Table</router-link> |
      <router-link to="/Progress">Progress</router-link> |
      <router-link to="/Breadcrumb">Breadcrumb</router-link> |
      <router-link to="/Navbar">Navbar</router-link> |
      <router-link to="/Skeleton">Skeleton</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
