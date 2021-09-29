interface CloudWatchEvent {
  version?: string
  id: string
  detailType?: string
  source: string
  account: string
  time: string
  region: string
  resources: string[]
  detail: object
}

export { CloudWatchEvent }