import { Fragment } from 'react'

import * as S from './styles'
import type * as T from './types'

function Button({
  size = 'medium',
  variant = 'primary',
  leftElement,
  rightElement,
  noBackground = false,
  children,
  onClick,
}: T.Button) {
  return (
    <Fragment>
      {leftElement}
      <S.StyledButton size={size} variant={variant} noBackground={noBackground} onClick={onClick}>
        {children}
      </S.StyledButton>
      {rightElement}
    </Fragment>
  )
}

export default Button
