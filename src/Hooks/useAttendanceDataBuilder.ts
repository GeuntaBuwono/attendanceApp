import { useEffect } from 'react'
import { useMMKVObject } from 'react-native-mmkv'

import { mockAttendanceDataBuilder } from '../Constants/mockAttendanceData'
const { futureDateAttendanceList, todayDate } = mockAttendanceDataBuilder()

export const useAttendanceDataBuilder = () => {
  const [data, setData] = useMMKVObject<Array<AttendanceInterface>>('attendanceData')
  const [todaySchedule, setTodaySchedule] = useMMKVObject<AttendanceInterface>('todaySchedule')

  useEffect(() => {
    !data && setData(futureDateAttendanceList)
    !todaySchedule && setTodaySchedule(todayDate)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return {
    data,
    todaySchedule,
  }
}
