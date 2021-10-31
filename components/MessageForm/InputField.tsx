import { useState, useEffect, useRef, ChangeEventHandler } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input<{ fieldWidth: number, isError: boolean }>`
  font-family: 'Titillium Web';
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #09b0ba;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  width: ${(props) => props.fieldWidth + 'px'};
  border-bottom: ${(props) => (props.isError ? '2px solid red' : 'none')};

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 36px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 40px;
  }

  &::placeholder {
    color: #6c727c;
  }

  &:focus {
    outline: none;
  }
`

const HiddenText = styled.span`
  font-family: 'Titillium Web';
  position: absolute;
  visibility: hidden;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  max-width: 60vw;
  left: 0;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 36px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 40px;
  }
`

type Props = {
  placeholder: string
  name: string
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
  isError: boolean
}

const TextField:React.FC<Props> = ({ placeholder, name, value, onChange, isError }) => {
  const [inputWidth, setInputWidth] = useState(0)
  const divEl = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const textWidth = divEl?.current?.getBoundingClientRect().width || 0
    setInputWidth(textWidth)
  }, [value])

  // if there is a space on the last of text, the input will be sink
  // so I replace ' ' with 'l' if there is any space on he last of text
  const hiddenText = value.endsWith(' ')
    ? value.replace(/\s/g, 'l')
    : value || placeholder

  // hiddenText: will be set as same as the input value
  // so that we get the text width and apply it to the input
  // then the input element width will be stretch as the text lengh
  return (
    <>
      <StyledInput
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        isError={isError}
        fieldWidth={inputWidth}
      />
      <HiddenText ref={divEl}>{hiddenText}</HiddenText>
    </>
  )
}

export default TextField
