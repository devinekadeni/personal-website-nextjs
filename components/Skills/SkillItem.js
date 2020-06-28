import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 30%;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    flex: initial;
  }

  img {
    width: 50px;
    height: 50px;
    object-fit: contain;

    @media screen and (min-width: 1200px) {
      width: 72px;
      height: 72px;
    }
  }

  label {
    font-family: 'Titillium Web';
    font-size: 14px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1px;
    text-align: center;
    color: #181720;
    margin-top: 8.6px;

    @media screen and (min-width: 1200px) {
      margin-top: 16px;
    }
  }
`

const SkillItem = ({ name, icon }) => (
  <Wrapper>
    <img src={icon} alt={`${name}_icon`} />
    <label htmlFor={`${name}_icon`}>{name}</label>
  </Wrapper>
)

SkillItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default SkillItem
