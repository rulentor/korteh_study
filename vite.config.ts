/// <reference types="vitest" />
import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import { VitePWA } from 'vite-plugin-pwa'
//import ViteComponents from 'vite-plugin-components'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
//import mkcert from 'vite-plugin-mkcert'
//import Unocss from 'unocss/vite'
import viteSSR from 'vite-ssr/plugin'
import getPageProps from './serverless/api/get-page-props'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    viteSSR(),  
/*
    {
      // API mock-up
      configureServer({ middlewares }) {
        middlewares.use('/api/get-page-props', getPageProps)
      },
    },
*/	
    Vue({
      reactivityTransform: true,
	  //include: [/\.vue$/],
    }),
    //mkcert(),
    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue'],
    }),
    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue/macros',
        'vue-router',
		'@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        './src/composables',
		'./src/stores',
      ],
      vueTemplate: true,
    }),
/*	
    ViteComponents({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue'],

      // allow auto import and register components used in markdown
      //customLoaderMatcher: id => id.endsWith('.md'),

      // auto import icons
      customComponentResolvers: [
        // https://github.com/antfu/vite-plugin-icons
        //ViteIconsResolver({
        //  componentPrefix: '',
          // enabledCollections: ['carbon']
        //}),
      ],
    }),
*/	
    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: 'src/components.d.ts',
	  deep: true,
	  directives: true,
	  include: [/\.vue$/, /\.vue\?vue/],
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
   // Unocss(),
    VitePWA({
      registerType: 'autoUpdate',
	  injectRegister: null,
      manifest: {
        /* */
      },	  
      workbox: {
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true,
        runtimeCaching: [],		
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
    })
  ],
  //server: { https: true },
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
    ],
    exclude: [
      'vue-demi',
    ],
  },
  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    //onFinished() { generateSitemap() },
  },
/*
  ssr: {
    // TODO: workaround until they support native ESM
    noExternal: ['workbox-window', /vue-i18n/],
  },
*/  
})
