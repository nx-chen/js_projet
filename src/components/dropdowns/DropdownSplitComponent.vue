<template>
  <div class="dropdownSplitBody">
    <div id="div_btns_split">
      <button class="dropbtn">Dropdown split</button>
      <button v-on:click="dropdownSplit" class="dropbtn shopDropdown">⯆</button>
    </div>
    <div id="myDropdownSplit" class="dropdownSplit content">
      <button class="item active" v-on:click="clickItem">First item</button>
      <button class="item" v-on:click="clickItem">Second item</button>
      <button class="item" v-on:click="clickItem">Third item</button>
      <button class="item disabled" v-on:click="clickItem" disabled>
        Fourth item
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropdownSplitBody',
  methods: {
    dropdownSplit (event) {
      document.getElementById('myDropdownSplit').classList.toggle('show')
    },
    clickItem (event) {
      let i = 0
      const items = document.getElementsByClassName('item')
      for (i = 0; i < items.length; i++) {
        items[i].className = items[i].className.replace(' active', '')
      }
      event.currentTarget.className += ' active'
    }
  }
}
</script>

<style scoped lang="less">

#div_btns_split {
  display: flex;
}

.shopDropdown {
width: 50px !important;
}

.dropbtn {
  background-color: #04aa6d;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  width: 250px;
}

.dropbtn:hover,
.dropbtn:focus {
  background-color: #3e8e41;
}

.dropdownBody {
  position: relative;
  display: inline-block;
}

.content {
  display: none;
  position: absolute;
  background-color: #f6f6f6;
  min-width: 230px;
  overflow: auto;
  border: 1px solid #ddd;
  z-index: 1;
  width: 300px;
}

.content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdownBody a:hover {
  background-color: #ddd;
}

.show {
  display: grid;
}

.item {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}

.item:hover:not(.disabled):not(.active) {
  background-color: #ddd;
}

.active {
  background-color: #ccc;
}
</style>
