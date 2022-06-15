<template>
  <div id="modalBody">
    <button id="myBtn" v-on:click="open">Open Modal</button>
    <div id="myModal">
      <div class="modal-content">
        <p>Hello from modal!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalBody',
  methods: {
    open (event) {
      document.getElementById('myModal').style.display = 'block'
    }
  },
  created: function () {
    window.onclick = function (event) {
      const modal = document.getElementById('myModal')
      if (event.target === modal) {
        modal.style.display = 'none'
      }
    }
  }
}
</script>

<style scoped lang="less">
#myModal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 20%;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  pointer-events: auto;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

#myBtn {
  height: 50px;
  width: 250px;
  font-family: system-ui;
  font-size: x-large;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  background-color: whitesmoke;
  margin-bottom: 30px;
}

#myBtn:active {
  box-shadow: 0px 0px 0px 0px;
  top: 5px;
  left: 5px;
}

@media (min-width: 768px) {
  #myBtn {
    padding: 0.25em 0.75em;
  }
}
</style>
