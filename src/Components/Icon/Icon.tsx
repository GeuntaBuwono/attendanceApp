import { faBell, faClock } from '@fortawesome/free-regular-svg-icons'
import { faBarcode, faLeftLong, faRefresh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Colors from 'Styles/colors'

import { IconInterface, IconType } from './Icon.type'

export const Icon = ({ name, color, size }: IconInterface) => {
  const baseIconProps = {
    color: color || Colors.darkGrey,
    size: size || 24,
  }

  const iconName: Record<IconType, JSX.Element> = {
    arrowLeft: <FontAwesomeIcon icon={faLeftLong} {...baseIconProps} />,
    barcode: <FontAwesomeIcon icon={faBarcode} {...baseIconProps} />,
    bell: <FontAwesomeIcon icon={faBell} {...baseIconProps} />,
    clock: <FontAwesomeIcon icon={faClock} {...baseIconProps} />,
    refresh: <FontAwesomeIcon icon={faRefresh} {...baseIconProps} />,
  }

  return iconName[name]
}
