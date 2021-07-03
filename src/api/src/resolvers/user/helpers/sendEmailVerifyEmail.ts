import { MailDataRequired } from '@sendgrid/helpers/classes/mail'
import * as sendgrid from '@sendgrid/mail'

interface SendEmailVerifyEmail {
  (email: string, captchaIndex: number): Promise<void>
}

export const sendEmailVerifyEmail: SendEmailVerifyEmail = async (email, captchaIndex) => {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string)

  const message: MailDataRequired = {
    to: [{ email }],
    from: { name: 'polycash.net', email: process.env.FROM_EMAIL as string },
    subject: 'Please verify your email',
    text: `Please enter the following captcha https://polycash.net/captchas/${captchaIndex}.png on https://polycash.net/verify-email`,
    html: `Please enter the following captcha <br /><img alt="captcha" src="https://polycash.net/captchas/${captchaIndex}.png" /> <br />on <a href="https://polycash.net/verify-email">https://polycash.net/verify-email</a>`,
  }

  await sendgrid.send(message)
}
