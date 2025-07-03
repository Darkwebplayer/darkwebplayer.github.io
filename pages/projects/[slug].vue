<template>
  <div class="pt-20" v-if="project">
    <!-- Hero Section -->
    <section class="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div>
            <div class="flex items-center space-x-3 mb-4">
              <span class="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full">
                {{ project.status }}
              </span>
              <span class="text-gray-400 dark:text-gray-500">•</span>
              <span class="text-gray-600 dark:text-gray-300 font-medium">{{ project.role }}</span>
            </div>

            <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              {{ project.title }}
            </h1>

            <p class="text-xl text-primary-600 dark:text-primary-400 font-medium mb-6">
              {{ project.subtitle }}
            </p>

            <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {{ project.overview }}
            </p>

            <div class="flex flex-wrap gap-4">
              <a
                v-if="project.liveDemo"
                :href="project.liveDemo"
                target="_blank"
                class="btn-primary"
              >
                <ExternalLink class="w-4 h-4 mr-2" />
                View Live Demo
              </a>
              <button class="btn-secondary">
                <Eye class="w-4 h-4 mr-2" />
                View Gallery
              </button>
            </div>
          </div>

          <!-- Featured Image -->
          <div class="relative">
            <img
              :src="project.featuredImage"
              :alt="project.title"
              class="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Details -->
    <section class="section-padding bg-white dark:bg-gray-800">
      <div class="container-custom">
          <!-- Image Gallery -->
                  <div class="py-10">
                    <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Project Gallery</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div
                        v-for="(image, index) in project.gallery"
                        :key="index"
                        class="relative group cursor-pointer overflow-hidden rounded-lg"
                        @click="openLightbox(index)"
                      >
                        <img
                          :src="image.url"
                          :alt="image.caption"
                          class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <ZoomIn class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                          <p class="text-white text-sm">{{ image.caption }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Main Content -->
          <div class="lg:col-span-2 space-y-12">
            <!-- Overview -->
            <div>
              <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Project Overview</h2>
              <div class="prose prose-lg text-gray-600 dark:text-gray-300">
                <p>{{ project.detailedDescription }}</p>
              </div>
            </div>

            <!-- Key Features -->
            <div>
              <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Key Features</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  v-for="feature in project.keyFeatures"
                  :key="feature"
                  class="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <CheckCircle class="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <span class="text-gray-700 dark:text-gray-300">{{ feature }}</span>
                </div>
              </div>
            </div>

            <!-- Technical Challenges -->
            <div>
              <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Challenges Solved</h2>
              <div class="space-y-4">
                <div
                  v-for="challenge in project.challengesSolved"
                  :key="challenge"
                  class="flex items-start space-x-3"
                >
                  <Zap class="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                  <span class="text-gray-600 dark:text-gray-300">{{ challenge }}</span>
                </div>
              </div>
            </div>

            <!-- Innovation Highlights -->
            <div v-if="project.innovationHighlights">
              <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Innovation Highlights</h2>
              <div class="space-y-4">
                <div
                  v-for="highlight in project.innovationHighlights"
                  :key="highlight"
                  class="flex items-start space-x-3"
                >
                  <Lightbulb class="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span class="text-gray-600 dark:text-gray-300">{{ highlight }}</span>
                </div>
              </div>
            </div>


          </div>

          <!-- Sidebar -->
          <div class="space-y-8">
            <!-- Project Info -->
            <div class="card p-6">
              <h3 class="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">Project Info</h3>
              <div class="space-y-4">
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400 mb-1">Status</p>
                  <p class="font-medium text-gray-900 dark:text-gray-100">{{ project.status }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400 mb-1">Role</p>
                  <p class="font-medium text-gray-900 dark:text-gray-100">{{ project.role }}</p>
                </div>
                <div v-if="project.timeline">
                  <p class="text-sm text-gray-500 dark:text-gray-400 mb-1">Timeline</p>
                  <p class="font-medium text-gray-900 dark:text-gray-100">{{ project.timeline }}</p>
                </div>
                <div v-if="project.teamSize">
                  <p class="text-sm text-gray-500 dark:text-gray-400 mb-1">Team Size</p>
                  <p class="font-medium text-gray-900 dark:text-gray-100">{{ project.teamSize }}</p>
                </div>
              </div>
            </div>

            <!-- Tech Stack -->
            <div class="card p-6">
              <h3 class="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">Tech Stack</h3>
              <div class="space-y-4">
                <div
                  v-for="(techs, category) in project.techStack"
                  :key="category"
                >
                  <p class="text-sm text-gray-500 dark:text-gray-400 mb-2 capitalize">{{ category }}</p>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tech in techs"
                      :key="tech"
                      class="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Business Impact -->
            <div v-if="project.businessImpact" class="card p-6">
              <h3 class="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">Business Impact</h3>
              <div class="space-y-3">
                <div
                  v-for="impact in project.businessImpact"
                  :key="impact"
                  class="flex items-start space-x-2"
                >
                  <TrendingUp class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span class="text-sm text-gray-600 dark:text-gray-300">{{ impact }}</span>
                </div>
              </div>
            </div>

            <!-- Links -->
            <div class="card p-6">
              <h3 class="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">Links</h3>
              <div class="space-y-3">
                <a
                  v-if="project.liveDemo"
                  :href="project.liveDemo"
                  target="_blank"
                  class="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300"
                >
                  <ExternalLink class="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  class="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-300"
                >
                  <Github class="w-4 h-4" />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Projects -->
    <section class="section-padding bg-gray-50 dark:bg-gray-900">
      <div class="container-custom">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          Other <span class="gradient-text">Projects</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            v-for="relatedProject in relatedProjects"
            :key="relatedProject.slug"
            :project="relatedProject"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ExternalLink, Eye, CheckCircle, Zap, Lightbulb, ZoomIn, TrendingUp, Github } from 'lucide-vue-next'

const route = useRoute()
const slug = route.params.slug

// Project data (in a real app, this would come from an API or CMS)
const projectsData = {
  'tackpad': {
    title: 'TACKPAD',
    subtitle: 'Next-gen productivity platform with AI integration',
    status: 'Active Development',
    role: 'Core Maintainer',
    overview: 'A revolutionary productivity tool that revolutionizes how users organize tasks, notes, timers, and workflows with complete customization freedom.',
    detailedDescription: 'TACKPAD represents a paradigm shift in productivity tools, offering users unprecedented flexibility in organizing their digital workspace. Unlike traditional productivity apps that force users into rigid structures, TACKPAD provides a canvas-like interface where every component can be positioned, resized, and customized according to individual preferences and workflows.',
    featuredImage: 'https://i.ibb.co/HLCr0Hrw/dev-tack-pad-pages-dev-board-BOARD-JGI9-XQU2-YU.png',
    liveDemo: 'https://tackpad.xyz/home',
    timeline: '2024 - Present',
    teamSize: 'Two',
    keyFeatures: [
      'Drag-and-drop workspace customization',
      'Real-time collaboration capabilities',
      'Smart task automation and scheduling',
      'Cross-platform synchronization',
      'Advanced analytics and insights',
      'Flexible layout system',
      'Multi-workspace support',
      'Integrated timer and focus management'
    ],
    challengesSolved: [
      'Implemented real-time data synchronization across multiple devices',
      'Designed scalable architecture handling thousands of concurrent users',
      'Optimized performance with edge caching and CDN integration',
      'Created intuitive UX for complex productivity workflows',
      'Built flexible component system allowing unlimited customization'
    ],
    innovationHighlights: [
      'Pioneered flexible workspace concept in productivity tools',
      'Implemented advanced drag-and-drop with snap-to-grid functionality',
      'Created custom component library for maximum flexibility',
      'Developed intelligent auto-save and conflict resolution'
    ],
    techStack: {
      frontend: ['Nuxt.js', 'Vue.js', 'PrimeVue', 'Pinia'],
      backend: ['Cloudflare Workers', 'Cloudflare D1'],
      storage: ['Cloudflare R2'],
      architecture: ['Serverless', 'Edge Computing']
    },
    gallery: [
      {
        url: 'https://i.ibb.co/hRV8cmYg/dev-tack-pad-pages-dev-home.png',
        caption: 'Home Page'
      },
      {
        url: 'https://i.ibb.co/HLCr0Hrw/dev-tack-pad-pages-dev-board-BOARD-JGI9-XQU2-YU.png',
        caption: 'Task management interface'
      },
    ]
  },
  'mockpros': {
    title: 'MOCKPROS',
    subtitle: 'AI-powered interview preparation platform',
    status: 'Live & Active',
    role: 'Founder & Lead Developer',
    overview: 'An intelligent mock interview platform that uses AI to provide personalized interview preparation with real-time feedback and performance analytics.',
    detailedDescription: 'MOCKPROS leverages cutting-edge AI technology to simulate realistic interview scenarios, providing users with comprehensive feedback on their performance. The platform analyzes speech patterns, confidence levels, and content quality to deliver actionable insights for improvement.',
    featuredImage: 'https://i.ibb.co/G3Vm4Pgv/mockpros-in-interview-resume-1.png',
    liveDemo: 'https://mockpros.in',
    timeline: '2024',
    teamSize: 'Solo Developer',
    keyFeatures: [
      'AI-driven interview simulations',
      'Real-time speech analysis and feedback',
      'Personalized improvement recommendations',
      'Industry-specific interview scenarios',
      'Comprehensive performance tracking',
      'Voice tone and confidence analysis',
      'Custom question banks',
      'Progress tracking and skill development'
    ],
    challengesSolved: [
      'Built real-time audio processing with minimal latency',
      'Developed sophisticated AI scoring algorithms',
      'Created scalable architecture for concurrent video sessions',
      'Implemented personalized learning paths based on performance data'
    ],
    innovationHighlights: [
      'Developed custom AI algorithms for interview assessment',
      'Implemented real-time speech-to-text processing',
      'Created adaptive questioning system based on user performance',
      'Built comprehensive analytics dashboard',
      'Integrated sentiment analysis for emotional intelligence feedback'
    ],
    businessImpact: [
      'Helping 1000+ job seekers improve interview skills',
      '85% user satisfaction rate with AI feedback accuracy',
      'Average 40% improvement in user confidence scores',
      'Reduced interview preparation time by 50%'
    ],
    techStack: {
      frontend: ['Vue.js', 'Vite'],
      backend: ['Django REST Framework'],
      database: ['PostgreSQL'],
      ai: ['Natural Language Processing APIs'],
      realtime: ['WebSocket', 'WebRTC']
    },
    gallery: [
      {
        url: 'https://i.ibb.co/PG6X2zBP/mockpros-in-interview-resume.png',
        caption: 'AI-powered interview simulation interface'
      },
    ]
  },
  'hyracorp': {
    title: 'HYRACORP',
    subtitle: 'Enterprise property management system',
    status: 'Live & Production',
    role: 'CTO & Lead Architect',
    overview: 'A comprehensive property management platform serving the Indian real estate market, streamlining rental processes from listing to lease management.',
    detailedDescription: 'HYRACORP is an enterprise-grade property management solution designed specifically for the Indian real estate market. The platform handles the complete lifecycle of property management, from initial listing to tenant management, rent collection, and maintenance tracking.',
    featuredImage: 'https://i.ibb.co/N66Q9C4f/hyracorp-com.png',
    liveDemo: 'https://hyracorp.com',
    timeline: '2024',
    teamSize: '4 Developers',
    keyFeatures: [
      'Multi-city property listings management',
      'Automated rental workflow',
      'Tenant screening and verification',
      'Financial reporting and analytics',
      'Mobile-responsive design',
      'Document management system',
      'Automated rent collection',
      'Maintenance request tracking'
    ],
    challengesSolved: [
      'Implemented advanced search and filtering for property discovery',
      'Created automated workflow engine for rental processes',
      'Developed comprehensive reporting system for property analytics'
    ],
    businessImpact: [
      'Manages 500+ properties across multiple Indian cities',
      'Reduced property management overhead by 60%',
      'Automated rental processes saving 15+ hours weekly',
      'Improved tenant satisfaction through streamlined communication',
      'Increased rent collection efficiency by 45%'
    ],
    techStack: {
      frontend: ['Nuxt.js', 'Vue.js', 'Tailwind CSS'],
      backend: ['Django REST Framework'],
      database: ['PostgreSQL'],
      payment: ['Multiple Gateway Integration'],
      storage: ['AWS S3'],
      deployment: ['Docker', 'AWS']
    },
    gallery: [
      {
        url: 'https://i.ibb.co/hFPhhJGz/2025-07-03-T17-13-52-054836517-05-30.png',
        caption: 'Property management dashboard'
      },

    ]
  },
  'gigglejobs': {
    title: 'GIGGLEJOBS',
    subtitle: 'Singapore-based workforce management platform',
    status: 'Ongoing Development',
    role: 'Frontend  Developer',
    overview: 'A Singapore-based platform revolutionizing daily wage employment in the hospitality sector, connecting hotels with qualified temporary staff.',
    detailedDescription: 'GIGGLEJOBS addresses the unique challenges of the Singapore hospitality industry by providing a sophisticated platform for managing temporary workforce. The system ensures compliance with local employment laws while providing seamless matching between employers and workers.',
    featuredImage: 'https://i.ibb.co/j9h9wGjz/2025-07-03-T17-19-44-759060155-05-30.png',
    liveDemo: 'https://gigglejobs.sg',
    timeline: '2024 - Present',
    teamSize: 'International Team',
    keyFeatures: [
      'Real-time job matching algorithm',
      'Automated scheduling and shift management',
      'Integrated payment processing',
      'Performance tracking and ratings',
      'Mobile-first design',
      'Multi-language support',
      'Skill-based job recommendations',
      'Instant notifications'
    ],
    challengesSolved: [
      'Handled Singapore employment law compliance',
      'Built offline-capable PWA for unreliable network conditions',
      'Implemented complex scheduling logic with conflict resolution',
      'Created multilingual interface for diverse workforce'
    ],
    innovationHighlights: [
      'Advanced state management with Pinia-Colada for offline functionality',
      'Implemented real-time job notifications',
      'Built complex scheduling interface with drag-and-drop',
      'Created comprehensive rating and review system'
    ],
    techStack: {
      frontend: ['Nuxt.js', 'PrimeVue', 'Pinia-Colada'],
      architecture: ['Progressive Web App (PWA)'],
      realtime: ['WebSocket'],
      mobile: ['Native app-like experience']
    },

  },
  'car-resale': {
     title: 'Car Resale Platform',
     subtitle: 'Innovative car marketplace solution',
     status: 'Under Development',
     role: 'Full Stack Developer',
     overview: 'Developing an innovative platform connecting car garages with potential buyers, streamlining the pre-owned vehicle marketplace.',
     detailedDescription: 'The Car Resale Platform is designed to revolutionize the pre-owned vehicle marketplace by creating a seamless connection between car garages and potential buyers. The platform features advanced search capabilities, real-time inventory management, and comprehensive vehicle history tracking to ensure transparency and trust in the car buying process.',
     featuredImage: 'https://i.ibb.co/NdhVF8NN/carsale-darkwebplayer-nuxt-dev.png',
     liveDemo: '#',
     timeline: '2024 - Present',
     teamSize: 'Solo Developer',
     keyFeatures: [
       'Advanced vehicle search with multiple filters',
       'Real-time inventory management for garages',
       'Vehicle history and inspection reports',
       'Integrated comparison tools',
       'Secure payment processing',
       'Appointment scheduling system',
       'Review and rating system',
       'Mobile-responsive design',
       'Multi-location garage support',
       'Automated pricing suggestions'
     ],
     challengesSolved: [
       'Implementing complex search algorithms with Elasticsearch',
       'Creating real-time inventory synchronization across multiple garages',
       'Developing advanced filtering system for vehicle specifications',
       'Building secure transaction processing workflow',
       'Designing scalable architecture for high-volume listings'
     ],
     innovationHighlights: [
       'Advanced Elasticsearch integration for lightning-fast search',
       'Real-time inventory updates with WebSocket connections',
       'Smart pricing algorithms based on market analysis',
       'Comprehensive vehicle comparison interface',
       'Automated garage management tools'
     ],
     businessImpact: [
       'Streamlining the pre-owned vehicle marketplace',
       'Reducing time-to-sale for car garages',
       'Improving buyer confidence through transparency',
       'Automating manual inventory management processes'
     ],
     techStack: {
       frontend: ['Vue.js', 'Nuxt.js', 'Tailwind CSS'],
       backend: ['Django REST Framework'],
       database: ['PostgreSQL'],
       search: ['Elasticsearch'],
       realtime: ['WebSocket', 'Redis'],
       storage: ['AWS S3'],
       deployment: ['Docker', 'AWS']
     },
     gallery: [
       {
         url: 'https://i.ibb.co/NdhVF8NN/carsale-darkwebplayer-nuxt-dev.png',
         caption: 'Car marketplace homepage with advanced search'
       },
       {
             url: 'https://i.ibb.co/gb4gxvHB/carsale-darkwebplayer-nuxt-dev-admin.png',
             caption: 'Car marketplace homepage with advanced search'
           },
           {
                 url: 'https://i.ibb.co/mCgn90zq/2025-07-03-T17-26-07-651756399-05-30.png',
                 caption: 'Car marketplace homepage with advanced search'
               }
     ]
   }
}

const project = projectsData[slug]

// Related projects (excluding current project)
const relatedProjects = Object.entries(projectsData)
  .filter(([key]) => key !== slug)
  .slice(0, 3)
  .map(([key, data]) => ({
    slug: key,
    title: data.title,
    subtitle: data.subtitle,
    description: data.overview,
    image: data.featuredImage,
    tags: Object.values(data.techStack).flat().slice(0, 4),
    status: data.status,
    link: data.liveDemo || '#'
  }))

// SEO
useHead({
  title: project ? `${project.title} - Amar Portfolio` : 'Project Not Found',
  meta: [
    { name: 'description', content: project?.overview || 'Project details not found' }
  ]
})

// Lightbox functionality
const openLightbox = (index) => {
  // In a real app, you'd implement a proper lightbox/modal
  console.log('Open lightbox for image:', index)
}

// Handle 404
if (!project) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project Not Found'
  })
}
</script>
