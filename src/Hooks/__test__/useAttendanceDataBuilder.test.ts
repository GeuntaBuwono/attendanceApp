import { useAttendanceDataBuilder } from 'Hooks/useAttendanceDataBuilder'

const mockedSetState = jest.fn()

jest.mock('Hooks/useAttendanceDataBuilder', () => ({
  useAttendanceDataBuilder: () => ({
    isLoading: false,
    setIsLoading: mockedSetState,
    setData: mockedSetState,
  }),
}))

describe('useAttendanceDataBuilder', () => {
  const { data, todaySchedule, isLoading } = useAttendanceDataBuilder()

  test('Check Data', async () => {
    expect(data).toBe(undefined)
  })

  test('Check todaySchedule', async () => {
    expect(todaySchedule).toBe(undefined)
  })

  test('Check isLoading', async () => {
    expect(isLoading).toBe(false)
  })
})
