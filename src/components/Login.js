import React, { useContext, useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik';
import Services from './ServicesHeader';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../helpers/AuthContext';

function Login() {
  const [loginMessage, setLoginMessage] = useState("");
  const history = useNavigate();
  const initialValues = ({
    email: "",
    pwd: ""
  })
  const { setAuthState } = useContext(AuthContext);

  const onSubmit = (data) => {
    axios.post('http://localhost:3001/login', data)
    .then((response) => {
      if(response.data.error) {
        setLoginMessage(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data);
        setAuthState(true);
        history('/account');
      }
      
    })
  }

  useEffect(() => {
    setTimeout(() => {
      setLoginMessage("");
    }, 6000);
  }, [loginMessage])
  return (
    <div className='login'>
      <Services />
      <div className='login-body'>
        <div className='login-body-left'>
          <Formik initialValues={initialValues} onSubmit={onSubmit} >
            <Form>
              <label>Email</label>
              <Field
              id="email"
              name="email" />

              <label>Password</label>
              <Field
              type="password"
              id="pwd"
              name="pwd" />

              <button type='submit'>Login</button>
            </Form>
          </Formik>
          <p>Don't have an account? <a href='/signup' >Signup</a></p>
        </div>
        <div className='login-body-right'>
        <p style={{color:"red"}}>{loginMessage}</p>
        </div>
      </div>
    </div>
  )
}

export default Login
