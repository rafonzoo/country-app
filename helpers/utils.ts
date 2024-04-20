export function getApiUrl(path: string, version = '2') {
  const endpoints = process.env.NEXT_PUBLIC_API_URL

  if (!endpoints) {
    throw new Error('Do you forget attach NEXT_PUBLIC_API_URL url in your env?')
  }

  return [endpoints, `v${version}`, path].join('/')
}
