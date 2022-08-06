import { dateFormatter } from 'Utils/dateFormatter'

describe('Date Formatter', () => {
  const validDate = dateFormatter({
    date: new Date('2022-12-12T10:00:00+0700'),
    format: 'HH:MM',
  })

  test('valid date', async () => {
    expect(validDate).toBeTruthy()
  })

  test('with custom format', async () => {
    expect(validDate).toBe('10:12')
  })
})
