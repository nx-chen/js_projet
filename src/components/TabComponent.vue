<template>
  <div id="tabBody">
    <div id="tab_block">
      <div id="London" title="London" class="tabcontent">
        <h3>London</h3>
        <p>London is the capital city of England.</p>
      </div>

      <div id="Paris" title="Paris" class="tabcontent">
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p>
      </div>

      <div id="Tokyo" title="Tokyo" class="tabcontent">
        <h3>Tokyo</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>

      <div id="Beijing" title="Beijing" class="tabcontent">
        <h3>Beijing</h3>
        <p>Beijing is the capital of China.</p>
      </div>
    </div>

    <div id="tab_btns">
      <button class="tablinks active" @click="openCity('London')">
        London
      </button>
      <button class="tablinks" @click="openCity('Paris')">Paris</button>
      <button class="tablinks" @click="openCity('Tokyo')">Tokyo</button>
      <button class="tablinks disabled" @click="openCity('Beijing')" disabled>
        Beijing
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBody',
  methods: {
    openCity (cityName) {
      let i = 0
      const tabcontent = document.getElementsByClassName('tabcontent')
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none'
      }
      const tablinks = document.getElementsByClassName('tablinks')
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '')
      }
      document.getElementById(cityName).style.display = 'block'
      event.currentTarget.className += ' active'
    }
  }
}
</script>

<style scoped lang="less">
#tabBody {
  display: flex;
  width: 80%;
  margin-left: 10%;
}

#tab_btns {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  display: grid;
}

#tab_btns button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}

#tab_btns button:hover:not(.disabled) {
  background-color: #ddd;
}

#tab_btns button.active {
  background-color: #ccc;
}

.tabcontent {
  display: none;
  padding: 6px 12px;
}

#tab_block {
  flex: 1 1 auto;
  padding: 1rem 1rem;
  border: 1px solid #ccc;
  border-right: none;
}

#London {
  display: block;
}
</style>
