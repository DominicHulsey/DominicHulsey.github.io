<template>
  <div class="AboutMe" style="height:100vh">
    <div class="row">
      <div class="col-6 d-flex align-items-center justify-content-center" style="height: 100vh;">
        <transition name="slide" enter-active-class="slideInLeft" leave-active-class="gone">
          <div class="card bg-transparent" v-if="setActive=='AboutMe'">
            <img class="card-img-top img-fluid circle" src="../assets/selfie.jpg"
              style="align-self: center;border-radius:5%;" />
            <div class="card-body rounded mt-2 bg-light">
              <p>Hi! I'm Dominic Hulsey, I build full-stack applications.</p>
            </div>
          </div>
        </transition>
      </div>
      <div class="col-5" style="height:100vh;">
        <transition name="card" mode="out-in">
          <div class="row d-flex align-items-center justify-content-center" v-if="front == false" style="height:100vh;">
            <div class="card bg-light">
              <div class="card-title d-flex justify-content-center">
                <h1 class="mt-4 py-3 text-dark backC" style="font-size:24px;font-weight:bold;width:40%">
                  Technologies:
                </h1>
              </div>
              <hr class="bg-transparent">
              <div class="row m-4 bg-light justify-content-center">
                <div class="col-3">
                  <img src="../assets/html.png" class="img-fluid">
                </div>
                <div class="col-3">
                  <img src="../assets/css.png" class="img-fluid">
                </div>
                <div class="col-3">
                  <img src="../assets/js.png" class="img-fluid">
                </div>
                <div class="col-3">
                  <img src="../assets/bootstrap.png" class="img-fluid">
                </div>
                <div class="col-3">
                  <img src="../assets/node-js.png" class="img-fluid">
                </div>
                <div class="col-3">
                  <img src="../assets/c-sharp.png" class="img-fluid">
                </div>
                <div class="col-3">
                  <img src="../assets/git-bash.png" class="img-fluid">
                </div>
                <div class="col-3">
                  <img src="../assets/mongo.png" class="img-fluid">
                </div>
                <div class="col-3">
                  <img src="../assets/logo.png" class="img-fluid">
                </div>
                <div class="col-3">
                  <img src="../assets/SQL.png" class="img-fluid">
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>

  </div>
  </div>
</template>
<script>
  export default {
    mounted() {
    },
    name: 'AboutMe',
    data() {
      return {
      }
    },
    computed: {
      setActive() {
        return this.$store.state.isActive
      },
      front() {
        return this.$store.state.flip
      },
      active() {
        if (this.$store.state.isActive == "AboutMe") {
          this.front = true;
        }
      }
    },
    components: {
    }
  }
</script>


<style scoped>
  .backC {
    background-color: #cba86c;
  }

  .circle {
    max-width: 400px;
    border: 3px solid rgb(227, 227, 227);
  }

  .card-enter,
  .card-leave-to {
    opacity: 0;
    transform: rotateY(90deg);
  }

  .card-enter-active {
    transition: all 1s;
  }

  .card-leave-active {
    transition: all 0s;
  }

  .gone {
    opacity: 0;
  }

  .element {
    max-width: 75px
  }

  .backG {
    background-color: rgba(211, 211, 211, 0.776);
  }
</style>