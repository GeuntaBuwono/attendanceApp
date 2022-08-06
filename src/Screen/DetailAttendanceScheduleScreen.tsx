/* eslint-disable react-native/no-inline-styles */
import { RouteProp, useRoute } from '@react-navigation/native'
import { RootStackParamList } from 'Navigators/RootStackNavigator'
import React from 'react'
import { Text, View } from 'react-native'

type ActivityDetailImageRouteProp = RouteProp<RootStackParamList, 'DetailAttendanceSchedule'>

const DetailAttendanceScheduleScreen = () => {
  const route = useRoute<ActivityDetailImageRouteProp>()

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}
      >
        <Text style={{ textAlign: 'center' }}>Detail Attendance Schedule</Text>
        <Text style={{ textAlign: 'center' }}>{route.params.id}</Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}
        />
      </View>
    </>
  )
}

export default DetailAttendanceScheduleScreen
