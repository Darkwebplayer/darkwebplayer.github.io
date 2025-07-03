<template>
  <div class="pt-20">
    <!-- Header -->
    <section class="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            My <span class="gradient-text">Projects</span>
          </h1>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            A comprehensive showcase of innovative solutions, from AI-powered platforms to enterprise systems
          </p>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="section-padding bg-white dark:bg-gray-800">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            v-for="project in allProjects"
            :key="project.slug"
            :project="project"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO
useHead({
  title: 'Projects - Amar Portfolio',
  meta: [
    { name: 'description', content: 'Explore my portfolio of innovative web applications, AI-powered platforms, and enterprise solutions.' }
  ]
})

const allProjects = [
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
    slug: 'gigglejobs',
    title: 'GIGGLEJOBS',
    subtitle: 'Singapore-based workforce management platform',
    description: 'A Singapore-based platform revolutionizing daily wage employment in the hospitality sector, connecting hotels with qualified temporary staff.',
    image: 'https://i.ibb.co/j9h9wGjz/2025-07-03-T17-19-44-759060155-05-30.png',
    tags: ['Nuxt.js', 'PrimeVue', 'PWA', 'Real-time'],
    status: 'Ongoing Development',
    link: 'https://gigglejobs.sg'
  },
  {
    slug: 'car-resale',
    title: 'Car Resale Platform',
    subtitle: 'Innovative car marketplace solution',
    description: 'Developing an innovative platform connecting car garages with potential buyers, streamlining the pre-owned vehicle marketplace.',
    image: 'https://i.ibb.co/NdhVF8NN/carsale-darkwebplayer-nuxt-dev.png',
    tags: ['Vue.js', 'Django', 'Elasticsearch', 'Real-time'],
    status: 'Under Development',
    link: '#'
  },
  {
    slug: 'greenbay-shopping',
    title: 'GREENBAY SHOPPING',
    subtitle: 'Premium e-commerce platform',
    description: 'A specialized e-commerce platform for premium nuts and fruits, featuring custom product categorization and seamless shopping experience.',
    image: 'https://i.ibb.co/HfkY90cr/greenbayshopping-com.png',
    tags: ['WordPress', 'WooCommerce', 'E-commerce', 'SEO'],
    status: 'Live',
    link: 'https://greenbayshopping.com'
  }
]
</script>
