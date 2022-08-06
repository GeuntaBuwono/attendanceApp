export interface ButtonStyleInterface {
  color: 'topaz' | 'grey'
  padding?: string
}

export interface ButtonInterface extends ButtonStyleInterface {
  label: string
  onPress: () => void
}
