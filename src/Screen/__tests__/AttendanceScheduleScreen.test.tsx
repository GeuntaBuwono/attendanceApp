/**
 * @format
 */

import 'react-native'

import { render, waitFor } from '@testing-library/react-native'
import React from 'react'
import AttendanceScheduleScreen from 'Screen/AttendanceScheduleScreen'
// Note: test renderer must be required after react-native.

describe('AttendanceScheduleScreen', () => {
  it('render AttendanceScheduleScreenScreen', async () => {
    const { getByText } = render(<AttendanceScheduleScreen />)
    await waitFor(() => getByText('Attendance Schedule'))
  })
})
