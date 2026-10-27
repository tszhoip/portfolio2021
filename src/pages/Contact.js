import React, { useState } from 'react'
import { Wrap, Text, H1, Container, Button } from '../component/Core'
import styled from 'styled-components'

const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-family: 'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #333;
`;

const Input = styled.input`
  padding: 12px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 0;
  font-family: 'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 14px;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #333;
    background-color: #fafafa;
  }

  &::placeholder {
    color: #aaa;
  }
`;

const Textarea = styled.textarea`
  padding: 12px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 0;
  font-family: 'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 14px;
  min-height: 150px;
  resize: vertical;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #333;
    background-color: #fafafa;
  }

  &::placeholder {
    color: #aaa;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 24px;
  background-color: #000;
  color: #fff;
  border: none;
  font-family: 'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #333;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

// Kept in the DOM for bots to find, but never shown or focusable
const HoneypotGroup = styled.div`
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

const MessageBox = styled.div`
  padding: 16px;
  margin-top: 24px;
  border-radius: 4px;
  font-family: 'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 14px;
  background-color: ${props => props.type === 'success' ? '#f0f9ff' : '#fef2f2'};
  color: ${props => props.type === 'success' ? '#065f46' : '#7f1d1d'};
  border: 1px solid ${props => props.type === 'success' ? '#d1fae5' : '#fee2e2'};
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '' // honeypot, hidden from real users
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // The dev server has no serverless runtime and answers /api with the SPA
      // shell, so a 200 alone does not mean the mail went out. Require JSON.
      const contentType = response.headers.get('content-type') || '';
      const result = contentType.includes('application/json') ? await response.json() : null;

      if (response.ok && result?.success) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        });
        setFormData({ name: '', email: '', subject: '', message: '', company: '' });
      } else {
        setStatus({
          type: 'error',
          message: result?.error
            ? `Could not send your message: ${result.error}`
            : 'There was an error sending your message. Please try again later.'
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus({
        type: 'error',
        message: 'There was an error sending your message. Please try again later.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container width={['100%', '100%', '100%', '80%']} flexDirection={['column']} p='4' flexWrap="wrap" alignItems='center' justifyContent="center">
      <Wrap width="100%" flexDirection='column' justifyContent="start" alignItems="start">

        <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]} marginBottom="32px">
          Contact Us
        </H1>

        <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]} marginBottom="32px">
          Have a question or want to get in touch? Fill out the form below and we'll get back to you as soon as possible.
        </Text>

        <FormContainer>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <HoneypotGroup aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={formData.company}
                onChange={handleChange}
              />
            </HoneypotGroup>

            <FormGroup>
              <Label htmlFor="subject">Subject *</Label>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <SubmitButton type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </form>

          {status && (
            <MessageBox type={status.type}>
              {status.message}
            </MessageBox>
          )}
        </FormContainer>
      </Wrap>
    </Container>
  );
}

export default Contact;
