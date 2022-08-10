/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-var-requires */
import 'react-native-gesture-handler/jestSetup'

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useRoute: () => {
    return {
      params: {
        id: '123',
      },
    }
  },
  useNavigation: () => {
    return { navigate: jest.fn(), setOptions: jest.fn(), push: jest.fn() }
  },
}))

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock')

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {}

  return Reanimated
})

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}))

jest.mock('react-native-mmkv-flipper-plugin', () => {
  return {
    initializeMMKVFlipper: jest.fn(),
  }
})
