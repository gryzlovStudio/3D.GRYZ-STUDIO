const basePath = process.env.NODE_ENV === 'production' ? '/3D.GRYZ-STUDIO' : ''

export function getAssetPath(path: string): string {
  return `${basePath}${path}`
}
