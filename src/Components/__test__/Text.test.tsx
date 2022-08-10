/**
 * @format
 */

import 'react-native'

import { render } from '@testing-library/react-native'
import Label from 'Components/Text/Text'
import React from 'react'
// Note: test renderer must be required after react-native.

describe('Label', () => {
  it('Render Correctly', async () => {
    const tree = render(<Label>Label Test</Label>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
