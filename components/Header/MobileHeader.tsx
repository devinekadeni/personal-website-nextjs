import React, { useState } from 'react'
import { HeaderProps } from '.'
import {
  MobileWrapper,
  StyledBarMenuMobile,
  StyledSocialMedia,
  MenuWrapper,
} from './Header.sc'

const MobileHeader:React.FC<HeaderProps> = ({
  handleScrollIntoView,
  refList: { aboutEl, skillsEl, contactEl } = {},
  data
}) => {
  const [isMenuShown, setIsMenuShown] = useState(false)

  const handleSelectDirectory = (el?: React.Ref<HTMLElement>) => () => {
    setIsMenuShown(false)
    handleScrollIntoView(el)()
  }

  return (
    <MobileWrapper isMenuShown={isMenuShown}>
      <h2>DE</h2>
      <StyledBarMenuMobile
        isMenuBarForm={isMenuShown}
        onToggle={() => {
          setIsMenuShown(!isMenuShown)
        }}
      />
      <StyledSocialMedia isFloating hidden={!isMenuShown} data={data} />
      <MenuWrapper>
        <div>
          <button
            style={{ transition: 'opacity 0.7s' }}
            onClick={handleSelectDirectory(aboutEl)}
          >
            ABOUT
          </button>
          <button
            style={{ transition: 'opacity 0.7s 0.2s' }}
            onClick={handleSelectDirectory(skillsEl)}
          >
            SKILLS
          </button>
          {/* TODO: Hide until portfolio section ready */}
          {/* <button
            style={{ transition: 'opacity 0.7s 0.4s' }}
          >
            WORKS
          </button> */}
          <button
            style={{ transition: 'opacity 0.7s 0.6s' }}
            onClick={handleSelectDirectory(contactEl)}
          >
            CONTACT
          </button>
        </div>
        {/* TODO: Hide until translation function ready */}
        {/* <div
          style={{ transition: 'opacity 0.3s 0.3s' }}
          className={Styles.languageMenu}
        >
          <span>EN</span>
          <div />
          <span>ID</span>
        </div> */}
      </MenuWrapper>
    </MobileWrapper>
  )
}

export default MobileHeader
