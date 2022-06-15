<template>
  <div id="progressBody">
    <button id="RefreshProgress" v-on:click="move">Click Me</button>
    <p class="progress_titre">
      With <span class="name_property">show-progress</span> Propertie :
    </p>
    <div class="myProgress">
      <div id="myBar" class="bar">
        <input type="text" id="myValue" value="45" />
      </div>
    </div>
    <p class="progress_titre">
      With <span class="name_property">striped</span> Propertie :
    </p>
    <div class="myProgress">
      <div id="myBarStriped" class="bar bar-striped"></div>
    </div>
    <p class="progress_titre">
      With <span class="name_property">animated</span> Propertie :
    </p>
    <div class="myProgress">
      <div id="myBarAnimated" class="bar bar-animated bar-striped"></div>
    </div>

    <br />
  </div>
</template>

<script>
export default {
  name: 'ProgressBody',
  methods: {
    move () {
      let i = 0
      if (i === 0) {
        i = 1
        const elem = document.getElementById('myBar')
        const elemStriped = document.getElementById('myBarStriped')
        const elemAnimated = document.getElementById('myBarAnimated')
        let width = 1
        const value = parseInt(Math.random() * 100)
        const id = setInterval(frame, 10)
        document.getElementById('myValue').value = value
        function frame () {
          if (width >= value) {
            clearInterval(id)
            i = 0
          } else {
            width++
            elem.style.width = width + '%'
            elemStriped.style.width = width + '%'
            elemAnimated.style.width = width + '%'
          }
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
#progressBody {
  padding: 20px 100px;
}

.myProgress {
  width: 100%;
  background-color: #ddd;
  margin-top: 10px;
}

.bar {
  width: 45%;
  height: 30px;
  background-color: #04aa6d;
  align-content: center;
}

.bar-striped {
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 1rem 1rem;
  transition: width 0.6s ease;
}

.bar-animated {
  background-image: linear-gradient(
    90deg,
    #d3c014 20%,
    #d3c014 40%,
    #ffeb3b 60%,
    #ffeb3b 80%
  );
  animation: movemove 0.875s ease-in alternate infinite;
}

@keyframes movemove {
  0% {
    background-position: 0%;
  }
  20% {
    background-position: 20%;
  }
  40% {
    background-position: 40%;
  }
  60% {
    background-position: 60%;
  }
  80% {
    background-position: 80%;
  }
  100% {
    background-position: 100%;
  }
}
.progress_titre {
  color: black;
  font-family: system-ui;
  font-size: 20px;
  font-weight: 500;
  line-height: 36px;
  margin: 0;
  display: table-cell;
}

.name_property {
  font-style: italic;
  color: rgb(160, 57, 57);
}
#myValue {
  background-color: transparent;
  border: none;
  align-content: center;
  width: 15px;
  text-align: center;
}

#RefreshProgress {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
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

#RefreshProgress:active {
  box-shadow: 0px 0px 0px 0px;
  top: 5px;
  left: 5px;
}

@media (min-width: 768px) {
  #RefreshProgress {
    padding: 0.25em 0.75em;
  }
}
</style>
