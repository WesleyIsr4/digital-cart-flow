import styled, { DefaultTheme, css } from 'styled-components'

import type * as T from './types'

const modifiers = {
  variant: {
    primary: (theme: DefaultTheme) => css`
      background: ${theme.colors.primaryBlue};
      color: ${theme.colors.primaryWhite};
    `,
    secondary: (theme: DefaultTheme) => css`
      background: ${theme.colors.secondary};
      color: ${theme.colors.primaryWhite};
    `,
    tertiary: (theme: DefaultTheme) => css`
      background: ${theme.colors.tertiary};
      color: ${theme.colors.tertiaryText};
    `,
  },
  size: {
    small: () => css`
      padding: 0.25rem 0.5rem;
      font-size: 0.75rem;
    `,
    medium: () => css`
      padding: 0.5rem 1rem;
      font-size: 1rem;
    `,
    large: () => css`
      padding: 0.75rem 1.5rem;
      font-size: 1.25rem;
    `,
  },
  noBackground: () => css`
    background-color: transparent;
    border: 1px solid;
  `,
}

export const StyledButton = styled.button<T.Button>`
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  white-space: nowrap;
  height: 3.5rem;
  font-size: 1.125rem;
  padding: 0.8125rem 1.5rem;
  border: none;
  border-radius: 1.5625rem;

  ${({ size = 'medium' }) => modifiers.size[size]}
  ${({ theme, variant }) => variant && modifiers.variant[variant](theme)}
`
