export interface ButtonStyleInterface {
  isDisabled?: boolean
  padding?: string
}

export interface ButtonInterface extends ButtonStyleInterface {
  label: string
  onPress: () => void
}
