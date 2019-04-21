<template>
  <div class="Portfolio">
    <div class="row">
      <div class="mt-5 d-flex justify-content-center">
        <div class="keepClass mx-2" style="max-width:200px;max-height:200px;">
          <img class="keepImage" src="https://via.placeholder.com/200">
          <div class="overlay5">
            <div class="row mt-5">
              <div class="col-12">
                <p class="text-white">Portfolio Description</p>
              </div>
            </div>
          </div>
          <div class="overlay2">
            <p class="text">Portfolio Name</p>
          </div>
        </div>
        <div class="keepClass mx-2" style="max-width:200px;max-height:200px;">
          <img class="keepImage" src="https://via.placeholder.com/200">
          <div class="overlay5">
            <div class="row mt-5">
              <div class="col-12">
                <p class="text-white">Portfolio Description</p>
              </div>
            </div>
          </div>
          <div class="overlay2">
            <p class="text">Portfolio Name</p>
          </div>
        </div>
        <div class="keepClass mx-2" style="max-width:200px;max-height:200px;">
          <img class="keepImage" src="https://via.placeholder.com/200">
          <div class="overlay5">
            <div class="row mt-5">
              <div class="col-12">
                <p class="text-white">Portfolio Description</p>
              </div>
            </div>
          </div>
          <div class="overlay2">
            <p class="text">Portfolio Name</p>
          </div>
        </div>
        <div class="keepClass mx-2" style="max-width:200px;max-height:200px;">
          <img class="keepImage" src="https://via.placeholder.com/200">
          <div class="overlay5">
            <div class="row mt-5">
              <div class="col-12">
                <p class="text-white">Portfolio Description</p>
              </div>
            </div>
          </div>
          <div class="overlay2">
            <p class="text">Portfolio Name</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'Portfolio',
    data() {
      return {}
    },
    computed: {},
    methods: {},
    components: {}
  }
</script>


<style scoped>
  #keepButtons {
    transition: all 0.1s linear;
  }

  #keepButtons:hover {
    box-shadow: 1px 1px 2px black;
    background-color: #60a7f4 !important;
    transform: scale(1.02);
    cursor: pointer;
  }

  .sizing {
    max-width: 100%;
  }

  .item-move {
    transition: all 2s cubic-bezier(.55, 0, .1, 1) !important;
  }

  .item-move1 {
    transition: ease-in 2s all
  }

  #keepButtons:active {
    box-shadow: none;
    background-color: #007bff !important;
    transform: scale(1.01);
  }

  .bg-color {
    background-color: black;
  }

  .anim {
    /* box-shadow: -5px 5px 5px 0px rgba(152, 84, 187, 1) !important; */
    transition: .5s cubic-bezier(.55, 0, .1, 1);
  }

  .vue-waterfall {
    overflow: visible !important
  }

  .keepClass {
    position: relative;
    width: 100%;
  }

  .keepImage {
    display: block;
    width: 100%;
    height: auto;
  }

  .keepImage:hover {
    display: block;
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  .text {
    color: white;
    font-size: 15px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .text2 {
    color: white;
    font-size: 15px;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .overlay5 {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #9854bb;
    overflow: hidden;
    width: 100%;
    height: 0;
    transition: .5s ease;
  }

  .overlay2 {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(128, 128, 128, 0.441);
    overflow: hidden;
    width: 100%;
    height: 0;
    transition: .5s ease;
  }

  .keepClass:hover .overlay2 {
    height: 65%;
    cursor: pointer;
  }

  .keepClass:hover .overlay5 {
    height: 35%;
    cursor: pointer;
  }
</style>