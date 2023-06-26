import * as S from './styles'
import type * as T from './types'

function FieldInfo({ children, type = 'info', ...rest }: T.FieldInfo) {
  if (!children) return null

  return (
    <S.FieldInfo type={type} role={type === 'error' ? 'alert' : 'info'} {...rest}>
      {children}
    </S.FieldInfo>
  )
}

export default FieldInfo
