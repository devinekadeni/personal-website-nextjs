const express = require('express')
const next = require('next')
const helmet = require('helmet')
const sgMail = require('@sendgrid/mail')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.enable('trust proxy')
  server.use((req, res, next) => {
    if (process.env.NODE_ENV === 'production' && !req.secure) {
      res.redirect('https://' + req.headers.host + req.url)
    } else {
      next()
    }
  })

  server.use(express.json())
  server.use(helmet())

  server.post('/api/email-send', (req, res) => {
    const { name, message, email } = req.body

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
      to: 'devinekadeni@gmail.com',
      from: email,
      subject: `Website message from ${name}`,
      text: 'website',
      html: `<div>${message}</div>`,
    }

    sgMail
      .send(msg)
      .then(() => res.status(200).send('Send email successed'))
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('Error sending email', err)
        res.status(500).send(`Failed to send email by Sendgrid. Error: ${err}`)
      })
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    // eslint-disable-next-line no-console
    console.log(`> Ready on http://localhost:${port}`)
  })
})
