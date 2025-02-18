import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import Services from './ServicesHeader';
import './App.css';
import Loading from './Loading';
import ShowPassword from './showpassword.m';

function Signup() {
  const [signupMessage, setSignupMessage] = useState("");
  const history = useNavigate();
  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    pwd: ""
  };
  const [loading, setLoading] = useState(null);
  const [pwdType, setPwdType] = useState('password');

    const onSubmit = (data) => {
        axios.post(process.env.REACT_APP_SIGNUP, data, setLoading(true))
        .then((response) => {
          setLoading(false);
          if(response.data === "Sign Up successful, Login") {
            history('/login');
          }
          setSignupMessage(response.data);
        })
    }

    useEffect(() => {
      setTimeout(() => {
        setSignupMessage("");
      }, 5000);
    },[signupMessage]);
    
    if(loading === true) {
      return <Loading />
    }
  return (
    <div className='signup'>
      <Services />
      <div className='signup-body'>
        <div className='signup-body-left'>
          <h2>Create Account</h2>
          <p>
            At Uradi Encore, we invite you to indulge in a world of culinary delights
            and luxurious accommodations. By signing up, you're embarking on a journe
            where every moment is filled with exquisite experiences and unparalleled hospitality.
          </p>
          <h3>Uradi Encore Restaurant & Resort</h3>
          <p>Join Us Today and Embark on a Culinary Journey Like No Other!</p>
          <p className='account-exist'>Already have an account? <a href='/login'>Login</a></p>
          <p className='signup-message' style={{color:"red"}}>{signupMessage}</p>
        </div>
        <div className='signup-body-right'>
          <Formik initialValues={initialValues} onSubmit={onSubmit} >
            <Form>
              <label>First Name</label>
                <ErrorMessage name='fname' component="span" />
                <Field 
                    id="fname" 
                    name="fname" 
                />
              
              <label>Last Name</label>
                <ErrorMessage name='lname' component="span" />
                <Field 
                    id="lname" 
                    name="lname" 
                />

              <label>Email</label>
                <ErrorMessage name='email' component="span" />
                <Field 
                    type="email"
                    id="email" 
                    name="email" 
                    
                />
              

              <label>Password
                <ErrorMessage name='pwd' component="span" />
                <Field 
                    type={pwdType}
                    id="pwd" 
                    name="pwd" 
                />
                <ShowPassword {...{setPwdType}} />
              </label>

              <button type='submit'>SIGN UP</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Signup
