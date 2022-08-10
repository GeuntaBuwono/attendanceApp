interface ScheduleInterface {
  start: Date
  end: Date
}
interface ClockInterface {
  in: Date | null
  out: Date | null
}

interface AttendanceInterface {
  id: string
  imageUri: string
  store: string
  location: string
  date: Date
  schedule: ScheduleInterface | null
  clock: ClockInterface
}

interface UpcomingSchedule {
  month: Date
  data: Array<AttendanceInterface>
}
