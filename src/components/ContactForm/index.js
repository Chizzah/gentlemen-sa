import React from 'react'

import { Container, Form } from './styles'

const ContactForm = () => {
  return (
    <Container>
      <h3>Contact Form</h3>
      <Form
        target="_blank"
        action="https://formsubmit.co/chizzah69@gmail.com"
        method="POST"
      >
        <div>
          <input type="text" name="name" placeholder="Full Name" required />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Your Message"
            name="message"
            rows="10"
            required
          />
          <button type="submit">Send Message</button>
        </div>
      </Form>
    </Container>
  )
}

export default ContactForm
