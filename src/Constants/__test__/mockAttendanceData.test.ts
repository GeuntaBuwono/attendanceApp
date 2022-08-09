import { mockAttendanceDataBuilder } from 'Constants/mockAttendanceData'
import * as dateFns from 'date-fns'

describe('Mock Attendance Data', () => {
  const { futureDateAttendanceList, todayDate } = mockAttendanceDataBuilder()

  test('has a future date', async () => {
    expect(futureDateAttendanceList).toBeTruthy()
  })

  test('has same Date', async () => {
    expect(dateFns.getDate(todayDate.date)).toBe(dateFns.getDate(new Date()))
  })
})
