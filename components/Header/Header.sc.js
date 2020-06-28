import styled, { keyframes } from 'styled-components'
import BarMenu from 'icons/BarMenu'
import SocialMedia from 'components/SocialMedia'

const traverseRight = keyframes`
  0% { transform: translateX(0px); }
  100% { transform: translateX(700px); }
`

const traverseLeft = keyframes`
  0% { transform: translateX(700px); }
  100% { transform: translateX(0px); }
`

export const DesktopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 90px 0 40px;
  height: 108px;

  @media screen and (max-width: 480px) {
    padding: 16px 24px;
    position: relative;
  }

  h2 {
    font-family: 'Courier New', Courier, monospace;
    font-size: 34px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: rgba(49, 53, 59, 0.68);
    z-index: 1;
  }
`

export const Navigation = styled.div`
  position: relative;
  display: grid;
  /* grid-template-columns: 65px 65px 65px 85px 65px; // TODO: enable when translation & portfolio section ready */
  grid-template-columns: 65px 65px 85px;
  justify-items: center;
  column-gap: 40px;
  font-family: 'Titillium Web', sans-serif;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    width: 100vw;
    height: 0;
    background-color: #181720;
    position: absolute;
    left: 0;
    top: 0;
    transition: height 0.7s;
    padding-right: 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
  }

  button {
    padding: 0;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 3px;
    color: rgba(49, 53, 59, 0.68);
    transition: color 0.4s, font-weight 0.4s;
    background-color: transparent;
    transition: color 0.3s;

    &:hover {
      cursor: pointer;
      color: #09b0ba;
    }
  }

  .traverse-right {
    animation: ${traverseRight} 1s ease-in forwards;
  }

  .traverse-left {
    animation: ${traverseLeft} 0.5s ease-out forwards;
  }

  .language {
    display: flex;

    span {
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 3px;
      color: rgba(49, 53, 59, 0.68);
      transition: color 0.4s, font-weight 0.4s;

      @media (hover) {
        &:hover {
          cursor: pointer;
          color: #09b0ba;
          font-weight: bold;
        }
      }
    }

    div {
      width: 1px;
      background-color: rgba(49, 53, 59, 0.68);
      margin: 0 8px;
    }
  }
`

export const StyledBarMenu = styled(BarMenu)`
  z-index: 1;

  @media screen and (min-width: 480px) {
    position: absolute;
    right: 90px;
  }
`

// Mobile

export const StyledBarMenuMobile = styled(BarMenu)`
  z-index: 1;
`

export const MenuWrapper = styled.div`
  width: 100vw;
  height: 0;
  background-color: #181720;
  position: absolute;
  left: 0;
  top: 0;
  transition: height 0.7s;
  padding-right: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-top: 124px;

    button {
      font-family: 'Titillium Web';
      font-size: 24px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 5.14px;
      text-align: right;
      color: #f3f4f5;
      background-color: unset;
      width: fit-content;
      opacity: 0;
      margin-bottom: 32px;

      &:hover {
        color: #09b0ba;
      }
    }
  }
`

export const MobileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  position: relative;

  h2 {
    z-index: 1;
    color: ${(props) => (props.isMenuShown ? 'white' : 'inherit')};
  }

  ${MenuWrapper} {
    height: ${(props) => (props.isMenuShown ? '100vh' : '0vh')};

    button {
      opacity: ${(props) => (props.isMenuShown ? '1' : '0')};
    }
  }
`

export const StyledSocialMedia = styled(SocialMedia)`
  z-index: 1;
  top: 40%;
  transition: opacity 0.7s;
  opacity: ${(props) => (props.hidden ? 0 : 1)};
`
