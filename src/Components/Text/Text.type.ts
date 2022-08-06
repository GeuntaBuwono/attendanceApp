import { StyleProp, TextStyle } from 'react-native'

export type TextVariantType = 'small' | 'medium' | 'large' | 'extra-large' | 'super'

export interface LabelStyleInterface {
  sizeVariant?: TextVariantType
  color?: string
  restStyle?: StyleProp<TextStyle>
}

export interface LabelInterface extends LabelStyleInterface {
  children: string
}
