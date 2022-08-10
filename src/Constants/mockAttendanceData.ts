import { faker } from '@faker-js/faker'
import * as dateFns from 'date-fns'

const currentDate = dateFns.getDate(new Date())
// plus 1 because Date start from 0
const lastDayOfMonth = dateFns.getDate(dateFns.lastDayOfMonth(new Date())) + 1

const futureDateBuilder = () => {
  const futureDateAttendanceList: Array<AttendanceInterface> = []
  for (let i = currentDate; i < lastDayOfMonth; i++) {
    const INIT_ATTENDANCE_MOCK_DATA: AttendanceInterface = {
      id: faker.datatype.uuid(),
      date: dateFns.setDate(new Date(), i),
      store: faker.address.street(),
      imageUri: faker.image.business(),
      clock: {
        in: null,
        out: null,
      },
      location: faker.address.streetAddress(),
      schedule:
        i % 4
          ? {
              start: dateFns.set(new Date(), { date: i, hours: 8, minutes: 0 }),
              end: dateFns.set(new Date(), { date: i, hours: 17, minutes: 0 }),
            }
          : null,
    }
    futureDateAttendanceList.push(INIT_ATTENDANCE_MOCK_DATA)
  }

  return {
    futureDateAttendanceList,
  }
}

export const mockAttendanceDataBuilder = () => {
  const { futureDateAttendanceList } = futureDateBuilder()

  return {
    futureDateAttendanceList,
  }
}
