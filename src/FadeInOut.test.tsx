import React from 'react'
import { render, screen } from '@testing-library/react'
import {FadeInOut} from './FadeInOut'
import userEvent from '@testing-library/user-event';

import { config } from 'react-transition-group'

config.disabled = true

test('fade in', async () => {
  render(<FadeInOut />)
  const button = await screen.findByTestId('button')
  expect(button).toBeInTheDocument()

  expect(screen.queryByTestId('content')).toBeNull()

  userEvent.click(button)

  expect(screen.queryByTestId('content')).toBeVisible()
});
