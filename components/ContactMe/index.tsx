import styled from 'styled-components'
import SocialMedia, { SocialMediaItem } from 'components/SocialMedia'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px 32px 129px;

  @media screen and (min-width: 768px) {
    align-items: center;
  }

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    align-items: flex-end;
    padding: 80px 64px 160px;
  }

  @media screen and (min-width: 1200px) {
    padding: 112px 120px 180px 90px;
  }

  h2 {
    font-family: 'Rajdhani';
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #181720;

    @media screen and (min-width: 768px) {
      font-size: 28;
    }

    @media screen and (min-width: 1000px) {
      max-width: 40%;
    }

    @media screen and (min-width: 1200px) {
      font-size: 36px;
    }
  }
`

const SectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    align-items: center;
  }

  @media screen and (min-width: 1000px) {
    align-items: flex-start;
  }

  h5 {
    font-family: 'Rajdhani';
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #181720;

    @media screen and (min-width: 768px) {
      font-size: 16;
    }
  }

  label {
    font-family: 'Titillium Web';
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #09b0ba;
    cursor: text;

    @media screen and (min-width: 1200px) {
      font-size: 24px;
    }
  }
`

const Footer = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 90%;
  height: 89px;
  background-color: #181720;
  color: #f3f4f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  @media screen and (min-width: 1000px) {
    height: 68px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  label {
    order: 1;
    font-family: 'Titillium Web';
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 2px;
    color: #f3f4f5;
    margin-top: 16px;

    @media screen and (min-width: 1000px) {
      font-size: 14px;
      order: unset;
      margin-top: unset;
    }
  }
`

type Props = {
  email: string
  phoneNumber: string
  socialMedia: SocialMediaItem[]
}

const ContactMe:React.FC<Props> = ({ email, phoneNumber, socialMedia }) => {
  const yearCreated = 2019
  const currentYear = new Date().getFullYear()
  const displayYear =
    yearCreated === currentYear ? yearCreated : `${yearCreated} - ${currentYear}`

  return (
    <Wrapper>
      <h2>Hi, let&apos;s build something amazing together.</h2>
      <SectionInfo>
        <h5>need help?</h5>
        <label htmlFor="email">{email}</label>
      </SectionInfo>
      <SectionInfo>
        <h5>feel like talking?</h5>
        <label htmlFor="email">{phoneNumber}</label>
      </SectionInfo>
      <Footer className="footer-qs">
        <label htmlFor="copyright">© {displayYear} DEVIN EKADENI</label>
        <SocialMedia data={socialMedia} />
      </Footer>
    </Wrapper>
  )
}

export default ContactMe
