/* eslint-disable react-native/no-inline-styles */
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Label from 'Components/Text/Text'
import { RootStackParamList } from 'Navigators/RootStackNavigator'
import React, { useLayoutEffect } from 'react'
import { View } from 'react-native'

type DetailAttendanceScheduleRouteProp = RouteProp<RootStackParamList, 'DetailAttendanceSchedule'>
type DetailAttendanceScheduleProps = NativeStackNavigationProp<
  RootStackParamList,
  'AttendanceSchedule'
>

const DetailAttendanceScheduleScreen = () => {
  const route = useRoute<DetailAttendanceScheduleRouteProp>()
  const navigation = useNavigation<DetailAttendanceScheduleProps>()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '17 April 2022',
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}
      >
        <Label restStyle={{ textAlign: 'center' }}>Detail Attendance Schedule</Label>
        <Label restStyle={{ textAlign: 'center' }}>{route.params.id}</Label>
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
