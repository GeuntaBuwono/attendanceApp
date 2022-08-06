export type IconType = 'clock' | 'bell' | 'refresh' | 'arrowLeft' | 'barcode'

export interface IconInterface {
  name: IconType
  size?: number
  color?: string
}
