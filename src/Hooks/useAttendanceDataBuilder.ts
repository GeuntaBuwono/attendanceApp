import * as dateFns from 'date-fns'
import { useEffect } from 'react'
import { useMMKVObject } from 'react-native-mmkv'

import { mockAttendanceDataBuilder } from '../Constants/mockAttendanceData'
const { futureDateAttendanceList } = mockAttendanceDataBuilder()

export const useAttendanceDataBuilder = () => {
  const [data, setData] = useMMKVObject<Array<AttendanceInterface>>('attendanceData')

  useEffect(() => {
    !data && setData(futureDateAttendanceList)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const todaySchedule = data?.filter(
    (schedule) => dateFns.getDay(new Date(schedule.date)) === dateFns.getDay(new Date()),
  )[0]

  return {
    data,
    todaySchedule,
    setData,
  }
}
