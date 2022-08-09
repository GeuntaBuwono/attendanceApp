/* eslint-disable react-native/no-inline-styles */
import Label from 'Components/Text/Text'
import { View } from 'react-native'
import styled from 'styled-components'
import Colors from 'Styles/colors'

import { BadgeColorType, BadgeInterface, BadgeSizeType, BadgeStyleInterface } from './Badge.type'

const badgeColorMapper: Record<BadgeColorType, string> = {
  grey: Colors.silver,
  topaz: Colors.topaz,
  red: Colors.redPink,
}
const badgeSizeMapper: Record<BadgeSizeType, string> = {
  small: '2px 8px',
  medium: '6px 12px',
  large: '6px 16px',
}

const BadgeStyled = styled(View)<BadgeStyleInterface>`
  padding: ${(props) => badgeSizeMapper[props.size ?? 'medium']};
  ${(props) => {
    if (props.variant === 'outline') {
      return {
        borderWidth: 1,
        borderColor: badgeColorMapper[props.color],
        borderRadius: 16,
      }
    } else {
      return {
        backgroundColor: badgeColorMapper[props.color],
        borderRadius: 6,
      }
    }
  }}
`

const Badge = (props: BadgeInterface) => {
  const { label, color, size, variant } = props
  return (
    <BadgeStyled color={color} size={size} variant={variant}>
      <Label
        restStyle={{
          color: variant === 'outline' ? Colors.redPink : Colors.white,
          textAlign: 'center',
          fontWeight: variant === 'outline' ? '500' : 'bold',
        }}
        sizeVariant="small"
      >
        {label}
      </Label>
    </BadgeStyled>
  )
}

export default Badge
