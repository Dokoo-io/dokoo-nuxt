import * as path from 'path'
import { Client } from '@dokoo/content-api'
import { Module } from '@nuxt/types'
import { DokooModuleOptions, DokooClientOptions } from './interfaces/interfaces'

declare module '@nuxt/types' {
  interface Configuration {
    dokoo?: DokooModuleOptions
  }

  interface Context {
    $dokoo: {[key: string]: Client}
  }
}

const dokooModule: Module<DokooModuleOptions> = function (moduleOptions: DokooModuleOptions) {
  const options = Object.assign({}, moduleOptions, this.options.dokoo || {})
  this.addPlugin({
    src: path.resolve(__dirname, '..', 'plugin.jst'),
    fileName: 'dokoo.js',
    options
  })
}

export {
  DokooModuleOptions,
  DokooClientOptions
}

export default dokooModule
