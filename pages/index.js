import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from 'components/Header'
import isMobile from 'utils/isMobile'

const Wrapper = styled.div`
  position: relative;

  .header-section {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
  }

  .content-section {
    margin-top: 108px;
  }
`

const Index = ({ isMobile }) => {
  return (
    <Wrapper>
      <div className="header-section">
        <Header
          // handleScrollIntoView={handleScrollIntoView}
          // refList={{ aboutEl, skillsEl, contactEl }}
          // isScrollDown={isScrollDown}
          // handleBarMenu={setIsScrollDown}
          // isDarkTheme={isDarkTheme}
          isMobile={isMobile}
        />
      </div>
      <div className="content-section"></div>
    </Wrapper>
  )
}

export function getServerSideProps({ req }) {
  return { props: { isMobile: isMobile(req) } }
}

Index.propTypes = {
  isMobile: PropTypes.bool,
}

export default Index
