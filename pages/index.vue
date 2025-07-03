<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"></div>
      <div class="absolute top-20 left-10 w-72 h-72 bg-primary-200 dark:bg-primary-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-pulse-slow"></div>
      <div class="absolute top-40 right-10 w-72 h-72 bg-accent-200 dark:bg-accent-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-pulse-slow animation-delay-2000"></div>
      <div class="absolute -bottom-8 left-20 w-72 h-72 bg-primary-300 dark:bg-primary-800/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-pulse-slow animation-delay-4000"></div>

      <div class="container-custom relative z-10 pt-20 md:pt-0">
        <div class="text-center max-w-4xl mx-auto">
          <!-- Greeting -->
          <div class="animate-slide-up">
            <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4 font-medium">
              Hi, I'm Amar! 👋
            </p>
          </div>

          <!-- Main Title -->
          <div class="animate-slide-up animation-delay-200">
            <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span class="gradient-text">Full Stack</span><br>
              <span class="text-gray-900 dark:text-gray-100">Web Developer</span><br>
            </h1>
          </div>

          <!-- Description -->
          <div class="animate-slide-up animation-delay-400">
            <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Crafting innovative web solutions from Kerala, India<br>
              Specializing in Vue.js, Nuxt.js, Django, and AI-powered applications
            </p>
          </div>

          <!-- Stats -->
          <div class="animate-slide-up animation-delay-600">
            <div class="flex flex-wrap justify-center items-center gap-8 mb-12 text-sm md:text-base">
              <div class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span class="text-gray-700 dark:text-gray-300 font-medium">4+ years of experience</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-accent-500 rounded-full"></div>
                <span class="text-gray-700 dark:text-gray-300 font-medium">Multiple domain knowledge</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span class="text-gray-700 dark:text-gray-300 font-medium">Cutting-edge technologies</span>
              </div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="animate-slide-up animation-delay-800">
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#projects" class="btn-primary">
                View My Work
              </a>
              <a href="mailto:amrithanadhm@gmail.com" class="btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <ChevronDown class="w-6 h-6 text-gray-400 dark:text-gray-500" />
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section-padding bg-white dark:bg-gray-800">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div class="animate-slide-in-left">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              About <span class="gradient-text">Me</span>
            </h2>
            <div class="prose prose-lg text-gray-600 dark:text-gray-300 space-y-4">
              <p>
                I'm a passionate Full Stack Web Developer and AI enthusiast with over 4 years of experience building scalable web applications. My journey began in 2021 as the Founder of Infyplus Innovations, progressed to CTO at The Comma Company in 2024, and now I'm thriving as a freelance developer working on cutting-edge projects.
              </p>
              <p>
                Currently, I'm the core maintainer of TACKPAD, a revolutionary productivity platform, while simultaneously developing MOCKPROS, an AI-powered interview platform. I also work with international clients, including a Singapore-based startup for workforce management solutions.
              </p>
              <p>
                My expertise spans modern JavaScript frameworks, robust backend systems, AI integration, and enterprise-level architecture. I've successfully delivered projects ranging from productivity tools to property management systems, serving thousands of users across different markets.
              </p>
            </div>

            <!-- Current Focus -->
            <div class="mt-8">
              <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Current Focus:</h3>
              <ul class="space-y-2">
                <li v-for="focus in currentFocus" :key="focus" class="flex items-center space-x-3">
                  <CheckCircle class="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <span class="text-gray-600 dark:text-gray-300">{{ focus }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Image/Visual -->
          <div class="animate-slide-in-right">
            <div class="relative">
              <div class="w-full h-96 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl flex items-center justify-center">
                <div class="text-center">
                  <div class="w-32 h-32 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span class="text-white font-bold text-4xl">A</span>
                  </div>
                  <p class="text-gray-600 dark:text-gray-300 font-medium">Full Stack Developer</p>
                  <p class="text-gray-500 dark:text-gray-400">Kerala, India</p>
                </div>
              </div>
              <!-- Floating Elements -->
              <div class="absolute -top-4 -right-4 w-20 h-20 bg-primary-500 rounded-lg flex items-center justify-center transform rotate-12 shadow-lg">
                <Code class="w-8 h-8 text-white" />
              </div>
              <div class="absolute -bottom-4 -left-4 w-20 h-20 bg-accent-500 rounded-lg flex items-center justify-center transform -rotate-12 shadow-lg">
                <Zap class="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section id="projects" class="section-padding bg-gray-50 dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Featured <span class="gradient-text">Projects</span>
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing innovative solutions that combine cutting-edge technology with exceptional user experience
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            v-for="project in featuredProjects"
            :key="project.slug"
            :project="project"
          />
        </div>

        <div class="text-center mt-12">
          <NuxtLink to="/projects" class="btn-primary">
            View All Projects
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section id="experience" class="section-padding bg-white dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            My <span class="gradient-text">Journey</span>
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A timeline of my professional growth and key achievements
          </p>
        </div>

        <ExperienceTimeline />
      </div>
    </section>

    <!-- Skills Section -->
    <section class="section-padding bg-gray-50 dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Skills & <span class="gradient-text">Technologies</span>
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <SkillsGrid />
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section-padding bg-white dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Let's Work <span class="gradient-text">Together</span>
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>

        <ContactSection />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ChevronDown, CheckCircle, Code, Zap } from 'lucide-vue-next'

// SEO
useHead({
  title: 'Amar - Full Stack Developer & AI Enthusiast',
  meta: [
    { name: 'description', content: 'Full Stack Web Developer & AI Enthusiast from Kerala, India. Specializing in Vue.js, Nuxt.js, Django, and AI-powered applications.' }
  ]
})

const currentFocus = [
  'AI-powered web applications',
  'Productivity and workflow optimization tools',
  'International client projects',
  'Open-source contributions and community building'
]

const featuredProjects = [
  {
    slug: 'tackpad',
    title: 'TACKPAD',
    subtitle: 'Next-gen productivity platform with AI integration',
    description: 'A revolutionary productivity tool that revolutionizes how users organize tasks, notes, timers, and workflows with complete customization freedom.',
    image: 'https://i.ibb.co/HLCr0Hrw/dev-tack-pad-pages-dev-board-BOARD-JGI9-XQU2-YU.png',
    tags: ['Nuxt.js', 'Vue.js', 'Cloudflare D1', 'AI Integration'],
    status: 'Active Development',
    link: 'https://tackpad.xyz/home'
  },
  {
    slug: 'mockpros',
    title: 'MOCKPROS',
    subtitle: 'AI-powered interview preparation platform',
    description: 'An intelligent mock interview platform that uses AI to provide personalized interview preparation with real-time feedback and performance analytics.',
    image: 'https://i.ibb.co/G3Vm4Pgv/mockpros-in-interview-resume-1.png',
    tags: ['Vue.js', 'Django', 'AI/ML', 'WebRTC'],
    status: 'Live & Active',
    link: 'https://mockpros.in'
  },
  {
    slug: 'hyracorp',
    title: 'HYRACORP',
    subtitle: 'Enterprise property management system',
    description: 'A comprehensive property management platform serving the Indian real estate market, streamlining rental processes from listing to lease management.',
    image: 'https://i.ibb.co/N66Q9C4f/hyracorp-com.png',
    tags: ['Nuxt.js', 'Django', 'PostgreSQL', 'AWS'],
    status: 'Live & Production',
    link: 'https://hyracorp.com'
  },
  {
    slug: 'car-resale',
    title: 'Car Resale Platform',
    subtitle: 'Innovative car marketplace solution',
    description: 'Developing an innovative platform connecting car garages with potential buyers, streamlining the pre-owned vehicle marketplace.',
    image: 'https://i.ibb.co/NdhVF8NN/carsale-darkwebplayer-nuxt-dev.png',
    tags: ['Vue.js', 'Django', 'Elasticsearch', 'Real-time'],
    status: 'Under Development',
    link: 'https://carsale-darkwebplayer.nuxt.dev/'
  }
]

</script>

<style scoped>
.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.animation-delay-800 {
  animation-delay: 0.8s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
