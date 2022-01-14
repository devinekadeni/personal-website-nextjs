import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Params = {
  name: string
  email: string
  message: string
}

type Data = {
  success: boolean
  message: string
  messageId?: string
}

function sendEmail({ email, name, message }: Params) {
  const API_KEY = process.env.SENDINBLUE_API_KEY as string

  return axios({
    method: 'POST',
    url: `${process.env.SENDINBLUE_API_HOST}/smtp/email`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'api-key': API_KEY,
    },
    data: {
      sender: { name, email },
      to: [
        {
          name: 'Devin Ekadeni',
          email: 'devinekadeni@gmail.com',
        },
      ],
      subject: `Website message from ${name}`,
      textContent: message,
    },
  }).then((response) => {
    return response.data
  })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.setHeader('Content-Type', 'application/json')

  if (req.method === 'POST') {
    const { name, email, message } = req.body
    const payload = {
      name,
      email,
      message,
    }

    sendEmail(payload)
      .then(() => {
        res.status(200).json({ success: true, message: 'Send email success' })
      })
      .catch(() => {
        res.status(500).json({ success: false, message: 'Failed to send email' })
      })
  }
}
