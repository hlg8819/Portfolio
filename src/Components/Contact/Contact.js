//#region IMPORTS
//*REACT
import React, { useCallback, useEffect, useRef, useState } from 'react';
//*ADDONS
import emailjs from '@emailjs/browser';
import { Grid } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
//*CSS
import 'react-toastify/dist/ReactToastify.css';
import './contact.css';
//*FILES
import BackImg from '../../Assets/Me1.png';
//#endregion

const Contact = () => {
  //#region HOOKS
  const form = useRef();
  const [fullMail, setFullMail] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  })
  const [showToast, setShowToast] = useState({
    success: false,
    message: "",
  });

  const toastShow = useCallback(() => {
    if (showToast.success) {
      toast.success(showToast.message, { position: 'top-center' });
    } else {
      toast.error(showToast.message, { position: 'top-center' });
    }
    setShowToast({
      success: false,
      message: "",
    });
  }, [showToast]);

  useEffect(() => {
    if (showToast.message.length > 0) {
      toastShow();
    }
  }, [showToast, toastShow]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //#endregion

  //#region FUNCTIONS

  //*Handles changes of inputs
  const handleChange = (e) => {
    setFullMail({
      ...fullMail,
      [e.target.id]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.id]: false,
    })
  }

  //*Validates fields of form
  const validateForm = async () => {
    let valid = true;
    const validEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    if (fullMail.name.length <= 0 || fullMail.name.replaceAll(' ', '').length <= 0) {
      valid = false;
      setErrors((e) => ({
        ...e,
        name: true,
      }));
    }

    if (!validEmail.test(fullMail.email)) {
      valid = false;
      setErrors((e) => ({
        ...e,
        email: true,
      }));
    }

    if (fullMail.message <= 0 || fullMail.message.replaceAll(' ', '').length <= 0) {
      valid = false;
      setErrors((e) => ({
        ...e,
        message: true,
      }));
    }
    return valid;
  }

  //*Sends email with form data
  const sendEmail = async (e) => {
    e.preventDefault();
    let valid = await validateForm(form);
    if (valid) {
      emailjs.sendForm('service_i2b6ibk', 'template_evad6sj', form.current, { publicKey: 'WJJXn5EecNcRK1r2d', })
        .then(() => {
          setShowToast({
            success: true,
            message: "Message sent, I'll reach out to you as soon as possible. Thank you!.",
          });
          e.target.reset();
          setFullMail({
            name: "",
            email: "",
            message: "",
          })
        }, (error) => {
          setShowToast({
            success: false,
            message: "Error, please try again" + error.text,
          });
        },
        );
    } else {
      setShowToast({
        success: false,
        message: "Error, please fill each field with the correct information and try again"
      })
    }
  };
  //#endregion

  //#region HTML
  return (
    <>
      <ToastContainer theme='dark' />
      <div className='containerH'>
        <div className='centerDiv' style={{ paddingBottom: '20px' }}>
          <span className='title'>CONTACT ME</span>
        </div>
        <Grid container spacing={5}>
          <Grid item sm={12} md={4}>
            <p>
              If you are interested in hiring me or discussing any relevant topics, projects, or professional matters, please feel free to reach out. I am open to new opportunities and collaborations.
            </p>
            <br />
            <p>Email: <a href='mailto: hec.lopezgonzalez@gmail.com'>hec.lopezgonzalez@gmail.com</a></p>
            <br />
            <p>I look forward to the possibility of working together soon!</p>
          </Grid>
          <Grid item sm={12} md={8}>
            <img className='contactImg' src={BackImg} alt='ContImg' />
            <form ref={form} className='contactForm' onSubmit={sendEmail} noValidate>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <input
                    id='name'
                    name='name'
                    placeholder='Your Name'
                    type='text'
                    onChange={(e) => handleChange(e)}
                    value={fullMail.name}
                  />
                  {errors.name ? <span className='errorMsg'>Please enter your name</span> : null}
                </Grid>
                <Grid item xs={6}>
                  <input
                    id='email'
                    name='email'
                    placeholder='Your Email'
                    type='email'
                    onChange={(e) => handleChange(e)}
                    value={fullMail.email}
                  />
                  {errors.email ? <span className='errorMsg'>Please enter a valid email</span> : null}
                </Grid>
                <Grid item xs={12}>
                  <textarea
                    id='message'
                    name='message'
                    placeholder='Message'
                    rows='10'
                    onChange={(e) => handleChange(e)}
                    value={fullMail.message}
                    style={{ width: '100%', color: 'white' }}
                  />
                  {errors.message ? <span className='errorMsg'>Please write a message</span> : null}
                </Grid>
                <Grid item xs={12}>
                  <div className='btnDiv'>
                    <input
                      type='submit'
                      className='regularBtn'
                      value='SUBMIT'
                      style={{ width: '25%' }}
                    />
                  </div>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </div>
    </>
  )
  //#endregion
}

export default Contact