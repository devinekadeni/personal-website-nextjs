import { forwardRef, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Button from 'components/Button'
import InputField from './InputField'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #181720;
  margin-top: 68px;
  padding: 116px 34px;
  color: #e5e7e9;
  font-family: 'Titillium Web';
  margin-bottom: unset;

  @media screen and (min-width: 1200px) {
    margin-top: 128px;
    padding: 112px 0px;
  }

  h4 {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;

    @media screen and (min-width: 768px) {
      font-size: 18px;
    }

    @media screen and (min-width: 1000px) {
      font-size: 24px;
    }
  }

  h1 {
    font-family: 'Rajdhani';
    font-size: 36px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;

    @media screen and (min-width: 768px) {
      font-size: 48px;
    }

    @media screen and (min-width: 1000px) {
      font-size: 64px;
    }

    @media screen and (min-width: 1200px) {
      font-size: 86px;
    }
  }

  p {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.88;
    letter-spacing: normal;
    text-align: center;
    margin-bottom: 48px;

    @media screen and (min-width: 768px) {
      max-width: 60%;
      font-size: 20px;
    }

    @media screen and (min-width: 1000px) {
      max-width: 70%;
      font-size: 28px;
    }

    @media screen and (min-width: 1200px) {
      max-width: 60%;
      font-size: 32px;
      margin-bottom: 32px;
    }
  }
`

const MessageForm = (_props, ref) => {
  const [form, setForm] = useState({ name: '', message: '', email: '' })
  const [inputError, setInputError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const validateForm = (e) => {
    for (const val in form) {
      if (!form[val]) {
        setInputError(val)
        e.target[val].focus()
        return false
      }
    }
    return true
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (validateForm(e)) {
      setForm({ name: '', message: '', email: '' })
      e.target.name.focus()

      axios({
        url: '/api/email-send',
        method: 'POST',
        data: {
          name: form.name,
          email: form.email,
          message: form.message,
        },
      })
    }
  }

  return (
    <StyledForm onSubmit={handleOnSubmit} ref={ref}>
      <h4>Got a project or a partnership in mind?</h4>
      <h1>Just say hi to me!</h1>
      <p>
        Hi, Devin! My name is&nbsp;
        <InputField
          placeholder="your full name"
          name="name"
          value={form.name}
          onChange={handleChange}
          isError={inputError === 'name'}
        />
        . I would like to talk to you about&nbsp;
        <InputField
          placeholder="your message"
          name="message"
          value={form.message}
          onChange={handleChange}
          isError={inputError === 'message'}
        />
        . You can reach me at&nbsp;
        <InputField
          placeholder="your email address"
          name="email"
          value={form.email}
          onChange={handleChange}
          isError={inputError === 'email'}
        />
        &nbsp;to get things started.
      </p>
      <Button type="submit" label="Let’s dooo thisss!" />
    </StyledForm>
  )
}

export default forwardRef(MessageForm)
