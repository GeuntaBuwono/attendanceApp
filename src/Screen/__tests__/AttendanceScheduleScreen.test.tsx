/**
 * @format
 */

import 'react-native'

import { render, waitFor } from '@testing-library/react-native'
import React from 'react'
import AttendanceScheduleScreen from 'Screen/AttendanceScheduleScreen'
// Note: test renderer must be required after react-native.

describe('AttendanceScheduleScreen', () => {
  it('render AttendanceScheduleScreen', async () => {
    const { getByTestId } = render(<AttendanceScheduleScreen />)
    await waitFor(() => getByTestId('attendanceContainerTestId'))
  })
})
