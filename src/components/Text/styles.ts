import { styled } from 'styled-components'

import type * as T from './types'

export const Text = styled.span<T.TextBased>`
  font-size: ${({ fontSize }) => fontSize && fontSize};
  color: ${({ theme, color }) => color && theme.colors[color]};
  font-weight: ${({ fontWeight }) => fontWeight && fontWeight};
`
