/* eslint-disable react-native/no-inline-styles */
import Label from 'Components/Text/Text'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import Colors from 'Styles/colors'

import { ButtonInterface, ButtonStyleInterface } from './Button.type'

const ButtonStyled = styled(TouchableOpacity)<ButtonStyleInterface>`
  background-color: ${(props) => (props.isDisabled ? Colors.silver : Colors.topaz)};
  border-radius: 6px;
  padding: ${(props) => props.padding};
`

const Button = ({ label, onPress, isDisabled, padding }: ButtonInterface) => (
  <ButtonStyled
    onPress={onPress}
    isDisabled={isDisabled}
    padding={padding ?? '12px'}
    disabled={isDisabled}
  >
    <Label restStyle={{ color: Colors.white, textAlign: 'center' }}>{label}</Label>
  </ButtonStyled>
)

export default Button
