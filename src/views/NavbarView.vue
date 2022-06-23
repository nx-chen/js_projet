<template>
  <div>
    <div class="navbar">
    <div id="Scoll_Navbar">
      <nav id="navbar_sticky">
        <NavbarBody :data="['Navbar', 'Table', 'Home']" />
      </nav>
      <div>
        <p class="long_text">
          I'am a long text for test the property
          <span class="name_property">sticky</span> :)
        </p>
        <br />
        <p class="long_text">
          I'am a long text for test the property
          <span class="name_property">sticky</span> :)
        </p>
        <br />
        <p class="long_text">
          I'am a long text for test the property
          <span class="name_property">sticky</span> :)
        </p>
        <br />
        <p class="long_text">
          I'am a long text for test the property
          <span class="name_property">sticky</span> :)
        </p>
        <br />
        <p class="long_text">
          I'am a long text for test the property
          <span class="name_property">sticky</span> :)
        </p>
        <br />
        <p class="long_text">
          I'am a long text for test the property
          <span class="name_property">sticky</span> :)
        </p>
        <br />
        <p class="long_text">
          I'am a long text for test the property
          <span class="name_property">sticky</span> :)
        </p>
        <br />
        <p class="long_text">
          I'am a long text for test the property
          <span class="name_property">sticky</span> :)
        </p>
        <br />
        <p class="long_text">
          I'am a long text for test the property
          <span class="name_property">sticky</span> :)
        </p>
        <br />
      </div>
      <nav id="navbar_bottom">
        <NavbarBody :data="['Navbar', 'Table', 'Home']" />
      </nav>
    </div>
  </div>
  </div>
</template>

<script>
import NavbarBody from '@/components/NavbarComponent.vue'

export default {
  name: 'NavbarView',
  data () {
    return {
      data: ['Navbar', 'Table', 'Modal']
    }
  },
  components: {
    NavbarBody
  }
}
</script>

<style lang="less">
#Scoll_Navbar {
  height: 500px;
  overflow-y: auto;
  background-color: aliceblue;
  margin: 50px 100px;
}

#navbar_sticky {
  position: sticky;
  top: 0;
  z-index: 1020;
  background-color: rgb(242, 245, 219);
  padding: 15px;
}

#navbar_bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  height: 50px;
  left: 0;
  z-index: 1030;
  background-color: rgb(215, 218, 194);
}

#navbar_bottom #navbarBody{
  margin-top: 15px;
}

.long_text {
  font-size: 65px;
}
</style>
