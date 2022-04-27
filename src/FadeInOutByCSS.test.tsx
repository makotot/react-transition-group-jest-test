import React from 'react'
import { act, render, screen, waitFor } from '@testing-library/react'
import { FadeInOutByCSS } from './FadeInOutByCSS'
import userEvent from '@testing-library/user-event'

import { config } from 'react-transition-group'

describe('config.disabled true', () => {
  beforeAll(() => {
    config.disabled = true
  })
  afterAll(() => {
    config.disabled = false
  })

  it('should fade in', async () => {
    render(<FadeInOutByCSS />)
    const button = await screen.findByTestId('button')
    expect(button).toBeInTheDocument()

    expect(screen.queryByTestId('content')).not.toBeInTheDocument()

    userEvent.click(button)

    expect(config.disabled).toBe(true)
    expect(screen.queryByTestId('content')).toBeVisible()
  })
})

describe('jest fakeTimers', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })
  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })

  it('should fade in', async () => {
    render(<FadeInOutByCSS />)
    const button = await screen.findByTestId('button')
    expect(button).toBeInTheDocument()

    expect(screen.queryByTestId('content')).not.toBeInTheDocument()

    userEvent.click(button)
    act(() => {
      jest.advanceTimersByTime(1000)
    })

    expect(config.disabled).toBe(false)
    await waitFor(() => {
      expect(screen.queryByTestId('content')).toBeVisible()
    })
  })
})
