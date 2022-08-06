export type BadgeColorType = 'topaz' | 'grey' | 'red'

export interface BadgeStyleInterface {
  color: BadgeColorType
}
export interface BadgeInterface extends BadgeStyleInterface {
  label: string
}
