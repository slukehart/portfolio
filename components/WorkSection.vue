<script setup lang="ts">
import { jobs } from '~/data/content'
</script>

<template>
  <section>
    <h1>work experience</h1>
    <div v-for="job in jobs" :key="`${job.title}-${job.dates}`" class="work-entry">
      <div class="work-header">
        <div>
          <span class="work-title">{{ job.title }}</span>
          <span class="work-company"> | {{ job.company }}</span>
        </div>
        <span class="work-dates">{{ job.dates }}</span>
      </div>
      <ul>
        <li v-for="bullet in job.bullets" :key="bullet">{{ bullet }}</li>
      </ul>
    </div>
  </section>
</template>
