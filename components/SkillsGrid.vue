<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    <div 
      v-for="category in skillCategories" 
      :key="category.name"
      class="card p-6 text-center group hover:border-primary-200 dark:hover:border-primary-700"
    >
      <!-- Icon -->
      <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
        <component :is="category.icon" class="w-8 h-8 text-white" />
      </div>
      
      <!-- Category Name -->
      <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">{{ category.name }}</h3>
      
      <!-- Skills -->
      <div class="space-y-2">
        <div 
          v-for="skill in category.skills" 
          :key="skill.name"
          class="flex items-center justify-between"
        >
          <span class="text-sm text-gray-600 dark:text-gray-300">{{ skill.name }}</span>
          <div class="flex space-x-1">
            <div 
              v-for="i in 5" 
              :key="i"
              class="w-2 h-2 rounded-full"
              :class="i <= skill.level ? 'bg-primary-500' : 'bg-gray-200 dark:bg-gray-600'"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Code, Server, Cloud, Zap } from 'lucide-vue-next'

const skillCategories = [
  {
    name: 'Frontend Development',
    icon: Code,
    skills: [
      { name: 'Vue.js', level: 5 },
      { name: 'Nuxt.js', level: 5 },
      { name: 'JavaScript', level: 5 },
      { name: 'TypeScript', level: 4 },
      { name: 'Tailwind CSS', level: 5 }
    ]
  },
  {
    name: 'Backend Development',
    icon: Server,
    skills: [
      { name: 'Django', level: 5 },
      { name: 'Node.js', level: 4 },
      { name: 'PostgreSQL', level: 4 },
      { name: 'REST APIs', level: 5 },
      { name: 'WebSocket', level: 4 }
    ]
  },
  {
    name: 'Cloud & DevOps',
    icon: Cloud,
    skills: [
      { name: 'Cloudflare', level: 4 },
      { name: 'AWS', level: 3 },
      { name: 'Docker', level: 4 },
      { name: 'CI/CD', level: 4 },
      { name: 'Git', level: 5 }
    ]
  },
  {
    name: 'AI & Modern Tech',
    icon: Zap,
    skills: [
      { name: 'AI Integration', level: 4 },
      { name: 'WebRTC', level: 3 },
      { name: 'PWA', level: 4 },
      { name: 'Real-time Apps', level: 4 },
      { name: 'Performance', level: 4 }
    ]
  }
]
</script>