/**
 * @format
 */

import 'react-native'

import { render } from '@testing-library/react-native'
import Button from 'Components/Button/Button'
import React from 'react'
// Note: test renderer must be required after react-native.

describe('Button', () => {
  it('Render Correctly', async () => {
    const press = jest.fn()
    const tree = render(<Button label="Button Test" onPress={() => press()} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
