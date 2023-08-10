<template>
  <section class="main-layout">
    <MainHeader />
    <Intro />
    <Advantages/>
    <mid/>
    <Recommendations/>
    <MainFooter/>
  </section>
</template>


<script setup>
  import MainHeader from './components/MainHeader.vue'
  import Intro from './components/Intro.vue'
  import Advantages from './components/Advantages.vue'
  import Mid from './components/Mid.vue'
  import Recommendations from './components/Recommendations.vue'
  import MainFooter from './components/MainFooter.vue'

</script>




<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
