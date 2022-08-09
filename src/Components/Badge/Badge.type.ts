export type BadgeColorType = 'topaz' | 'grey' | 'red'
export type BadgeSizeType = 'small' | 'medium' | 'large'

export interface BadgeStyleInterface {
  color: BadgeColorType
  size?: BadgeSizeType
  variant?: 'capsule' | 'outline'
}
export interface BadgeInterface extends BadgeStyleInterface {
  label: string
}
