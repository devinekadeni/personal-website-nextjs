import { forwardRef } from 'react'
import styled from 'styled-components'

import Button from 'components/Button'

const Wrapper = styled.div`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-family: 'Titillium Web';

  @media screen and (min-width: 480px) {
    padding: 0 44px 0 104px;
    flex-direction: row;
    align-items: center;
  }

  @media screen and (min-width: 1000px) {
    padding: 44px 44px 0 104px;
  }

  @media screen and (min-width: 1200px) {
    padding: 96px 144px 0 130px;
  }
`

const LeftSection = styled.div`
  order: 1;
  margin: 0;

  @media screen and (min-width: 480px) {
    order: unset;
    margin: 0;
  }

  @media screen and (min-width: 1200px) {
    margin-right: 117px;
  }

  h5 {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: rgba(49, 53, 59, 0.68);

    @media screen and (min-width: 480px) {
      font-size: 16px;
    }

    @media screen and (min-width: 1000px) {
      font-size: 18px;
    }

    @media screen and (min-width: 1200px) {
      font-size: 20px;
    }
  }

  h1 {
    font-family: 'Rajdhani';
    font-size: 32px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: rgba(49, 53, 59, 0.96);

    @media screen and (min-width: 1000px) {
      font-size: 42px;
    }

    @media screen and (min-width: 1200px) {
      font-size: 64px;
    }

    span {
      color: #09b0ba;
    }
  }

  p {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: rgba(49, 53, 59, 0.68);
    margin-bottom: 24px;
    max-width: 532px;

    @media screen and (min-width: 1000px) {
      font-size: 16px;
    }

    @media screen and (min-width: 1200px) {
      font-size: 18px;
    }

    a {
      color: #09b0ba;
      font-weight: bold;
      text-decoration: none;
      cursor: pointer;
      transition: opacity 0.4s;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`

const RightSection = styled.div`
  position: relative;
  align-self: flex-end;
  height: auto;

  @media screen and (min-width: 1200px) {
    align-self: initial;
    height: 400px;
  }

  @media screen and (min-width: 1000px) {
    height: 320px;
  }

  & > div {
    width: 140px;
    height: 140px;
    margin-right: 20px;
    border-radius: 50%;
    background-color: #f3f4f5;

    @media screen and (min-width: 480px) {
      width: 200px;
      height: 200px;
      margin-right: 20px;
    }

    @media screen and (min-width: 1000px) {
      width: 280px;
      height: 280px;
      margin-right: 20px;
    }

    @media screen and (min-width: 1200px) {
      width: 334px;
      height: 334px;
      margin-right: 40px;
    }
  }

  & > img {
    position: absolute;
    right: 0;

    bottom: 20px;
    width: 98px;
    height: 98px;
    border-radius: 50%;
    box-shadow: 13px 38px 52px 0 rgba(49, 53, 59, 0.2);

    @media screen and (min-width: 480px) {
      width: 158px;
      height: 158px;
    }

    @media screen and (min-width: 1000px) {
      bottom: 0;
      width: 208px;
      height: 208px;
    }

    @media screen and (min-width: 1200px) {
      width: 232px;
      height: 232px;
    }
  }
`

type Props = {
  handleScrollIntoView: () => void
  data: {
    linkedinUrl: string,
    profilePhoto: string,
    name: string
  }
}

export default forwardRef<HTMLDivElement, Props>(({ handleScrollIntoView, data }, ref) => {
  return (
    <Wrapper ref={ref}>
      <LeftSection>
        <h5>Hello there,</h5>
        <h1>
          I&apos;m <span>{data.name}.</span>
        </h1>
        <p>
          A passionate web developer who will solve you problems and <b>‘objectify’</b>
          your ideas. I build beautiful websites professionally, high attention to details
          and the most important, I love what I do.
        </p>
        <p>
          If you want to know more about me you can find me on my&nbsp;
          <a href={data.linkedinUrl} target="_blank" rel="noopener noreferrer">
            linkedin
          </a>
          .
        </p>
        <p>Have any project, idea, or problems?</p>
        <Button label="Let’s have a chat!" onClick={handleScrollIntoView} />
      </LeftSection>
      <RightSection>
        <div />
        <img src={data.profilePhoto} alt="profile_photo" />
      </RightSection>
    </Wrapper>
  )
})
