import * as S from './styles'
import type * as T from './types'

function Label({ children, ...rest }: T.Label) {
  if (!children) return null

  return <S.Label {...rest}>{children}</S.Label>
}

export default Label
