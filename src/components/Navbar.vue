<template>
  <div class="navbar" id="topheader" style="width:100%">
    <nav class=" navbar navbar-expand-sm sticky-top navbar-dark info-color">
      <a class=" bg-dark navbar-brand" href="#">Dominic Hulsey</a>
      <button class="navbar-toggler ml-5" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto" style="width:100%">
          <li class="nav-item" :class="{ active: isActive == 'Home' }"
            @click="$parent.$children[0].$parent.$children[1].api.moveTo(1,2)">
            <a class="nav-link waves-effect waves-light" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item" :class="{ active: isActive == 'AboutMe' }"
            @click="$parent.$children[0].$parent.$children[1].api.moveTo(2,2)">
            <a class="nav-link waves-effect waves-light" href="#">About Me</a>
          </li>
          <li class="nav-item" :class="{ active: isActive == 'Portfolio' }"
            @click="$parent.$children[0].$parent.$children[1].api.moveTo(3,2)">
            <a class="nav-link waves-effect waves-light" href="#">Portfolio</a>
          </li>
          <li class="nav-item" :class="{ active: isActive == 'Contact' }"
            @click="$parent.$children[0].$parent.$children[1].api.moveTo(4,2)">
            <a class="nav-link waves-effect waves-light" href="#">Contact</a>
          </li>
          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu dropdown-info" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item waves-effect waves-light" href="#">Action</a>
              <a class="dropdown-item waves-effect waves-light" href="#">Another action</a>
              <a class="dropdown-item waves-effect waves-light" href="#">Something else here</a>
            </div>
          </li> -->
        </ul>
      </div>
    </nav>
  </div>
</template>


<script>
  export default {
    name: 'navbar',
    data() {
      return {
      }
    },
    computed: {
      isActive() {
        return this.$store.state.isActive
      }
    },
    methods: {},
    components: {}
  }
</script>


<style scoped>
  .navbar {
    position: absolute;
  }

  #topheader .navbar-nav li>a {
    text-transform: capitalize;
    color: #333;
    transition: background-color .2s, color .2s;
  }

  #topheader .navbar-nav li>a:hover {
    background-color: #333;
    color: #fff;
  }

  #topheader .navbar-nav li>a:active {
    background-color: #333;
    color: #fff;
  }

  #topheader .navbar-nav li.active>a {
    background-color: #333;
    color: #fff;
  }
</style>