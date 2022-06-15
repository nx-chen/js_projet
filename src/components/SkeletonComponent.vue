<template>
  <div id="skeletonBody">
    <div id="progressDiv">
      <div id="skeletonProgress" class="loadingAreaBar">
        <div id="myBar">
          <input type="text" id="myValue" value="" />
        </div>
      </div>
      <button id="RefreshSkeleton" v-on:click="move">Reload</button>
    </div>
    <div id="divContent">
      <div id="Loading">
        <div class="loadingAreaBar">
          <div id="defaultLoading" class="loadingBar"></div>
        </div>
        <div class="loadingAreaBar">
          <div id="firstLoading" class="loadingBar"></div>
        </div>
        <div class="loadingAreaBar">
          <div id="secondLoading" class="loadingBar"></div>
        </div>
        <div class="loadingAreaBar">
          <div id="thirdLoading" class="loadingBar"></div>
        </div>
      </div>
      <div id="TextArea">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        viverra nunc sapien, non rhoncus elit tincidunt vitae. Vestibulum
        maximus, ligula eu feugiat molestie, massa diam imperdiet odio, vitae
        viverra ligula est id nisi. Aliquam ut molestie est. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Phasellus at consequat dui. Aenean tristique sagittis quam, sit
        amet sollicitudin neque sodales in.
      </div>
    </div>
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
        document.getElementById('TextArea').style.display = 'none'
        document.getElementById('Loading').style.display = 'grid'
        let width = 1
        const id = setInterval(frame, 10)
        function frame () {
          if (width >= 100) {
            document.getElementById('TextArea').style.display = 'block'
            document.getElementById('Loading').style.display = 'none'
            clearInterval(id)
            i = 0
          } else {
            width++
            elem.style.width = width + '%'
            document.getElementById('myValue').value = width + '%'
          }
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
#divContent {
  margin: 30px 0px;
}

#skeletonBody {
  width: 60%;
  margin-left: 20%;
}

#skeletonProgress {
  width: 100%;
  background-color: #ddd;
  border-radius: 5px;
  margin-top: 5px;
  margin-right: 15px;
}

#myBar {
  width: 1%;
  height: 30px;
  background-color: #9fc1c2;
  border-radius: 5px;
  align-content: center;
}

.loadingBar {
  height: 30px;
  background-color: #9fc1c2;
  border-radius: 5px;
  height: 20px;
  margin-top: 5px;
}

#defaultLoading {
  width: 90%;
  background-color: thistle;
}

#firstLoading {
  width: 50%;
  animation: move 0.875s ease-in-out alternate infinite;
}

@keyframes movemove {
  0% {
    background-image: linear-gradient(
      90deg,
      #ffeb3b,
      #d3c014,
      #d3c014,
      #ffeb3b
    );
  }
  10% {
    background-image: linear-gradient(
      90deg,
      #ffeb3b,
      #ffeb3b,
      #d3c014,
      #d3c014
    );
  }
  20% {
    background-image: linear-gradient(
      90deg,
      #d3c014,
      #ffeb3b,
      #ffeb3b,
      #d3c014
    );
  }
  30% {
    background-image: linear-gradient(
      90deg,
      #d3c014,
      #d3c014,
      #ffeb3b,
      #ffeb3b
    );
  }
  40% {
    background-image: linear-gradient(
      90deg,
      #ffeb3b,
      #d3c014,
      #d3c014,
      #ffeb3b
    );
  }
  50% {
    background-image: linear-gradient(
      90deg,
      #ffeb3b,
      #ffeb3b,
      #d3c014,
      #d3c014
    );
  }
  60% {
    background-image: linear-gradient(
      90deg,
      #d3c014,
      #ffeb3b,
      #ffeb3b,
      #d3c014
    );
  }
  70% {
    background-image: linear-gradient(
      90deg,
      #d3c014,
      #d3c014,
      #ffeb3b,
      #ffeb3b
    );
  }
  80% {
    background-image: linear-gradient(
      90deg,
      #ffeb3b,
      #d3c014,
      #d3c014,
      #ffeb3b
    );
  }
  90% {
    background-image: linear-gradient(
      90deg,
      #ffeb3b,
      #ffeb3b,
      #d3c014,
      #d3c014
    );
  }
  100% {
    background-image: linear-gradient(
      90deg,
      #d3c014,
      #ffeb3b,
      #ffeb3b,
      #d3c014
    );
  }
}

#secondLoading {
  width: 30%;
  background-color: burlywood;
  animation: movemove 1.75s linear infinite;
}
@keyframes movetow {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.975);
  }
}

#thirdLoading {
  width: 80%;
  background-color: rgb(112, 133, 75);
  animation: movetow 0.875s ease-in alternate infinite;
}
@keyframes move {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.4;
  }
}

#progressDiv {
  display: flex;
  align-items: center;
}

#RefreshSkeleton {
  background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  padding: 0 18px;
  line-height: 30px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

#Loading {
  display: grid;
  flex: 1 1 auto;
  padding: 1rem 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

#TextArea {
  flex: 1 1 auto;
  padding: 1rem 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  display: none;
}

#RefreshSkeleton:hover {
  background-color: #fff;
}

#RefreshSkeleton:active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {
  #RefreshSkeleton {
    min-width: 120px;
    padding: 0 25px;
  }
}

#myValue {
  background-color: transparent;
  border: none;
  align-content: center;
  width: 40px;
  text-align: center;
  color: #fbeee0;
}
</style>
