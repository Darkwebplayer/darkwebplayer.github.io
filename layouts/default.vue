<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
// Initialize dark mode support
useHead({
  htmlAttrs: {
    class: 'scroll-smooth'
  },
  script: [
    {
      innerHTML: `
        // Prevent flash of unstyled content
        (function() {
          const savedMode = localStorage.getItem('darkMode');
          const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (savedMode === 'true' || (savedMode === null && systemPrefersDark)) {
            document.documentElement.classList.add('dark');
          }
        })();
      `,
      type: 'text/javascript'
    }
  ]
})
</script>