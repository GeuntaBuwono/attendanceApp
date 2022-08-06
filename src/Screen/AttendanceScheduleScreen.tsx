/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Button from 'Components/Button/Button'
import { RootStackParamList } from 'Navigators/RootStackNavigator'
import React from 'react'
import { View } from 'react-native'

type NavigationLoginScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'AttendanceSchedule'
>

const AttendanceScheduleScreen = () => {
  const navigation = useNavigation<NavigationLoginScreenProps>()

  return (
    <>
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            onPress={() => {
              navigation.push('DetailAttendanceSchedule', {
                id: 'id__DetailAttendanceSchedule__1',
              })
            }}
            label="Detail Attendance Schedule"
            color="topaz"
          />
        </View>
      </View>
    </>
  )
}

export default AttendanceScheduleScreen
