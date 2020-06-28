import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #09b0ba;
  width: 169px;
  height: 37px;
  border-radius: 18.5px;
  font-family: 'Titillium Web';
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  transition: background-color 0.4s;
  color: #ffffff;

  @media (hover) {
    &:hover {
      background-color: #ffffff;
      color: #09b0ba;
      border: 1px solid #09b0ba;
    }
  }
`

const Button = (props) => {
  const { label, className } = props

  return (
    <StyledButton className={className} {...props}>
      {props.children || label}
    </StyledButton>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,
}

export default Button
