<script setup lang="ts">
import { skillCategories } from '~/data/content'
</script>

<template>
  <section>
    <h1>technologies</h1>
    <div v-for="group in skillCategories" :key="group.category" class="skill-group">
      <h3>{{ group.category }}</h3>
      <div class="skill-chips">
        <span v-for="skill in group.skills" :key="skill" class="skill-chip">{{ skill }}</span>
      </div>
    </div>
  </section>
</template>
