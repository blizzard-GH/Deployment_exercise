<script setup>
import MainHeader from './components/BHeader.vue'
</script>

<template>
  <header>
    <MainHeader />
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped></style>
