<template id="home">
  <div class="home">
    <navbar></navbar>
    <full-page :options="options" id="fullpage" ref="fullpage">
      <div class="section section1">
        <home-page></home-page>
        <!-- <h3>Section 1</h3> -->
      </div>
      <div class="section section2 bg-light">
        <about-me></about-me>
      </div>
      <div class="section bg-light">
        <portfolio></portfolio>
      </div>
      <div class="section bg-light">
        <h3>Section 4</h3>
      </div>
    </full-page>

    <!-- <ul class="actions">
      <li @click="$refs.fullpage.api.moveSectionDown()" class="actions-button">Down</li>
      <li @click="$refs.fullpage.api.moveSectionUp()" class="actions-button">Up</li>
      <li @click="$refs.fullpage.api.moveTo(3,2)" class="actions-button">MoveTo</li>
      <li @click="$refs.fullpage.api.silentMoveTo(2,2)" class="actions-button">Silent Move</li>
      <li @click="$refs.fullpage.api.moveSlideRight()" class="actions-button">Move right</li>
      <li @click="$refs.fullpage.api.moveSlideLeft()" class="actions-button">Move lef</li>
      <li @click="$refs.fullpage.api.setAutoScrolling(false)" class="actions-button">Set autoScroll</li>
      <li @click="$refs.fullpage.api.setFitToSection(false)" class="actions-button">Set fitTo</li>
      <li @click="$refs.fullpage.api.setAllowScrolling(false)" class="actions-button">Set allowScroll</li>
      <li @click="$refs.fullpage.api.setKeyboardScrolling(false)" class="actions-button">Set keyboardScroll</li>
      <li @click="$refs.fullpage.api.setScrollingSpeed(4000)" class="actions-button">setScrollingSpeed</li>
      <li @click="addSection()" class="actions-button">Add section</li>
      <li @click="removeSection()" class="actions-button">Remove section</li>
    </ul> -->
  </div>

</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  import Navbar from "@/components/Navbar.vue"
  import HomePage from "@/components/HomePage.vue"
  import Parallax from "vue-parallaxy"
  import Portfolio from "@/components/Portfolio.vue"
  import AboutMe from "@/components/AboutMe.vue"
  export default {
    mounted() {
    },
    name: 'home',
    mounted() {
    },
    data() {
      return {
        options: {
          licenseKey: 13134234,
          bigSectionsDestination: 'top',
          afterLoad: this.afterLoad,
          navigation: true,
          anchors: ['Home', 'AboutMe', 'Portfolio', 'Contact'],
          // sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab']
        },
      }
    },
    components: {
      HelloWorld,
      Navbar,
      HomePage,
      Parallax,
      Portfolio,
      AboutMe
    },
    methods: {
      afterLoad: function (origin, destination, direction) {
        this.$store.dispatch("setActive", destination.anchor)
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
    }
  }
</script>

<style>
  .BG {
    background-image: URL("@/assets/BG.jpg");
    z-index: 100;
  }

  body {
    background-color: transparent;
  }

  @CHARSET "ISO-8859-1";

  /* Reset CSS
 * --------------------------------------- */
  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  form,
  fieldset,
  input,
  textarea,
  p,
  blockquote,
  th,
  td {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  table {
    border-spacing: 0;
  }

  fieldset,
  img {
    border: 0;
  }

  address,
  caption,
  cite,
  code,
  dfn,
  em,
  strong,
  th,
  var {
    font-weight: normal;
    font-style: normal;
  }

  strong {
    font-weight: bold;
  }

  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  caption,
  th {
    text-align: left;

  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
    font-size: 100%;
    margin: 0;
    padding: 0;
  }

  q:before,
  q:after {
    content: '';
  }

  abbr,
  acronym {
    border: 0;
  }

  * {
    -webkit-box-sizing: border-box;
    /* Safari<=5 Android<=3 */
    -moz-box-sizing: border-box;
    /* <=28 */
    box-sizing: border-box;
  }

  /* Custom
 * --------------------------------------- */
  body {
    font-family: arial, helvetica;
  }

  .section {
    position: relative;
    text-align: center;
  }

  #section-1 h2 {
    color: #fff;
    font-size: 10em;
    font-weight: 900;
  }

  #section-1 h1 {
    font-size: 2em;
    font-weight: 100;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    margin: 1.5em auto 1em auto;
    color: #35495e;
    padding-right: 30px;
    padding-left: 30px;
  }

  #section-1 li {
    display: inline-block;
    margin: 1.25em 0.3em;
  }

  .section-1-button {
    padding: 0.93em 1.87em;
    background: #35495e;
    border-radius: 5px;
    display: block;
    color: #fff;
  }

  h3 {
    font-size: 5em;
    text-align: center;
    color: #fff;
    font-weight: bold;
  }

  #logo {
    position: fixed;
    top: 20px;
    left: 20px;
    color: #fff;
    font-weight: bold;
    z-index: 99;
    font-size: 1.9em;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
  }

  /* Menu
 * --------------------------------------- */
  #menu-line {
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 159px;
    height: 2px;
    background: #fff;
  }

  #menu {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 70;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    letter-spacing: 1px;
    font-size: 1.1em;
  }

  #menu li {
    display: inline-block;
    margin: 10px 0px;
    position: relative;
  }

  #menu a {
    color: #fff;
    padding: 0 1.1em 1.1em 1.1em;
  }

  #menu li.active a:after {
    content: '';
    margin: 0 1.1em 0 1.1em;
    height: 2px;
    background: #fff;
    display: block;
    position: absolute;
    bottom: -6px;
    left: 0;
    right: 0;
    display: block;
  }

  /* Actions buttons
 * --------------------------------------- */
  .actions {
    position: fixed;
    bottom: 2%;
    margin: 0 auto;
    z-index: 99;
    left: 0;
    right: 0;
    text-align: center;
  }

  .actions li {
    display: inline-block;
    margin: 0.3em 0.3em;
  }

  .actions-button {
    padding: 0.73em 1.47em;
    background: rgba(53, 73, 94, 0.47);
    border-radius: 5px;
    display: block;
    color: #fff;
    cursor: pointer;
  }

  /* Twitter
 * --------------------------------------- */
  .twitter-share i {
    vertical-align: middle;
    position: relative;
    top: 2px;
    display: inline-block;
    width: 38px;
    height: 14px;
    color: white;
    top: -4px;
    left: -2px;
    fill: #fff;
  }

  .twitter-share svg {
    height: 40px;
    margin-top: -10px;
  }

  .view-github {
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 999;
    padding: .93em 1.87em;
    background: #35495e;
    border-radius: 5px;
    display: block;
    color: #fff;
  }


  .section1,
  .section2 {
    height: 100vh !important;
  }
</style>