/**
 * @format
 */

import 'react-native'

import { render, waitFor } from '@testing-library/react-native'
import React from 'react'
import HomepageScreen from 'Screen/HomepageScreen'
// Note: test renderer must be required after react-native.

describe('Homepage', () => {
  it('render HomepageScreen', async () => {
    const { getByText } = render(<HomepageScreen />)
    await waitFor(() => getByText('Homepage'))
  })
})
