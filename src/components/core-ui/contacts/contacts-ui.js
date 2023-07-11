import { IconButton, Snackbar, SnackbarContent } from '@mui/material';
import React, { useContext, useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineSend } from 'react-icons/ai';
import { FaFacebook, FaGithub, FaLinkedinIn, FaMediumM, FaStackOverflow, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FiAtSign, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { ThemeContext } from '../../../contexts/theme-context';
import { contactsData } from '../../../data/contactsData';
import emailjs from 'emailjs-com';
import './contacts.css';

const ContactUI = ({ open, success, errMsg, handleClose, classes, handleContactForm, name, setName, form, email, setEmail, message, setMessage }) => {
  const { theme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: email,
      user_name: name,
      to_name: contactsData.email,
      message: message,
    };

    emailjs.send(contactsData.YOUR_SERVICE_ID,
      contactsData.YOUR_TEMPLATE_ID,
      templateParams,
      contactsData.YOUR_USER_ID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setLoading(false);
        
        setMessageSent(true);
        setTimeout(() => {
          window.location.reload(); 
        }, 3000);
        
      }, (error) => {
        console.log('FAILED...', error);
        setLoading(false);
        // Handle error state
      });
  };

  return (
    <div
      className='contacts'
      id='contacts'
      style={{ backgroundColor: theme.secondary }}
    >
      <div className='contacts--container'>
        <h1 style={{ color: theme.primary }}>Contacts</h1>
        <div className='contacts-body'>
          <div className='contacts-form'>
            <form ref={form} onSubmit={handleContactForm}>
            {messageSent && (
              <div className='success-message'>
                <p>Message Sent Successfully....</p>
              </div>
            )}
              <div className='input-container'>
                <label htmlFor='Name' className={classes.label}>
                  Name
                </label>
                <input
                  placeholder='  '
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type='text'
                  name='user_name'
                  className={`form-input ${classes.input}`}
                />
              </div>
              <div className='input-container'>
                <label
                  htmlFor='Email'
                  className={classes.label}
                >
                  Email
                </label>
                <input
                  placeholder=' '
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type='email'
                  name='user_email'
                  className={`form-input ${classes.input}`}
                />
              </div>
              <div className='input-container'>
                <label
                  htmlFor='Message'
                  className={classes.label}
                >
                  Message
                </label>
                <textarea
                  placeholder=' '
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  type='text'
                  name='message'
                  className={`form-message ${classes.message}`}
                />
              </div>

              <div className='submit-btn'>
                <button
                  type='submit'
                  className={classes.submitBtn}
                  disabled={loading}
                  onClick={sendEmail}
                >
                  <p>{!success ? 'Send' : 'Sent'}</p>
                  <div className='submit-icon'>
                    <AiOutlineSend
                      className='send-icon'
                      style={{
                        animation: !success
                          ? 'initial'
                          : 'fly 0.8s linear both',
                        position: success
                          ? 'absolute'
                          : 'initial',
                      }}
                    />
                    <AiOutlineCheckCircle
                      className='success-icon'
                      style={{
                        display: !success
                          ? 'none'
                          : 'inline-flex',
                        opacity: !success ? '0' : '1',
                      }}
                    />
                  </div>
                </button>
              </div>
            </form>
            
            <Snackbar
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={open}
              autoHideDuration={4000}
              onClose={handleClose}
            >
              <SnackbarContent
                action={
                  <React.Fragment>
                    <IconButton
                      size='small'
                      aria-label='close'
                      color='inherit'
                      onClick={handleClose}
                    >
                      <IoClose fontSize='small' />
                    </IconButton>
                  </React.Fragment>
                }
                style={{
                  backgroundColor: theme.primary,
                  color: theme.secondary,
                  fontFamily: 'var(--primaryFont)',
                }}
                message={errMsg}
              />
            </Snackbar>
          </div>

          <div className='contacts-details'>
            <a
              href={`mailto:${contactsData.email}`}
              className='personal-details'
            >
              <div className={classes.detailsIcon}>
                <FiAtSign />
              </div>
              <p style={{ color: theme.tertiary }}>
                {contactsData.email}
              </p>
            </a>
            <a
              href={`tel:${contactsData.phone}`}
              className='personal-details'
            >
              <div className={classes.detailsIcon}>
                <FiPhone />
              </div>
              <p style={{ color: theme.tertiary }}>
                {contactsData.phone}
              </p>
            </a>
            <div className='personal-details'>
              <div className={classes.detailsIcon}>
                <FaWhatsapp />
              </div>
              <p style={{ color: theme.tertiary }}>
                {contactsData.whatsapp}
              </p>
            </div>

            <div className='socialmedia-icons'>
              {contactsData.twitter && (
                <a
                  href={contactsData.twitter}
                  target='_blank'
                  rel='noreferrer'
                  className={classes.socialIcon}
                >
                  <FaTwitter aria-label='Twitter' />
                </a>
              )}
              {contactsData.github && (
                <a
                  href={contactsData.github}
                  target='_blank'
                  rel='noreferrer'
                  className={classes.socialIcon}
                >
                  <FaGithub aria-label='GitHub' />
                </a>
              )}
              {contactsData.linkedIn && (
                <a
                  href={contactsData.linkedIn}
                  target='_blank'
                  rel='noreferrer'
                  className={classes.socialIcon}
                >
                  <FaLinkedinIn aria-label='LinkedIn' />
                </a>
              )}

              {contactsData.medium && (
                <a
                  href={contactsData.medium}
                  target='_blank'
                  rel='noreferrer'
                  className={classes.socialIcon}
                >
                  <FaMediumM aria-label='Medium' />
                </a>
              )}

              {contactsData.youtube && (
                <a
                  href={contactsData.youtube}
                  target='_blank'
                  rel='noreferrer'
                  className={classes.socialIcon}
                >
                  <FaYoutube aria-label='YouTube' />
                </a>
              )}

              {contactsData.stackOverflow && (
                <a
                  href={contactsData.stackOverflow}
                  target='_blank'
                  rel='noreferrer'
                 
                  className={classes.socialIcon}>
                  <FaStackOverflow aria-label='Stack Overflow' />
                </a>
              )}
              {contactsData.facebook && (
                <a
                  href={contactsData.facebook}
                  target='_blank'
                  rel='noreferrer'
                  className={classes.socialIcon}
                >
                  <FaFacebook aria-label='facebook' />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <img
        src={theme.contactsimg}
        alt='contacts'
        className='contacts--img'
      />
    </div>
  );
};

export default ContactUI;
