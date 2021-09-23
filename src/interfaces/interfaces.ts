export interface DokooClientOptions {
  spaceId: string
  token: string
}

export interface DokooModuleOptions {
  clients: {[key: string]: DokooClientOptions}
}
