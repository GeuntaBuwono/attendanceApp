/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from 'Navigators/RootStackNavigator'
import React from 'react'
import { Button, Text, View } from 'react-native'

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
          justifyContent: 'flex-end',
        }}
      >
        <Text style={{ textAlign: 'center' }}>Attendance Schedule</Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}
        >
          <Button
            onPress={() =>
              navigation.push('DetailAttendanceSchedule', {
                id: 'id__DetailAttendanceSchedule__1',
              })
            }
            title="Detail Attendance Schedule"
          />
        </View>
      </View>
    </>
  )
}

export default AttendanceScheduleScreen
