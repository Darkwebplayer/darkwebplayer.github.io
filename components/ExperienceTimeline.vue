<template>
  <div class="relative">
    <!-- Timeline Line -->
    <div class="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500"></div>

    <!-- Timeline Items -->
    <div class="space-y-12">
      <div 
        v-for="(item, index) in experiences" 
        :key="index"
        class="relative flex flex-col md:flex-row items-start md:items-center"
        :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
      >
        <!-- Timeline Dot -->
        <div class="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white dark:bg-gray-800 border-4 border-primary-500 rounded-full flex items-center justify-center z-10">
          <div class="w-2 h-2 bg-primary-500 rounded-full"></div>
        </div>

        <!-- Content -->
        <div 
          class="ml-16 md:ml-0 md:w-5/12 card p-6"
          :class="index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'"
        >
          <div class="flex items-center justify-between mb-3">
            <span class="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full">
              {{ item.period }}
            </span>
            <span class="text-xs text-gray-500 dark:text-gray-400 font-medium">{{ item.type }}</span>
          </div>
          
          <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{{ item.position }}</h3>
          <p class="text-primary-600 dark:text-primary-400 font-medium mb-3">{{ item.company }}</p>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ item.description }}</p>
          
          <!-- Achievements -->
          <ul class="space-y-2">
            <li 
              v-for="achievement in item.achievements" 
              :key="achievement"
              class="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-300"
            >
              <CheckCircle class="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
              <span>{{ achievement }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckCircle } from 'lucide-vue-next'

const experiences = [
  {
    period: '2024 - Present',
    position: 'Freelance Full Stack Developer',
    company: 'Independent',
    type: 'Freelance',
    description: 'Leading development of innovative platforms and working with international clients on cutting-edge web solutions.',
    achievements: [
      'Core maintainer of TACKPAD productivity platform',
      'Building AI-powered MOCKPROS interview platform',
      'Developing GIGGLEJOBS for Singapore startup',
      'Working on innovative car resale platform'
    ]
  },
  {
    period: '2024',
    position: 'Chief Technology Officer',
    company: 'The Comma Company',
    type: 'Full-time',
    description: 'Led development of enterprise property management system and managed cross-functional development teams.',
    achievements: [
      'Architected HYRACORP managing 500+ properties',
      'Led team of 4 developers',
      'Implemented enterprise security standards',
      'Delivered scalable solutions for Indian real estate market'
    ]
  },
  {
    period: '2021 - 2024',
    position: 'Founder & Lead Full Stack Developer',
    company: 'Infyplus Innovations',
    type: 'Startup',
    description: 'Founded and scaled tech startup, building multiple production applications and establishing development processes.',
    achievements: [
      'Built Learning Management System',
      'Developed PSC Mock Test platform',
      'Created Anxiety Tracker PWA',
      'Grew client base and delivered 5+ successful projects'
    ]
  }
]
</script>