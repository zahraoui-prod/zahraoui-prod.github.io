/**
 * useEmailJS Hook
 * Manages EmailJS service initialization and email sending
 */

import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

// EmailJS Configuration
// Note: These are public keys and can be safely exposed in frontend code
const EMAILJS_SERVICE_ID = 'service_sonariq_music';
const EMAILJS_TEMPLATE_ID = 'template_sonariq_contact';
const EMAILJS_PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY'; // Replace with your actual public key

export interface EmailData {
  email: string;
  whatsapp?: string;
  youtubeChannel?: string;
  message: string;
  name?: string;
}

export interface SendEmailResponse {
  success: boolean;
  message: string;
  error?: string;
}

export function useEmailJS() {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      setIsInitialized(true);
    } catch (error) {
      console.error('Failed to initialize EmailJS:', error);
      setIsInitialized(false);
    }
  }, []);

  /**
   * Send contact form email
   */
  const sendEmail = async (data: EmailData): Promise<SendEmailResponse> => {
    if (!isInitialized) {
      return {
        success: false,
        message: 'Email service not initialized',
        error: 'EmailJS service is not ready'
      };
    }

    setIsLoading(true);

    try {
      const templateParams = {
        to_email: 'contact@sonariqmusic.com', // Replace with your email
        from_email: data.email,
        from_name: data.name || data.email,
        subject: 'New Contact Form Submission - SONARIQ MUSIC',
        message: data.message,
        whatsapp: data.whatsapp || 'Not provided',
        youtube_channel: data.youtubeChannel || 'Not provided',
        reply_to: data.email
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        return {
          success: true,
          message: 'Email sent successfully! We will get back to you soon.'
        };
      } else {
        return {
          success: false,
          message: 'Failed to send email',
          error: `Status: ${response.status}`
        };
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      return {
        success: false,
        message: 'Failed to send email. Please try again later.',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isInitialized,
    isLoading,
    sendEmail
  };
}

/**
 * Setup Instructions for EmailJS:
 * 
 * 1. Go to https://www.emailjs.com/
 * 2. Sign up for a free account
 * 3. Create a new email service (e.g., Gmail)
 * 4. Create an email template with the following variables:
 *    - {{to_email}} - Recipient email
 *    - {{from_email}} - Sender email
 *    - {{from_name}} - Sender name
 *    - {{subject}} - Email subject
 *    - {{message}} - Main message content
 *    - {{whatsapp}} - WhatsApp number
 *    - {{youtube_channel}} - YouTube channel URL
 *    - {{reply_to}} - Reply-to email
 * 
 * 5. Copy your:
 *    - Service ID
 *    - Template ID
 *    - Public Key
 * 
 * 6. Replace the values in this file:
 *    - EMAILJS_SERVICE_ID
 *    - EMAILJS_TEMPLATE_ID
 *    - EMAILJS_PUBLIC_KEY
 * 
 * 7. Update the recipient email in the sendEmail function
 */
