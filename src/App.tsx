import { useAttendanceDataBuilder } from 'Hooks/useAttendanceDataBuilder'
import RootStackNavigator from 'Navigators/RootStackNavigator'
import React from 'react'
import { MMKV } from 'react-native-mmkv'
import { initializeMMKVFlipper } from 'react-native-mmkv-flipper-plugin'
const storage = new MMKV()

if (__DEV__) {
  initializeMMKVFlipper({ default: storage })
}

const App = () => {
  useAttendanceDataBuilder()
  return <RootStackNavigator />
}

export default App
