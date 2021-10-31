import { SocialMediaItem } from 'components/SocialMedia'
import React from 'react'

import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'

export type HeaderProps = {
  handleScrollIntoView: (el?: React.Ref<HTMLDivElement>) => () => void
  refList: {
    aboutEl: React.Ref<HTMLDivElement>
    skillsEl: React.Ref<HTMLDivElement>
    contactEl: React.Ref<HTMLDivElement>
  }
  isScrollDown?: boolean
  handleBarMenu?: (isShown: boolean) => void
  isDarkTheme?: boolean
  data: SocialMediaItem[]
}

type Props = {
  isMobile: boolean
} & HeaderProps

const Header:React.FC<Props> = ({ isMobile, ...props }) => {
  return isMobile ? <MobileHeader {...props} /> : <DesktopHeader {...props} />
}

export default Header
