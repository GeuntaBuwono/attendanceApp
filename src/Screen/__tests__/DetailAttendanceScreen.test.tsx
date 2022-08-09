/**
 * @format
 */

import 'react-native'

import { render, waitFor } from '@testing-library/react-native'
import React from 'react'
import DetailAttendanceScheduleScreen from 'Screen/DetailAttendanceScheduleScreen'
jest.mock('@react-navigation/core')
// Note: test renderer must be required after react-native.

describe('DetailAttendanceScheduleScreen', () => {
  it('render DetailAttendanceScheduleScreen without params ID', async () => {
    const { getByText } = render(<DetailAttendanceScheduleScreen />)
    await waitFor(() => {
      getByText('No Schedule')
    })
  })
})
