import { IconBaseProps } from 'react-icons'
import * as MdIcons from 'react-icons/md'
import { IconType } from 'react-icons'

type GenericIconProps = IconBaseProps & {
  iconName: keyof typeof MdIcons
}

function GenericIcon({ iconName, ...props }: GenericIconProps) {
  const IconComponent: IconType = MdIcons[iconName]

  if (!IconComponent) {
    return null
  }

  return <IconComponent {...props} />
}

export default GenericIcon
