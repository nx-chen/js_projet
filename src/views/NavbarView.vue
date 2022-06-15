<template>
  <div class="navbar">
    <div id="Scoll_Navbar">
      <nav id="navbar_sticky">
        <li><router-link to="/Navbar" fixed>Navbar</router-link></li> |
        <li><router-link to="/Table">Table</router-link></li>|
        <li><router-link to="/">Home</router-link></li>
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
        <li><router-link to="/Navbar" fixed>Navbar</router-link></li> |
        <li><router-link to="/Table">Table</router-link></li>|
        <li><router-link to="/">Home</router-link></li>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarView'
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
  display: block;
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
    left: 0;
    z-index: 1030;
    background-color: rgb(215, 218, 194);
}

nav li {
  display: inline;
  font-size: 18px;
  margin: 0px 10px 0px 10px;
}

.long_text {
  font-size: 65px;
}
</style>
