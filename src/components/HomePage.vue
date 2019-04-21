<template>
  <div class="Homepage home">
    <div class="overlay justify-content-center">
      <!-- <div>
        <button @click="$parent.api.moveSectionDown()" class="homeBG btn btn-outline-primary py-3 px-4">View
          my work <i class="ml-2 fas fa-arrow-right arHover"></i></button>
      </div> -->
      <div>
        <button @click="$parent.api.moveSectionDown()" class="homeButton btn btn-outline-primary py-3 px-4">View
          my work <i class="ml-2 fas fa-arrow-right arHover"></i></button>
      </div>
    </div>
  </div>
</template>


<script>
  import Parallax from "vue-parallaxy";
  export default {
    name: 'Homepage',
    mounted() {
    },
    data() {
      return {
        options: {
          bigSectionsDestination: 'top',
          afterLoad: this.afterLoad,
          navigation: true,
          anchors: ['page1', 'page2', 'page3'],
          // sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab']
        },
      }
    },
    computed: {},
    methods: {
      afterLoad: function (origin, destination, direction) {
        console.log("After load....");
        console.log(destination);
      },
      addSection: function (e) {
        var newSectionNumber = document.querySelectorAll('.fp-section').length + 1

        // creating the section div
        var section = document.createElement('div')
        section.className = 'section'
        section.innerHTML = `<h3>Section ${newSectionNumber}</h3>`

        // adding section
        document.querySelector('#fullpage').appendChild(section)

        // creating the section menu element
        var sectionMenuItem = document.createElement('li')
        sectionMenuItem.setAttribute('data-menuanchor', 'page' + newSectionNumber)
        sectionMenuItem.innerHTML = `<a href="#page${newSectionNumber}">Section${newSectionNumber}</a>`

        // adding anchor for the section
        this.options.anchors.push(`page${newSectionNumber}`)

        // we have to call `update` manually as DOM changes won't fire updates
        // requires the use of the attribute ref="fullpage" on the
        // component element, in this case, <full-page>
        // ideally, use an ID element for that element too
        this.$refs.fullpage.build()
      },

      removeSection: function () {
        var sections = document.querySelector('#fullpage').querySelectorAll('.fp-section')
        var lastSection = sections[sections.length - 1]

        // removing the last section
        lastSection.parentNode.removeChild(lastSection)

        // removing the last anchor
        this.options.anchors.pop()

        // removing the last item on the sections menu
        var sectionsMenuItems = document.querySelectorAll('#menu li')
        var lastItem = sectionsMenuItems[sectionsMenuItems.length - 1]
        lastItem.parentNode.removeChild(lastItem)
      },
    },
    components: {
      Parallax
    }
  }
</script>


<style scoped>
  .home {
    background-image: url("../assets/BG.jpg");
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    overflow: hidden;
  }

  .overlay {
    align-items: center;
    display: flex;
    background-color: rgba(77, 77, 77, 0.283);
    height: 100vh;
    width: 100vw;
    z-index: 10;
    text-align: center;
  }

  .homeButton {
    border-radius: 0;
    position: absolute;
    color: white;
    border-color: white;
    z-index: 10000;
    background-color: rgba(80, 80, 80, 0.562);
    font-weight: bolder;
    font-size: 1.2em;
    vertical-align: middle;
    transform: translate(-50%, -50%);
  }

  .homeBG {
    border-radius: 0;
    position: absolute;
    color: transparent;
    border-color: transparent;
    background-color: rgba(55, 55, 55, 0.527);
    filter: blur(5px);
    z-index: 500;
    font-weight: bolder;
    font-size: 1.2em;
    vertical-align: middle;
    transform: translate(-50%, -50%);
  }

  .homeButton:hover {
    background-color: rgba(108, 108, 254, 0.735);
    align-items: center;
  }

  .homeBG:hover {
    background-color: rgba(108, 108, 254, 0.735);
    align-items: center;
  }

  .arHover {
    transition: all 0.3s linear;
    text-shadow: 0;
  }

  .homeButton:hover .arHover {
    transform: rotate(90deg);
  }
</style>