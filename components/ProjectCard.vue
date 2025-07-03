<template>
  <div class="card p-6 group cursor-pointer" @click="navigateToProject">
    <!-- Project Image -->
    <div class="relative overflow-hidden rounded-lg mb-6">
      <img 
        :src="project.image" 
        :alt="project.title"
        class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div class="absolute top-4 right-4">
        <span class="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-xs font-medium rounded-full text-gray-700 dark:text-gray-300">
          {{ project.status }}
        </span>
      </div>
      <div class="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div class="flex items-center justify-between">
          <ExternalLink class="w-5 h-5 text-white" />
          <span class="text-white text-sm font-medium">View Project</span>
        </div>
      </div>
    </div>

    <!-- Project Info -->
    <div>
      <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
        {{ project.title }}
      </h3>
      <p class="text-primary-600 dark:text-primary-400 font-medium text-sm mb-3">
        {{ project.subtitle }}
      </p>
      <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
        {{ project.description }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span 
          v-for="tag in project.tags" 
          :key="tag"
          class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Link -->
      <div class="flex items-center justify-between">
        <a 
          :href="project.link" 
          target="_blank"
          class="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm flex items-center space-x-1 transition-colors duration-300"
          @click.stop
        >
          <span>Visit Live Site</span>
          <ExternalLink class="w-4 h-4" />
        </a>
        <button class="text-gray-400 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
          <ArrowRight class="w-5 h-5" />
        </button>
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
}
</style>