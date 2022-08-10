import * as dateFns from 'date-fns'
import { useEffect, useState } from 'react'
import { useMMKVObject } from 'react-native-mmkv'

import { mockAttendanceDataBuilder } from '../Constants/mockAttendanceData'
const { futureDateAttendanceList } = mockAttendanceDataBuilder()

export const useAttendanceDataBuilder = () => {
  const [data, setData] = useMMKVObject<Array<AttendanceInterface>>('attendanceData')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeoutDataBuilder = setTimeout(() => {
      if (isLoading) {
        !data && setData(futureDateAttendanceList)
        setIsLoading(false)
      }
    }, 500)

    return () => {
      clearTimeout(timeoutDataBuilder)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])
  const todaySchedule = data?.filter(
    (schedule) => dateFns.getDay(new Date(schedule.date)) === dateFns.getDay(new Date()),
  )[0]

  return {
    data,
    todaySchedule,
    setData,
    isLoading,
    setIsLoading,
  }
}
