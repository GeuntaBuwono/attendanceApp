interface AttendanceInterface {
  id: string
  imageUri: string
  store: string
  location: string
  date: Date
  schedule: {
    start: Date
    end: Date
  } | null
  clock: {
    in: Date | null
    out: Date | null
  }
}

interface UpcomingSchedule {
  month: Date
  data: Array<AttendanceInterface>
}
