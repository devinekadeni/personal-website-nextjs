import { useState } from 'react'
import PropTypes from 'prop-types'
import {
  MobileWrapper,
  StyledBarMenuMobile,
  StyledSocialMedia,
  MenuWrapper,
} from './Header.sc'

const MobileHeader = ({
  handleScrollIntoView,
  refList: { aboutEl, skillsEl, contactEl } = {},
}) => {
  const [isMenuShown, setIsMenuShown] = useState(false)

  const handleSelectDirectory = (el) => () => {
    setIsMenuShown(false)
    handleScrollIntoView(el)()
  }

  return (
    <MobileWrapper isMenuShown={isMenuShown}>
      <h2>DE</h2>
      <StyledBarMenuMobile
        isMenuBarForm={isMenuShown}
        onToggle={() => setIsMenuShown(!isMenuShown)}
      />
      <StyledSocialMedia isFloating hidden={!isMenuShown} />
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

MobileHeader.propTypes = {
  handleScrollIntoView: PropTypes.func.isRequired,
  refList: PropTypes.shape({
    aboutEl: PropTypes.node,
    skillsEl: PropTypes.node,
    contactEl: PropTypes.node,
  }),
}

export default MobileHeader
