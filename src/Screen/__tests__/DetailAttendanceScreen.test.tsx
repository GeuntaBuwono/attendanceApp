/**
 * @format
 */

import 'react-native'

import { render, waitFor } from '@testing-library/react-native'
import React from 'react'
import DetailAttendanceScheduleScreen from 'Screen/DetailAttendanceScheduleScreen'
// Note: test renderer must be required after react-native.

describe('DetailAttendanceScheduleScreen', () => {
  it('render DetailAttendanceScheduleScreen', async () => {
    const { getByText } = render(<DetailAttendanceScheduleScreen />)
    await waitFor(() => {
      getByText('Store')
      getByText('Time Schedule')
      getByText('Clock In')
      getByText('Clock Out')
    })
  })
})
