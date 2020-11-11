import { join, relative, resolve } from 'path'
export const rootPath = resolve('.')
export const srcPath = join(rootPath, 'src')
export const backendPath = join(rootPath, 'backend')
export const apiPath = join(backendPath, 'api')
export const docPath = join(backendPath, 'doc')
export const dataPath = join(backendPath, 'data')
export const sharedPath = join(backendPath, 'shared')
export const faviconPath = join(sharedPath, 'favicon.ico')
export const path = { join, relative, resolve }

export function relativeToApi(...parameters) {
  return `./${join(relative(rootPath, apiPath), ...parameters)}`
}
export function relativeToBackend(...parameters) {
  return `./${join(relative(rootPath, backendPath), ...parameters)}`
}

export const defaultPort = {
  api: 3000,
}
