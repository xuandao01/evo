<template>
  <div id="app">
    <EHeader></EHeader>
    <EContent></EContent>
    <EFooter></EFooter>
  </div>
</template>

<script>
import EHeader from './layout/header.vue';
import EContent from './layout/content.vue';
import EFooter from './layout/footer.vue';
export default {
  name: 'App',
  components: {
    EHeader,
    EContent,
    EFooter
  },
  created() {
    if (!localStorage.lang) {
      localStorage.lang = 'vi';
      sessionStorage.lang = 'vi';
    } else {
      sessionStorage.lang = 'vi';
    }

    if (!this.$route.fullPath.replaceAll('/', '')) {
      this.$router.push('/home');
    }
  },
}
</script>

<style>
  @import url('@/css/main.css');
</style>
