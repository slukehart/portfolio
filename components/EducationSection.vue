<script setup lang="ts">
import { education } from '~/data/content'
</script>

<template>
  <section>
    <h1>education</h1>
    <div class="education-header">
      <div>
        <span class="education-school">{{ education.school }}</span>
        <span class="education-degree"> — {{ education.degree }}</span>
      </div>
      <span class="education-dates">{{ education.dates }}</span>
    </div>
    <p>{{ education.details }}</p>
    <ul>
      <li v-for="cert in education.certifications" :key="cert">{{ cert }}</li>
    </ul>
  </section>
</template>
