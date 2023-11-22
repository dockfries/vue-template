import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  content: {
    pipeline: {
      include: /\.(vue|scss|tsx)$/,
      exclude: ['.git', '.husky', '.vscode', 'dist', 'public'],
    },
  },
  presets: [presetUno(), presetAttributify(), presetIcons()],
  transformers: [transformerDirectives()],
  shortcuts: {
    'f-center': 'flex justify-center items-center',
  },
  theme: {
    colors: {
      primary: {
        700: '#0052D9',
      },
      success: {
        700: '#027A48',
      },
      warning: {
        500: '#F79009',
      },
      error: {
        700: '#B42318',
      },
      gray: {
        700: '#344054',
      },
    },
  },
})
