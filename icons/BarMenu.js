import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const animate1 = keyframes`
  0% {}
  50% { transform: translateY(7px); }
  100% { transform: rotate(45deg); }
`

const animate3 = keyframes`
  0% {}
  50% { transform: translateY(-7px); }
  100% { transform: rotate(-45deg); }
`

const hiddenStyle = 'display: none'

const SvgWrapper = styled.svg`
  width: 20px;
  height: 20px;
  cursor: pointer;

  @media screen and (min-width: 480px) {
    ${(props) => !props.isScrollDown && hiddenStyle};
  }

  .line-bar-menu {
    stroke: black;
    stroke-width: 3px;
    transition: transform 2s;
  }

  .line1 {
    stroke: white;
    animation: ${animate1} 0.6s forwards ease-in;
    transform-origin: 10% 30%;
  }
  .line2 {
    display: none;
  }
  .line3 {
    stroke: white;
    animation: ${animate3} 0.6s forwards ease-in;
    transform-origin: 10% 70%;
  }
`

const BarMenu = ({ isScrollDown, onToggle, className, isMenuBarForm }) => {
  const [toggleAnimate, setToggleAnimate] = useState(false)

  useEffect(() => {
    setToggleAnimate(isMenuBarForm)
  }, [isMenuBarForm])

  const handleClick = () => {
    onToggle()
    setToggleAnimate(!toggleAnimate)
  }

  return (
    <SvgWrapper
      id="svg-container"
      className={className}
      onClick={handleClick}
      isScrollDown={isScrollDown}
    >
      <line
        id="line1"
        className={`line-bar-menu ${toggleAnimate && 'line1'}`}
        x1="20"
        y1="3"
        x2="20"
        y2="3"
      />
      <line
        id="line2"
        className={`line-bar-menu ${toggleAnimate && 'line2'}`}
        x1="20"
        y1="10"
        x2="20"
        y2="10"
      />
      <line
        id="line3"
        className={`line-bar-menu ${toggleAnimate && 'line3'}`}
        x1="20"
        y1="17"
        x2="20"
        y2="17"
      />

      {/* initial animation freeze */}
      <animate
        xlinkHref="#line1"
        attributeName="x2"
        from="20"
        to="0"
        dur="0.3s"
        begin="0.6s"
        fill="freeze"
        id="line1-initial"
      />
      <animate
        xlinkHref="#line2"
        attributeName="x2"
        from="20"
        to="0"
        dur="0.3s"
        begin="0.5s"
        fill="freeze"
      />
      <animate
        xlinkHref="#line3"
        attributeName="x2"
        from="20"
        to="0"
        dur="0.3s"
        begin="0.4s"
        fill="freeze"
        id="line3-initial"
      />

      {/* infinite animation */}
      <animate
        xlinkHref="#line1"
        attributeName="x2"
        dur="10s"
        repeatCount="indefinite"
        begin="line3-initial.end + 0.3s"
        end="rect1.click"
        values="0; 20; 0; 20; 0"
        keyTimes="0; 0.25; 0.5; 0.75; 1"
      />
      <animate
        xlinkHref="#line3"
        attributeName="x1"
        dur="7s"
        repeatCount="indefinite"
        begin="line3-initial.end + 0.3s"
        end="rect1.click"
        values="20; 0; 20; 0; 20"
        keyTimes="0; 0.25; 0.5; 0.75; 1"
      />

      {/* infinite animation after click */}
      <animate
        xlinkHref="#line1"
        attributeName="x2"
        dur="10s"
        repeatCount="indefinite"
        begin="rect2.click"
        end="rect1.click"
        values="0; 20; 0; 20; 0"
        keyTimes="0; 0.25; 0.5; 0.75; 1"
      />
      <animate
        xlinkHref="#line3"
        attributeName="x1"
        dur="7s"
        repeatCount="indefinite"
        begin="rect2.click"
        end="rect1.click"
        values="20; 0; 20; 0; 20"
        keyTimes="0; 0.25; 0.5; 0.75; 1"
      />
    </SvgWrapper>
  )
}

BarMenu.defaultProps = {
  className: '',
  onToggle: () => {},
  isMenuBarForm: false,
}

BarMenu.propTypes = {
  onToggle: PropTypes.func,
  className: PropTypes.string,
  isMenuBarForm: PropTypes.bool,
  isScrollDown: PropTypes.bool,
}

export default BarMenu
