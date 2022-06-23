<template>
  <div id="navbarBody">
    <span>|</span>
      <li v-for="i in data" :key="i">
        <router-link :to="`/${i}`" fixed>{{ i }} </router-link>
        <span>|</span>
      </li>
  </div>
</template>

<script>
export default {
  name: 'NavbarBody',
  props: {
    data: [String]
  }
}
</script>

<style lang="less">

li {
  display: inline;
  font-size: 18px;
  margin: 0px 10px 0px 10px;
}

span {
  margin-left: 10px;
}

</style>
