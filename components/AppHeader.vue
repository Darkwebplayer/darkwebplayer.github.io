<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 transition-colors duration-300">
    <nav class="container-custom">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2 group">
          <div class="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
            <span class="text-white font-bold text-lg">A</span>
          </div>
          <span class="font-bold text-xl text-gray-900 dark:text-white hidden sm:block transition-colors duration-300">Amar</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.href"
            class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-300 relative group"
          >
            {{ item.name }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300"></span>
          </NuxtLink>
          
          <!-- Dark Mode Toggle -->
          <button 
            @click="toggleDarkMode"
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <Sun v-if="isDark" class="w-5 h-5 text-yellow-500" />
            <Moon v-else class="w-5 h-5 text-gray-600" />
          </button>
          
          <a 
            href="mailto:amrithanadhm@gmail.com"
            class="btn-primary"
          >
            Get In Touch
          </a>
        </div>

        <!-- Mobile Menu Controls -->
        <div class="md:hidden flex items-center space-x-2">
          <!-- Dark Mode Toggle Mobile -->
          <button 
            @click="toggleDarkMode"
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <Sun v-if="isDark" class="w-5 h-5 text-yellow-500" />
            <Moon v-else class="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
          
          <!-- Mobile Menu Button -->
          <button 
            @click="toggleMobileMenu"
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            :class="{ 'bg-gray-100 dark:bg-gray-800': isMobileMenuOpen }"
          >
            <Menu v-if="!isMobileMenuOpen" class="w-6 h-6 text-gray-600 dark:text-gray-300" />
            <X v-else class="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <Transition 
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 transform -translate-y-2"
        enter-to-class="opacity-100 transform translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 transform translate-y-0"
        leave-to-class="opacity-0 transform -translate-y-2"
      >
        <div v-if="isMobileMenuOpen" class="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
          <div class="flex flex-col space-y-1">
            <NuxtLink 
              v-for="item in navigation" 
              :key="item.name"
              :to="item.href"
              @click="closeMobileMenu"
              class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium transition-colors duration-300 px-4 py-3 rounded-lg mx-2"
            >
              {{ item.name }}
            </NuxtLink>
            <div class="px-2 pt-2">
              <a 
                href="mailto:amrithanadhm@gmail.com"
                class="btn-primary w-full text-center block"
                @click="closeMobileMenu"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup>
import { Menu, X, Sun, Moon } from 'lucide-vue-next'

const isMobileMenuOpen = ref(false)
const isDark = ref(false)

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Contact', href: '/#contact' }
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('darkMode', 'true')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('darkMode', 'false')
  }
}

// Initialize dark mode on mount
onMounted(() => {
  // Check for saved preference or system preference
  const savedMode = localStorage.getItem('darkMode')
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  if (savedMode === 'true' || (savedMode === null && systemPrefersDark)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }

  // Close mobile menu when clicking outside
  const handleClickOutside = (e) => {
    if (!e.target.closest('header')) {
      isMobileMenuOpen.value = false
    }
  }
  
  document.addEventListener('click', handleClickOutside)
  
  // Cleanup
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})

// Close mobile menu on route change
watch(() => useRoute().path, () => {
  isMobileMenuOpen.value = false
})
</script>