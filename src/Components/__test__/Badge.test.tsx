/**
 * @format
 */

import 'react-native'

import { render } from '@testing-library/react-native'
import Badge from 'Components/Badge/Badge'
import React from 'react'
// Note: test renderer must be required after react-native.

describe('Badge', () => {
  it('Render Correctly', async () => {
    const tree = render(<Badge label="Badge Test" color="red" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
