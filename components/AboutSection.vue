<script setup lang="ts">
import { about } from '~/data/content'
</script>

<template>
  <section>
    <h1>about me</h1>
    <p v-for="(paragraph, index) in about" :key="index">{{ paragraph }}</p>
  </section>
</template>
