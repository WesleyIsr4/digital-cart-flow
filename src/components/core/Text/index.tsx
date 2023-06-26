import type * as T from './types'
import * as S from './styles'

function Text({
  tag = 'p',
  role,
  ariaLabel,
  overline,
  children,
  fontSize,
  color,
  fontWeight,
}: T.Text) {
  return (
    <S.Text
      as={tag}
      role={role}
      aria-label={ariaLabel}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      // underline={underline}
      overline={overline}
    >
      {children}
    </S.Text>
  )
}

export default Text
