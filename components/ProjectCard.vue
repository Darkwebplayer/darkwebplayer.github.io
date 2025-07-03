<template>
  <div 
    class="card bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-xl p-6 group cursor-pointer transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:bg-white/80 dark:hover:bg-gray-800/80 border border-white/20"
    @click="navigateToProject"
  >
    <!-- Project Image -->
    <div class="relative overflow-hidden rounded-lg mb-6">
      <img 
        :src="project.image" 
        :alt="project.title"
        class="w-full h-56 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div class="absolute top-4 right-4">
        <span class="px-3 py-1 bg-primary-500/90 text-white backdrop-blur-sm text-xs font-bold rounded-full shadow-md">
          {{ project.status }}
        </span>
      </div>

      <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:backdrop-blur-sm">
        <div class="text-center transform group-hover:scale-110 transition-transform duration-300 ease-in-out">
          <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <ArrowRight class="w-8 h-8 text-white" />
          </div>
          <p class="text-white font-bold mt-2 text-sm tracking-wider uppercase">View Project</p>
        </div>
      </div>
    </div>

    <!-- Project Info -->
    <div>
      <p class="text-primary-600 dark:text-primary-400 font-semibold text-sm mb-1">
        {{ project.subtitle }}
      </p>
      <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
        {{ project.title }}
      </h3>
      <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 h-[72px]">
        {{ project.description }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-5">
        <span 
          v-for="tag in project.tags.slice(0, 4)" 
          :key="tag"
          class="px-3 py-1 bg-gray-100/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full transition-colors duration-300 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Link -->
      <div class="flex items-center justify-between">
        <a 
          :href="project.link" 
          target="_blank"
          class="text-primary-600 dark:text-primary-400 hover:underline font-medium text-sm flex items-center space-x-1.5 transition-colors duration-300"
          @click.stop
        >
          <ExternalLink class="w-4 h-4" />
          <span>Visit Live Site</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ExternalLink, ArrowRight } from 'lucide-vue-next'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const navigateToProject = () => {
  navigateTo(`/projects/${props.project.slug}`)
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* To ensure consistent card height, we can set a fixed height for the description */
.h-\[72px\] {
  height: 72px; /* 3 lines * 24px line-height */
}
</style>
