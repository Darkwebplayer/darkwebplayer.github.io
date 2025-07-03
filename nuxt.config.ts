export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@nuxt/image'
  ],
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700, 800, 900],
      'JetBrains Mono': [400, 500, 600]
    }
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: "Amar - Full Stack Developer & AI Enthusiast",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Full Stack Web Developer & AI Enthusiast from Kerala, India. Specializing in Vue.js, Nuxt.js, Django, and AI-powered applications.' },
        { name: 'color-scheme', content: 'light dark' }
      ]
    }
  },
  ssr:false,
  tailwindcss: {
    config: {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace']
          },
          colors: {
            primary: {
              50: '#f0f9ff',
              100: '#e0f2fe',
              200: '#bae6fd',
              300: '#7dd3fc',
              400: '#38bdf8',
              500: '#0ea5e9',
              600: '#0284c7',
              700: '#0369a1',
              800: '#075985',
              900: '#0c4a6e'
            },
            accent: {
              50: '#fdf4ff',
              100: '#fae8ff',
              200: '#f5d0fe',
              300: '#f0abfc',
              400: '#e879f9',
              500: '#d946ef',
              600: '#c026d3',
              700: '#a21caf',
              800: '#86198f',
              900: '#701a75'
            }
          },
          animation: {
            'fade-in': 'fadeIn 0.5s ease-in-out',
            'slide-up': 'slideUp 0.6s ease-out',
            'slide-in-left': 'slideInLeft 0.6s ease-out',
            'slide-in-right': 'slideInRight 0.6s ease-out',
            'bounce-slow': 'bounce 2s infinite',
            'pulse-slow': 'pulse 3s infinite'
          },
          keyframes: {
            fadeIn: {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' }
            },
            slideUp: {
              '0%': { opacity: '0', transform: 'translateY(30px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' }
            },
            slideInLeft: {
              '0%': { opacity: '0', transform: 'translateX(-30px)' },
              '100%': { opacity: '1', transform: 'translateX(0)' }
            },
            slideInRight: {
              '0%': { opacity: '0', transform: 'translateX(30px)' },
              '100%': { opacity: '1', transform: 'translateX(0)' }
            }
          }
        }
      }
    }
  }
})
