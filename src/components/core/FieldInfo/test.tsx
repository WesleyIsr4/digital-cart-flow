import { render, screen } from 'utils/test'

import FieldInfo from './index'

describe('<FieldInfo />', () => {
  it('Should match snapshot', () => {
    const { container } = render(<FieldInfo>I am an error</FieldInfo>)
    expect(container).toMatchSnapshot()
  })

  it('should render the default error condition', () => {
    render(<FieldInfo type="error">I am an error</FieldInfo>)
    expect(screen.queryByText('I am an error')).toBeInTheDocument()
    expect(screen.queryByText('I am an error')).toHaveStyle({ color: '#E50000' })
  })

  it('should render the warning condition', () => {
    render(<FieldInfo type="warning">I am a warning</FieldInfo>)
    expect(screen.queryByText('I am a warning')).toBeInTheDocument()
    expect(screen.queryByText('I am a warning')).toHaveStyle({ color: '#F9A006' })
  })
})
