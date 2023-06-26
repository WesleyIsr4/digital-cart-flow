// Importando React, React Testing Library e Jest
import React from 'react'

import { render, fireEvent } from 'utils/test'

import '@testing-library/jest-dom/extend-expect'
import Select from './index'

const options = [
  { value: 'option1', label: 'Opção 1' },
  { value: 'option2', label: 'Opção 2' },
  { value: 'option3', label: 'Opção 3' },
]

const mockCallback = jest.fn((selected) => selected)

describe('Select Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Select
        name="teste"
        required
        options={options}
        onSelectChange={mockCallback}
        label="Selecione uma opção"
        placeholder="Selecione..."
      />
    )
    expect(getByText('Selecione uma opção')).toBeInTheDocument()
  })

  it('displays options correctly', () => {
    const { getByText } = render(
      <Select
        name="teste"
        required
        options={options}
        onSelectChange={mockCallback}
        label="Selecione uma opção"
        placeholder="Selecione..."
      />
    )
    expect(getByText('Opção 1')).toBeInTheDocument()
    expect(getByText('Opção 2')).toBeInTheDocument()
    expect(getByText('Opção 3')).toBeInTheDocument()
  })

  it('calls onSelectChange with correct value when option selected', () => {
    const { getByRole } = render(
      <Select
        required
        name="teste"
        options={options}
        onSelectChange={mockCallback}
        label="Selecione uma opção"
        placeholder="Selecione..."
      />
    )
    fireEvent.change(getByRole('combobox'), { target: { value: 'option2' } })
    expect(mockCallback).toHaveBeenCalledWith('option2')
  })
})
