import RootStackNavigator from 'Navigators/RootStackNavigator'
import React from 'react'
import { MMKV } from 'react-native-mmkv'
import { initializeMMKVFlipper } from 'react-native-mmkv-flipper-plugin'
import SplashScreen from 'react-native-splash-screen'
const storage = new MMKV()

if (__DEV__) {
  initializeMMKVFlipper({ default: storage })
}

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide()
  })
  return <RootStackNavigator />
}

export default App
