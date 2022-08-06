import { Text } from 'react-native'
import styled from 'styled-components'
import Colors from 'Styles/colors'

import { LabelInterface, LabelStyleInterface, TextVariantType } from './Text.type'

const variantMapper: Record<TextVariantType, string> = {
  small: '10px',
  medium: '14px',
  large: '18px',
  'extra-large': '32px',
  super: '56px',
}

const TextStyled = styled(Text)<LabelStyleInterface>`
  color: ${({ color }) => color};
  font-size: ${(props) => variantMapper[props.sizeVariant ?? 'medium']};
`

const Label = ({ children, sizeVariant, restStyle, color = Colors.darkGrey }: LabelInterface) => {
  return (
    <TextStyled sizeVariant={sizeVariant} style={restStyle} color={color}>
      {children}
    </TextStyled>
  )
}

export default Label
