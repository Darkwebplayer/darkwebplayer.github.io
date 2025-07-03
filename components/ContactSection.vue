<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
    <!-- Contact Info -->
    <div class="space-y-8">
      <div>
        <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Get In Touch</h3>
        <p class="text-gray-600 dark:text-gray-300 mb-8">
          I'm currently available for freelance projects and consulting opportunities. Whether you need a full-stack web application, AI integration, or technical leadership for your team, I'm here to help bring your ideas to life.
        </p>
      </div>

      <!-- Contact Methods -->
      <div class="space-y-6">
        <div
          v-for="contact in contactMethods"
          :key="contact.type"
          class="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
        >
          <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
            <component :is="contact.icon" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
          </div>
          <div>
            <p class="font-medium text-gray-900 dark:text-gray-100">{{ contact.label }}</p>
            <a
              :href="contact.href"
              class="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300"
            >
              {{ contact.value }}
            </a>
          </div>
        </div>
      </div>

      <!-- Areas of Expertise -->
      <div>
        <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-4">Areas of Expertise:</h4>
        <ul class="space-y-2">
          <li
            v-for="area in expertiseAreas"
            :key="area"
            class="flex items-center space-x-2"
          >
            <CheckCircle class="w-4 h-4 text-primary-500" />
            <span class="text-gray-600 dark:text-gray-300">{{ area }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Contact Form -->
    <div class="card p-8">
      <form @submit.prevent="submitForm" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Name *
            </label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
              placeholder="Your name"
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email *
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Subject *
          </label>
          <input
            id="subject"
            v-model="form.subject"
            type="text"
            required
            class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
            placeholder="Project discussion"
          />
        </div>

        <div>
          <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            v-model="form.message"
            rows="5"
            required
            class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300 resize-none"
            placeholder="Tell me about your project..."
          ></textarea>
        </div>

        <button
          type="submit"
          :disabled="isSubmitting"
          class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="!isSubmitting">Send Message</span>
          <span v-else class="flex items-center justify-center space-x-2">
            <div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Sending...</span>
          </span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { Mail, Phone, MapPin, Globe, CheckCircle } from 'lucide-vue-next'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const contactMethods = [
  {
    type: 'email',
    label: 'Email',
    value: 'amrithanadhm@gmail.com',
    href: 'mailto:amrithanadhm@gmail.com',
    icon: Mail
  },
  {
    type: 'phone',
    label: 'Phone',
    value: '+91 8589878253',
    href: 'tel:+918589878253',
    icon: Phone
  },
  {
    type: 'portfolio',
    label: 'Portfolio',
    value: 'darkwebplayer.github.io',
    href: 'https://darkwebplayer.github.io',
    icon: Globe
  }
]

const expertiseAreas = [
  'Full-stack web application development',
  'AI-powered platform development',
  'Enterprise system architecture',
  'Team leadership and technical mentoring',
  'International project collaboration'
]

const submitForm = async () => {
  isSubmitting.value = true

  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 2000))

  // Create mailto link with form data
  const subject = encodeURIComponent(form.value.subject)
  const body = encodeURIComponent(`Name: ${form.value.name}\nEmail: ${form.value.email}\n\nMessage:\n${form.value.message}`)
  const mailtoLink = `mailto:amrithanadhm@gmail.com?subject=${subject}&body=${body}`

  window.location.href = mailtoLink

  // Reset form
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  isSubmitting.value = false
}
</script>
