<template>
  <div class="relative py-4">
    <!-- Timeline Line -->
    <div class="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" aria-hidden="true"></div>

    <!-- Timeline Items -->
    <div class="space-y-12">
      <div 
        v-for="(item, index) in experiences" 
        :key="index"
        class="relative md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-10 items-start group"
      >
        <!-- Content Card -->
        <div 
          :class="[
            'ml-10 md:ml-0 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-primary-500/30 transition-all duration-300',
            index % 2 === 0 ? 'md:col-start-3' : 'md:col-start-1 md:row-start-1'
          ]"
        >
          <div 
            class="flex flex-col md:flex-row md:items-center md:justify-between mb-3"
            :class="{ 'md:flex-row-reverse': index % 2 === 0 }"
          >
            <span class="px-3 py-1 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm font-semibold rounded-full self-start">
              {{ item.period }}
            </span>
            <span class="mt-2 md:mt-0 text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider" :class="{ 'md:text-right': index % 2 !== 0 }">
              {{ item.type }}
            </span>
          </div>
          
          <div :class="{ 'md:text-right': index % 2 !== 0 }">
            <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">{{ item.position }}</h3>
            <p class="text-primary-600 dark:text-primary-400 font-semibold mb-3">{{ item.company }}</p>
          </div>

          <p class="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed" :class="{ 'md:text-right': index % 2 !== 0 }">
            {{ item.description }}
          </p>
          
          <ul class="space-y-2">
            <li 
              v-for="achievement in item.achievements" 
              :key="achievement"
              class="flex items-start space-x-3 text-sm text-gray-600 dark:text-gray-400"
              :class="{ 'md:justify-end md:flex-row-reverse md:space-x-reverse': index % 2 !== 0 }"
            >
              <CheckCircle class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>{{ achievement }}</span>
            </li>
          </ul>
        </div>

        <!-- Timeline Dot -->
        <div class="absolute md:relative left-3 md:left-auto top-5 md:top-8 transform -translate-x-1/2 md:transform-none md:col-start-2 md:row-start-1 flex items-center justify-center">
          <div class="w-4 h-4 bg-white dark:bg-gray-900 border-4 border-primary-500 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:border-accent-500 z-10"></div>
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
