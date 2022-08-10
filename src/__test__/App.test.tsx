import { render, waitFor } from '@testing-library/react-native'
import React from 'react'

import App from '../App'

describe('App', () => {
  it('renders app stack', async () => {
    const { getByTestId } = render(<App />)
    await waitFor(() => getByTestId('homepageScreenTestID'))
  })
})
