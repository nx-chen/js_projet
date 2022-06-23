<template>
  <div id="app">
    <div id="my_nav">
      <NavbarBody :data="data" />
    </div>
    <router-view />
  </div>
</template>

<script>
import NavbarBody from '@/components/NavbarComponent.vue'

export default {
  name: 'NavbarView',
  data () {
    return {
      data: ['Home', 'Tab', 'Modal', 'Dropdown', 'Table', 'Progress', 'Breadcrumb', 'Navbar', 'Skeleton']
    }
  },
  components: {
    NavbarBody
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#my_nav {
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
