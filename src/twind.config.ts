import { defineConfig } from '@twind/core'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        brand: '#7E43D9',
        brandDark: '#4B2B72',
        ink: '#171924',
        muted: '#5F5C67',
        paper: '#F7F8FA',
        hero: '#F6F1F5',
        lavender: '#E3D5F1',
        lavenderSoft: '#F4EFF8',
        line: '#E2DEE5',
        teal: '#0E7881',
      },
      fontFamily: {
        sans: ['Sora', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
})
