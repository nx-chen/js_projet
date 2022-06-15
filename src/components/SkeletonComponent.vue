<template>
  <div id="skeletonBody">
    <div id="myProgress">
      <div id="myBar"></div>
    </div>

    <br>
    <button  v-on:click="move">Click Me</button>
  </div>
</template>

<script>
export default {
  name: 'SkeletonBody',
  methods: {
    move () {
      let i = 0
      if (i === 0) {
        i = 1
        const elem = document.getElementById('myBar')
        let width = 1
        const id = setInterval(frame, 10)
        function frame () {
          if (width >= 100) {
            clearInterval(id)
            i = 0
          } else {
            width++
            elem.style.width = width + '%'
          }
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
#myProgress {
  width: 100%;
  background-color: #ddd;
}

#myBar {
  width: 1%;
  height: 30px;
  background-color: #04AA6D;
}
</style>
