/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-var-requires */
import 'react-native-gesture-handler/jestSetup'

jest.mock('@react-navigation/native', () => ({
  useRoute: () => ({
    params: {
      id: '123123',
    },
  }),
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
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
