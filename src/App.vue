<template>
  <main id="app">
    <px-header />
    <px-login />
  </main>
</template>

<script>
import PxHeader from '@/components/PxHeader';
import PxLogin from '@/components/PxLogin';

export default {
  name: 'App',
  components: {
    PxHeader,
    PxLogin,
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
