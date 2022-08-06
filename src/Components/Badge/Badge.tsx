/* eslint-disable react-native/no-inline-styles */
import Label from 'Components/Text/Text'
import { View } from 'react-native'
import styled from 'styled-components'
import Colors from 'Styles/colors'

import { BadgeColorType, BadgeInterface, BadgeStyleInterface } from './Badge.type'

const badgeColorMapper: Record<BadgeColorType, string> = {
  grey: Colors.silver,
  topaz: Colors.topaz,
  red: Colors.redPink,
}

const BadgeStyled = styled(View)<BadgeStyleInterface>`
  background-color: ${(props) => badgeColorMapper[props.color]};
  border-radius: 6px;
  padding: 5px 10px;
`

const Badge = (props: BadgeInterface) => {
  const { label, color } = props
  return (
    <BadgeStyled color={color}>
      <Label restStyle={{ color: Colors.white, textAlign: 'center', fontWeight: 'bold' }}>
        {label}
      </Label>
    </BadgeStyled>
  )
}

export default Badge
