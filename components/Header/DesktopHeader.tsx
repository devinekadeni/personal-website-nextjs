import { HeaderProps } from '.'
import { DesktopWrapper, Navigation, StyledBarMenu } from './Header.sc'

const Header:React.FC<HeaderProps> = ({
  handleScrollIntoView,
  refList: { aboutEl, skillsEl, contactEl } = {},
  isScrollDown = false,
  handleBarMenu = () => {},
  isDarkTheme = false,
}) => {
  const barMenuStyle = isScrollDown ? 'traverse-right' : 'traverse-left'

  return (
    <DesktopWrapper isDarkTheme={isDarkTheme}>
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

export default Header
