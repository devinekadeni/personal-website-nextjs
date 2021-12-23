import Head from 'next/head'
import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Header from 'components/Header'
import About from 'components/About'
import Skills from 'components/Skills'
import MessageForm from 'components/MessageForm'
import ContactMe from 'components/ContactMe'
import SocialMedia from 'components/SocialMedia'

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

type SingleMedia = {
  data: {
    attributes: {
      url: string
    }
  }
}

export type Skill = {
  id: number
  attributes: {
    name: string
    logo: SingleMedia
  }
}

export type SocialMediaCode = 'GITHUB' | 'LINKEDIN' | 'FACEBOOK' | 'INSTAGRAM'

export type SocialMediaProps = {
  id: number
  attributes: {
    code: SocialMediaCode
    name: string
    url: string
  }
}

export type ContactData = {
  attributes: {
    name: string
    profilePhoto: SingleMedia
    email: string
    phoneNumber: string
    socialMedias: { data: SocialMediaProps[] }
  }
}

type Props = {
  isMobile: boolean
  skillRes: Skill[]
  contactRes: ContactData
}

const Index: React.FC<Props> = ({ isMobile, skillRes, contactRes }) => {
  const [socmedShown, setSocmedShown] = useState(true)
  const [isScrollDown, setIsScrollDown] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const aboutEl = useRef(null)
  const skillsEl = useRef(null)
  const contactEl = useRef<HTMLFormElement>(null)
  let SCROLL_VAL =
    typeof window !== 'undefined' ? window.pageYOffset || document.body.scrollTop : 0

  useEffect(() => {
    const footer = document.querySelector('.footer-qs') as HTMLDivElement

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

  const hideFloatingSocmed = (footer: HTMLDivElement) => {
    // move social media position into footer (reaching footer section)
    if (footer.getBoundingClientRect().bottom <= window.innerHeight) {
      setSocmedShown(false)
    } else {
      setSocmedShown(true)
    }

    // set dark theme for header (reaching message form section)
    if ((contactEl?.current?.getBoundingClientRect()?.bottom || 0) < window.innerHeight) {
      setIsDarkTheme(true)
    } else {
      setIsDarkTheme(false)
    }
  }

  const handleScrollIntoView = (
    refElement: typeof aboutEl | typeof skillsEl | typeof contactEl
  ) => () => {
    // to jump (scroll) into message form section
    refElement?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
    if ('name' in (refElement?.current || {})) {
      const target = refElement?.current as typeof refElement.current & {
        name: HTMLInputElement
      }
      setTimeout(() => {
        target.name?.focus()
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
            data={contactRes.attributes?.socialMedias?.data}
          />
        </div>
        <div className="content-section">
          <About
            ref={aboutEl}
            handleScrollIntoView={handleScrollIntoView(contactEl)}
            data={{
              linkedinUrl:
                contactRes.attributes?.socialMedias?.data?.find(
                  ({ attributes }: { attributes: any }) => attributes.code === 'LINKEDIN'
                )?.attributes?.url || '',
              profilePhoto: contactRes.attributes?.profilePhoto?.data?.attributes?.url,
              name: contactRes.attributes?.name,
            }}
          />
          <Skills ref={skillsEl} data={skillRes} />
          <MessageForm ref={contactEl} />
          <ContactMe
            email={contactRes.attributes?.email}
            phoneNumber={contactRes.attributes?.phoneNumber}
            socialMedia={contactRes.attributes?.socialMedias?.data}
          />
          {!isMobile && socmedShown && (
            <SocialMedia isFloating data={contactRes.attributes?.socialMedias?.data} />
          )}
        </div>
      </Wrapper>
    </>
  )
}

export async function getStaticProps() {
  try {
    const resPromises = await Promise.all([
      axios.get(`${process.env.API_HOST}/api/contact?populate=*`),
      axios.get(`${process.env.API_HOST}/api/tech-stacks?populate=*`),
    ])

    const [{ data: contactRes }, { data: skillRes }] = resPromises

    return {
      props: {
        contactRes: contactRes.data,
        skillRes: skillRes.data,
      },
      revalidate: 120,
    }
  } catch (error) {
    return {
      props: {
        contactRes: {
          attributes: {
            socialMedias: { data: [] },
          },
        },
        skillRes: [],
      },
    }
  }
}

export default Index
