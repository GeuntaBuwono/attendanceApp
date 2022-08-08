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
  background-color: ${(props) => badgeColorMapper[props.color]};
  border-radius: 6px;
  padding: ${(props) => badgeSizeMapper[props.size ?? 'medium']};
`

const Badge = (props: BadgeInterface) => {
  const { label, color, size } = props
  return (
    <BadgeStyled color={color} size={size}>
      <Label
        restStyle={{ color: Colors.white, textAlign: 'center', fontWeight: 'bold' }}
        sizeVariant="small"
      >
        {label}
      </Label>
    </BadgeStyled>
  )
}

export default Badge
