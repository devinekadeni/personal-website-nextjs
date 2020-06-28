import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Instagram } from '@styled-icons/fa-brands/Instagram'
import { Github } from '@styled-icons/fa-brands/Github'
import { Linkedin } from '@styled-icons/fa-brands/Linkedin'
import { Facebook } from '@styled-icons/fa-brands/Facebook'

const SOCIAL_MEDIA_LIST = [
  {
    id: 1,
    name: 'github',
    url: 'https://github.com/devinekadeni',
    icon: Github,
  },
  {
    id: 2,
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/vdevinekadeni/',
    icon: Linkedin,
  },
  {
    id: 3,
    name: 'facebook',
    url: 'https://www.facebook.com/devin.ekadeni/',
    icon: Facebook,
  },
  {
    id: 4,
    name: 'instagram',
    url: 'https://www.instagram.com/devinekadeni/',
    icon: Instagram,
  },
]

const SocialMedia = (props) => {
  const { isFloating, className } = props

  const handleClickIcon = (url) => () => window.open(url)

  return (
    <Wrapper isVertical={isFloating} className={className}>
      {SOCIAL_MEDIA_LIST.map((socMed) => (
        <socMed.icon key={socMed.id} onClick={handleClickIcon(socMed.url)} />
      ))}
    </Wrapper>
  )
}

SocialMedia.defaultProps = {
  isFloating: false,
  className: '',
  style: {},
}

SocialMedia.propTypes = {
  isFloating: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default SocialMedia

const verticalStyle = `
  position: fixed;
  left: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    width: 16px;
    height: 16px;
    object-fit: contain;
    margin-bottom: 24px;
    cursor: pointer;
    color: #9fa6b0;
    transition: color 0.4s;

    @media (hover) {
      &:hover {
        color: #09b0ba;
        font-weight: bold;
      }
    }
  }
`

const horizontalStyle = `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1000px) {
    justify-content: flex-start;
  }

  svg {
    flex: 1 0 38px;
    width: 14px;
    height: 14px;
    object-fit: contain;
    transition: color 0.4s;
    cursor: pointer;
    color: #f3f4f5;

    @media screen and (min-width: 1000px) {
      width: 16px;
      height: 16px;
      margin-left: 24px;
      flex: unset;
    }

    @media (hover) {
      &:hover {
        color: #09b0ba;
        font-weight: bold;
      }
    }
  }
`

const Wrapper = styled.div`
  ${(props) => (props.isVertical ? verticalStyle : horizontalStyle)};
`
