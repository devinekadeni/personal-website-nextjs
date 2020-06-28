import PropTypes from 'prop-types'
import { DesktopWrapper, Navigation, StyledBarMenu } from './Header.sc'

const Header = ({
  handleScrollIntoView = () => {},
  refList: { aboutEl, skillsEl, contactEl } = {},
  isScrollDown,
  handleBarMenu,
}) => {
  const barMenuStyle = isScrollDown ? 'traverse-right' : 'traverse-left'

  return (
    <DesktopWrapper>
      <h2>DE</h2>
      <Navigation>
        <button className={barMenuStyle} onClick={handleScrollIntoView(aboutEl)}>
          ABOUT
        </button>
        <button className={barMenuStyle} onClick={handleScrollIntoView(skillsEl)}>
          SKILLS
        </button>
        {/* TODO: Hide until the portfolio section ready */}
        {/* <button className={barMenuStyle}>WORKS</button> */}
        <button className={barMenuStyle} onClick={handleScrollIntoView(contactEl)}>
          CONTACT
        </button>
        {/* TODO: Hide until the translation function exist */}
        {/* <div className="language" ${barMenuStyle}`}>
          <span>EN</span>
          <div />
          <span>ID</span>
        </div> */}
      </Navigation>
      <StyledBarMenu onToggle={() => handleBarMenu(false)} isScrollDown={isScrollDown} />
    </DesktopWrapper>
  )
}

Header.defaultProps = {
  isMobile: false,
}

Header.propTypes = {
  handleScrollIntoView: PropTypes.func.isRequired,
  handleBarMenu: PropTypes.func.isRequired,
  refList: PropTypes.shape({
    aboutEl: PropTypes.object,
    skillsEl: PropTypes.object,
    contactEl: PropTypes.object,
  }).isRequired,
  isScrollDown: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool,
}

export default Header
