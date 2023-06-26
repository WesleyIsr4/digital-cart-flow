import styled, { css } from 'styled-components'

import type * as T from './types'

const scales = {
  small: css`
    font-size: 0.875rem;
    height: calc(0.875rem * 1.5);
  `,
  medium: css`
    font-size: 1.125rem;
    height: calc(1.125rem * 1.5);
  `,
  large: css`
    font-size: 1.5rem;
    height: calc(1.5rem * 1.5);
  `,
}

export const Fieldset = styled.fieldset`
  position: relative;
  border: none;
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const Textfield = styled.input<T.InputStyle>`
  background: transparent;
  border: none;
  height: 50px;
  width: 100%;
  font-size: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.scaleGray1};
  color: ${({ theme }) => theme.colors.scaleGray4};
  display: block;
  position: relative;

  &:focus {
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.scaleGray1};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.scaleGray3};
  }

  ${({ scale = 'medium' }) => scale && scales[scale]}
`

export const LeftElement = styled.div``

export const RightElement = styled.div`
  position: absolute;
  right: 0;
  top: 25px;
`
