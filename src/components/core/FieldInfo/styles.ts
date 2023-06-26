import styled from 'styled-components'

import type * as T from './types'

const getColorByType = (type: string) => {
  switch (type) {
    case 'warning':
      return 'warningBase'
    case 'error':
      return 'negativeBase'
    default:
      return 'neutralBase'
  }
}

export const FieldInfo = styled.span<T.FieldInfo>`
  position: absolute;
  font-size: 14px;

  color: ${({ theme, type = 'info' }) => theme.colors[getColorByType(type)]};
  top: 100%;

  margin-top: ${({ marginTopInfo }) => marginTopInfo};
`
