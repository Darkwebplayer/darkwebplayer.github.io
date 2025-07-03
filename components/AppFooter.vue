<template>
  <footer class="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
    <div class="container-custom py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-lg">A</span>
            </div>
            <span class="font-bold text-xl">Amar</span>
          </div>
          <p class="text-gray-400 mb-6 max-w-md">
            Full Stack Web Developer & AI Enthusiast crafting innovative web solutions from Kerala, India.
          </p>
          <div class="flex space-x-4">
            <a 
              v-for="social in socials" 
              :key="social.name"
              :href="social.href"
              class="w-10 h-10 bg-gray-800 dark:bg-gray-900 hover:bg-primary-600 dark:hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-300 group"
            >
              <component :is="social.icon" class="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="font-semibold text-lg mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.name">
              <NuxtLink 
                :to="link.href"
                class="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="font-semibold text-lg mb-4">Contact</h3>
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <Mail class="w-5 h-5 text-primary-400" />
              <a href="mailto:amrithanadhm@gmail.com" class="text-gray-400 hover:text-white transition-colors duration-300">
                amrithanadhm@gmail.com
              </a>
            </div>
            <div class="flex items-center space-x-3">
              <Phone class="w-5 h-5 text-primary-400" />
              <a href="tel:+918589878253" class="text-gray-400 hover:text-white transition-colors duration-300">
                +91 8589878253
              </a>
            </div>
            <div class="flex items-center space-x-3">
              <MapPin class="w-5 h-5 text-primary-400" />
              <span class="text-gray-400">Idukki, Kerala, India</span>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800 dark:border-gray-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm">
          © {{ new Date().getFullYear() }} Amar. All rights reserved.
        </p>
        <p class="text-gray-400 text-sm mt-4 md:mt-0">
          Built with ❤️ using Nuxt.js & Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Mail, Phone, MapPin, Github, Linkedin, Globe, ExternalLink } from 'lucide-vue-next'

const socials = [
  { name: 'GitHub', href: 'https://github.com/darkwebplayer', icon: Github },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Portfolio', href: 'https://darkwebplayer.github.io', icon: Globe },
  { name: 'Company', href: 'https://infy.plus', icon: ExternalLink }
]

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Contact', href: '/#contact' }
]
</script>