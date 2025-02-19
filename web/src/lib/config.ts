function isEnvVarDefined(name: string, value: unknown) {
  if (value === '') throw new Error(`Missing environment variable ${name}`)
}

function getEnvVar<T extends string>(name: T) {
  const value = import.meta.env[name] ?? ''
  isEnvVarDefined(name, value)
  return value
}

interface Config {
  appName: string
  thirdweb: { clientId: string }
}

export const config: Config = {
  appName: 'web-app-template',
  thirdweb: { clientId: getEnvVar('VITE_THIRDWEB_CLIENT_ID') },
}
