const sgMail = require('@sendgrid/mail')

async function postEmail(req, res) {
  const { name, message, email } = req.body

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const msg = {
    to: 'devinekadeni@gmail.com',
    from: email,
    subject: `Website message from ${name}`,
    text: 'website',
    html: `<div>${message}</div>`,
  }

  try {
    await sgMail.send(msg)
    res.status(200).json({ success: true, message: 'Send email success' })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Failed to send email by Sendgrid. Error: ${error}`,
    })
  }
}

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json')

  if (req.method === 'POST') {
    await postEmail(req, res)
  }
}
