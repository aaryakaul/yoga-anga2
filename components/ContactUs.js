import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

function ContactUs() {
  const form = useRef();
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  const handleSend = (e) => {
    e.preventDefault();
    if (email !== '' && contact !== '' && message !== '' && name !== '') {
      setError(null);
      emailjs
        .sendForm(
          'service_ebtnzgf',
          'template_cf4cczk',
          form.current,
          'ql0Di4zASFMNUMxfQ'
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setError('Please Fill In All The Details To Proceed');
    }
  };
  return (
    <div>
      <div class='background'>
        <div class='container2'>
          <div class='screen'>
            <div class='screen-header'>
              <div class='screen-header-left'>
                <div class='screen-header-button close'></div>
                <div class='screen-header-button maximize'></div>
                <div class='screen-header-button minimize'></div>
              </div>
              <div class='screen-header-right'>
                <div class='screen-header-ellipsis'></div>
                <div class='screen-header-ellipsis'></div>
                <div class='screen-header-ellipsis'></div>
              </div>
            </div>
            <div class='screen-body'>
              <div class='screen-body-item left'>
                <div class='app-title'>
                  <span>CONTACT US</span>
                </div>
                <div style={{ marginTop: '50px' }}>
                  <a href='tel:+918401685467'>
                    <i
                      style={{ paddingRight: '10px' }}
                      className='fas fa-phone-volume'
                    ></i>
                    +91 84016854567
                  </a>
                  <br />
                  <a class='footer__btn' href='mailto: jinkal2796@gmail.com'>
                    Email Us
                  </a>
                  <div className='right box'>
                    <div style={{ marginTop: '-21px' }} className='media-icons'>
                      <a
                        href='https://www.facebook.com/jinkal.thakkar'
                        target='_blank'
                      >
                        <i className='fab fa-facebook-f'></i>
                      </a>
                      <a
                        href='https://instagram.com/yoga_anga?utm_medium=copy_link'
                        target='_blank'
                      >
                        <i className='fab fa-instagram'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class='screen-body-item'>
                <div class='app-form'>
                  <form ref={form} onSubmit={handleSend}>
                    <div class='app-form-group'>
                      <input
                        class='app-form-control'
                        placeholder='EMAIL'
                        value={email}
                        type='email'
                        name='email'
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div class='app-form-group'>
                      <input
                        class='app-form-control'
                        placeholder='SUBJECT'
                        value={subject}
                        type='text'
                        name='subject'
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div>
                    <div class='app-form-group'>
                      <input
                        class='app-form-control'
                        placeholder='Name'
                        value={name}
                        type='name'
                        name='name'
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div class='app-form-group'>
                      <input
                        class='app-form-control'
                        placeholder='CONTACT NO'
                        value={contact}
                        type='number'
                        name='contact_no'
                        onChange={(e) => setContact(e.target.value)}
                      />
                    </div>
                    <div class='app-form-group message'>
                      <input
                        class='app-form-control'
                        placeholder='MESSAGE'
                        value={message}
                        type='text'
                        name='message'
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div class='app-form-group buttons'>
                      <button
                        class='app-form-button'
                        onClick={() => {
                          setEmail('');
                          setContact('');
                          setMessage('');
                          setName('');
                          setSubject('');
                        }}
                      >
                        CANCEL
                      </button>
                      <input
                        type='submit'
                        value='Send'
                        class='app-form-button'
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
