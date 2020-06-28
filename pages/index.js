import Head from 'next/head'
import { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from 'components/Header'
import About from 'components/About'
import Skills from 'components/Skills'
import MessageForm from 'components/MessageForm'
import ContactMe from 'components/ContactMe'
import SocialMedia from 'components/SocialMedia'
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
  const [socmedShown, setSocmedShown] = useState(true)
  const [isScrollDown, setIsScrollDown] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const aboutEl = useRef(null)
  const skillsEl = useRef(null)
  const contactEl = useRef(null)
  let SCROLL_VAL =
    typeof window !== 'undefined' ? window.pageYOffset || document.body.scrollTop : 0

  useEffect(() => {
    const footer = document.querySelector('.footer-qs')

    hideFloatingSocmed(footer)
    window.addEventListener('scroll', () => {
      handleScroll()
      hideFloatingSocmed(footer)
    })

    return () => {
      window.removeEventListener('scroll', () => {
        handleScroll()
        hideFloatingSocmed(footer)
      })
    }
  }, [])

  const handleScroll = () => {
    // to handle changing header style (navbar - burger menu)
    if (SCROLL_VAL < window.pageYOffset) {
      setIsScrollDown(true)
    } else {
      setIsScrollDown(false)
    }
    SCROLL_VAL = window.pageYOffset
  }

  const hideFloatingSocmed = (footer) => {
    // move social media position into footer (reaching footer section)
    if (footer.getBoundingClientRect().bottom <= window.innerHeight) {
      setSocmedShown(false)
    } else {
      setSocmedShown(true)
    }

    // set dark theme for header (reaching message form section)
    if (contactEl.current.getBoundingClientRect().bottom < window.innerHeight) {
      setIsDarkTheme(true)
    } else {
      setIsDarkTheme(false)
    }
  }

  const handleScrollIntoView = (refElement) => () => {
    // to jump (scroll) into message form section
    refElement.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
    if ('name' in refElement.current) {
      setTimeout(() => {
        refElement.current.name.focus()
      }, 800)
    }
  }

  return (
    <>
      <Head>
        <title>Devin Ekadeni</title>
      </Head>
      <Wrapper>
        <div className="header-section">
          <Header
            handleScrollIntoView={handleScrollIntoView}
            refList={{ aboutEl, skillsEl, contactEl }}
            isScrollDown={isScrollDown}
            handleBarMenu={setIsScrollDown}
            isDarkTheme={isDarkTheme}
            isMobile={isMobile}
          />
        </div>
        <div className="content-section">
          <About
            ref={aboutEl}
            handleScrollIntoView={handleScrollIntoView(contactEl)}
            isMobile={isMobile}
          />
          <Skills ref={skillsEl} />
          <MessageForm ref={contactEl} />
          <ContactMe />
          {!isMobile && socmedShown && <SocialMedia isFloating />}
        </div>
      </Wrapper>
    </>
  )
}

export function getServerSideProps({ req }) {
  return { props: { isMobile: isMobile(req) } }
}

Index.defaultProps = {
  isMobile: false,
}

Index.propTypes = {
  isMobile: PropTypes.bool,
}

export default Index
