import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts, transformerVariantGroup } from 'unocss'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

export default defineConfig({
  shortcuts: {
    body: 'bg-dark text-white text-center font-sans size-full',
    icon: 'w-24 h-24 m-5',
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetWebFonts({
      fonts: {
        sans: 'Ubuntu',
      },
    }),
  ],
  transformers: [
    transformerAttributifyJsx(),
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      primary: '#d90429',
      secondary: '#ef233c',
      gray: '#8d99ae',
    },
  },
  preflights: [
    {
      getCSS: () => {
        return `
          html, body {
            width: 100vw;
            height: 100vh;
            margin: 0;
            padding: 0;
            display: flex;
          }
          
          #root {
            height: 100%;
            width: 100%;
          }
        `
      },
    },
  ],
})
