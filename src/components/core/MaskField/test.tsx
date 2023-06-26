import { act } from 'react-dom/test-utils'

import { fireEvent, render, screen } from 'utils/test'

import Maskfield from './index'

describe('<Maskfield />', () => {
  it('should render the default Maskfield condition', async () => {
    const ref = () => null

    render(
      <Maskfield ref={ref} data-testid="test-maskfield" label="Sem mascara" name="sem mascara" />
    )
    const element = screen.queryByTestId('test-maskfield')

    expect(element).toBeInTheDocument()

    await act(async () => {
      if (element) await fireEvent.change(element, { target: { value: '99999999999' } })
      expect(element).toHaveValue('99999999999')
    })
  })

  it('should render the Maskfield with phone mask condition', async () => {
    const ref = () => null

    render(
      <Maskfield ref={ref} data-testid="test-maskfield" name="phone" label="Phone" mask="phone" />
    )
    const element = screen.queryByTestId('test-maskfield')

    expect(element).toBeInTheDocument()

    await act(async () => {
      if (element) await fireEvent.change(element, { target: { value: '99999999999' } })
      expect(element).toHaveValue('(99) 99999-9999')
    })
  })

  it('should render the Maskfield with date mask condition', async () => {
    const ref = () => null

    render(
      <Maskfield ref={ref} data-testid="test-maskfield" name="date" label="date" mask="date" />
    )
    const element = screen.queryByTestId('test-maskfield')

    expect(element).toBeInTheDocument()

    await act(async () => {
      if (element) await fireEvent.change(element, { target: { value: '01012020' } })
      expect(element).toHaveValue('01/01/2020')
    })
  })

  it('should render the Maskfield with monthAndYear mask condition', async () => {
    const ref = () => null

    render(
      <Maskfield
        ref={ref}
        data-testid="test-maskfield"
        name="monthAndYear"
        label="monthAndYear"
        mask="monthAndYear"
      />
    )
    const element = screen.queryByTestId('test-maskfield')

    expect(element).toBeInTheDocument()

    await act(async () => {
      if (element) await fireEvent.change(element, { target: { value: '012020' } })
      expect(element).toHaveValue('01/2020')
    })
  })
})
