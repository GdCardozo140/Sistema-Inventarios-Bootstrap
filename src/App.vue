<template>
  <main id="app">
    <px-header />
    <router-view
      class="
        container-fluid
        d-flex
        justify-content-center
        vw-100
        vh-100
        bg-light
        px-5
        py-10
      "
    />
  </main>
</template>

<script>
import PxHeader from '@/components/PxHeader';

export default {
  name: 'App',
  components: {
    PxHeader,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
