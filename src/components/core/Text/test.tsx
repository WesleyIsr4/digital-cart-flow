import React from 'react'

import { render, screen } from 'utils/test'

import Text from './index'

describe('Text component', () => {
  test('renders correctly', () => {
    render(
      <Text fontSize="1rem" fontWeight={500} color="primaryBlue">
        Test
      </Text>
    )
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  test('renders with correct props', () => {
    render(
      <Text fontSize="1rem" fontWeight={500} color="scaleBlack">
        Test
      </Text>
    )
    const textElement = screen.getByText('Test')
    expect(textElement).toHaveStyle({ color: '#151516' })
  })

  test('renders the correct HTML tag', () => {
    render(
      <Text tag="h1" fontSize="1rem" fontWeight={500} color="scaleGray1">
        Test
      </Text>
    )
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })

  test('renders with accessibility attributes', () => {
    render(
      <Text fontSize="1rem" fontWeight={500} color="scaleGray3" role="text" ariaLabel="Test text">
        Test
      </Text>
    )
    const textElement = screen.getByText('Test')
    expect(textElement).toHaveAttribute('role', 'text')
    expect(textElement).toHaveAttribute('aria-label', 'Test text')
  })
})
