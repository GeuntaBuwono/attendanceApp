/**
 * @format
 */

import 'react-native'

import { render } from '@testing-library/react-native'
import { Icon } from 'Components/Icon/Icon'
import React from 'react'
// Note: test renderer must be required after react-native.

describe('Icon', () => {
  it('Render Correctly', async () => {
    const tree = render(<Icon name="bell" size={12} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
