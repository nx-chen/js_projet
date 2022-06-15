<template>
  <div id="dropdown">
      <div id="tab_btns">
        <button class="tablinks active" @click="changeDirection('Down')">
          Drop down
        </button>
        <button class="tablinks" @click="changeDirection('Up')">Drop up</button>
        <button class="tablinks" @click="changeDirection('Right')">Drop right</button>
        <button class="tablinks" @click="changeDirection('Left')">Drop left</button>
        <button class="tablinks" @click="changeDirection('Split')">Drop down split</button>
      </div>

      <div id="Down" title="Down" class="tabcontent">
        <DropdownBody />
      </div>

      <div id="Up" title="Up" class="tabcontent">
        <DropupBody />
      </div>

      <div id="Right" title="Right" class="tabcontent">
        <DroprightBody />
      </div>

      <div id="Left" title="Left" class="tabcontent">
        <DropleftBody />
      </div>

      <div id="Split" title="Split" class="tabcontent">
        <DropdownSplitBody />
      </div>
  </div>
</template>

<script>
import DropdownBody from '@/components/dropdowns/DropdownComponent.vue'
import DropupBody from '@/components/dropdowns/DropupComponent.vue'
import DroprightBody from '@/components/dropdowns/DroprightComponent.vue'
import DropleftBody from '@/components/dropdowns/DropleftComponent.vue'
import DropdownSplitBody from '@/components/dropdowns/DropdownSplitComponent.vue'

export default {
  name: 'DropdownView',
  components: {
    DropdownBody,
    DropupBody,
    DroprightBody,
    DropleftBody,
    DropdownSplitBody
  },
  methods: {
    changeDirection (dropDirection) {
      let i = 0
      const tabcontent = document.getElementsByClassName('tabcontent')
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none'
      }
      const tablinks = document.getElementsByClassName('tablinks')
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '')
      }
      document.getElementById(dropDirection).style.display = 'block'
      event.currentTarget.className += ' active'
    }
  }
}
</script>

<style scoped lang="less">
#dropdown {
  display: flex;
  display: -webkit-inline-box;
  padding: 25px;
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
  padding: 200px 100px 0px 260px;
}

#tab_block {
  flex: 1 1 auto;
  padding: 1rem 1rem;
  border: 1px solid #ccc;
  border-right: none;
}

#Down {
  display: block;
}

</style>
