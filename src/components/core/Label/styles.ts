import styled, { css } from 'styled-components'

import type * as T from './types'

const modifiers = {
  scales: {
    small: () => css`
      font-size: 0.875rem;
    `,
    medium: () => css`
      font-size: 1.25rem;
    `,
    large: () => css`
      font-size: 1.3125rem;
      margin-top: 0.9375rem;
    `,
  },
}

export const Label = styled.label<T.Label>`
  color: ${({ theme, color = 'scaleGray4' }) => theme.colors[color]};
  text-align: ${({ align }) => align};
  font-weight: ${({ fontWeight }) => fontWeight ?? 'normal'};

  ${({ scale = 'medium' }) => scale && modifiers.scales[scale]()};
`
