import React, { useContext, useEffect, useRef, useState } from 'react'
import { Formik, Form, Field } from 'formik';
import Services from './ServicesHeader';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../helpers/AuthContext';
import Loading from './Loading';
import ShowPassword from './showpassword.m';

function Login() {
  const [loginMessage, setLoginMessage] = useState("");
  const history = useNavigate();
  const initialValues = ({
    email: "",
    pwd: ""
  })
  const { setAuthState, setLoginState } = useContext(AuthContext);
  const [loading, setLoading] = useState(null);
  const [pwdType, setPwdType] = useState('password');
  const [pwdCode, setPwdCode] = useState('');
  const [pwdEmail, setPwdEmail] = useState('');
  const [pwdChange, setPwdChange] = useState({
    pwd1: '',
    pwd2: ''
  })
  const randomCode = useRef(0);
  const [newPwd, setNewPwd] = useState(false);
  const [pwdMessage, setPwdMessage] = useState('');
  const [pwdNews, setPwdNews] = useState('');
  const [popoverDisplay, setPopoverDisplay] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);

  const onSubmit = (data) => {
    // axios.post('http://localhost:3001/login', data, setLoading(true))
    axios.post('https://uradi-encore-server.onrender.com/login', data, setLoading(true))
    .then((response) => {
      if(response.data.error) {
        setLoading(false);
        setLoginMessage(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data);
        setAuthState(true);
        setLoading(false);
        history('/account');
      }
      
    })
  }

  const handleSendEmail = () => {
    setPwdNews('');
    setPwdMessage('');
    randomCode.current = (Math.floor(Math.random() * 100000))
    // axios.post('http://localhost:3001/forgotpassword', {code: randomCode, email: pwdEmail}, setBtnLoading(true))
    axios.post('https://uradi-encore-server.onrender.com/forgotpassword', {code: randomCode, email: pwdEmail}, setBtnLoading(true))
    .then(response => {
      setBtnLoading(false);
      if(response.data.success) {
        setPwdNews("code sent");
      } else {
        setPwdNews("code not sent, try again later");
      }

      setTimeout(() => {
        console.log(randomCode.current, pwdCode);
          randomCode.current = 0;
          setNewPwd(false);
          setPwdCode('');
          setPwdEmail('');
          setPwdChange({
            pwd1: '', pwd2: ''
          })
          setPwdMessage('');
      }, 900000);
    })
  }

  const handleSendCode = () => {
    if(randomCode.current.toString() === pwdCode) {
      setNewPwd(true);
      setPwdMessage('');
    } else {
      setNewPwd(false);
      setPwdMessage("Code does not match!");
    }
  }

  const handleChangePassword = () => {
    if(pwdChange.pwd1 === pwdChange.pwd2) {
      // axios.post('http://localhost:3001/changepassword', {pwd : pwdChange.pwd1, email: pwdEmail})
      axios.post('https://uradi-encore-server.onrender.com/changepassword', {pwd : pwdChange.pwd1, email: pwdEmail})
      .then((response) => {
        if(response.data.success) {
          setLoginState("Password changed succesfully");
          history('/');
        }
      })
    } else {
      setPwdMessage("Passwords do not match");
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setLoginMessage("");
    }, 6000);
  }, [loginMessage])

  if(loading === true) {
    return <Loading />
  }
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

              <label>Password
              <Field
              type={pwdType}
              id="pwd"
              name="pwd" />
              <ShowPassword {...{setPwdType}} />
              </label>

              <button type='submit'>Login</button>
            </Form>
          </Formik>
          <button className='forgot-pwd' onClick={() => setPopoverDisplay("flex")} >Forgotten password ?</button>
          <p>Don't have an account? <a href='/signup' >Signup</a></p>
          
        </div>
        <div className='login-body-right'>
        <p style={{color:"red"}}>{loginMessage}</p>
        </div>
        {
          popoverDisplay ? 
          <div id='pwd-popover'>
            <div className='popover-header'> <button onClick={() => setPopoverDisplay(false)}>X</button> </div>
              <h3>Forgot password</h3>
              {
                newPwd === false ? 
                <>
                <h4 style={{color: "green"}}> {pwdNews} </h4>
                <input type='email' placeholder='Enter your email' value={pwdEmail} onChange={(e) =>setPwdEmail(e.target.value)} />
                <button disabled={btnLoading} className='pop-btn' onClick={handleSendEmail}>{ btnLoading ? 'sending...' : 'Send code' }</button>

                <input type='text' placeholder='Enter the code' value={pwdCode} onChange={(e) => setPwdCode(e.target.value) } />
                <p style={{ color: "red" }}>{ pwdMessage }</p>
                <button className='pop-btn' onClick={handleSendCode}>Confirm</button>
                </> : 
                <>
                  <input type='password' placeholder='Enter new password' value={pwdChange.pwd1} onChange={(e) =>setPwdChange({...pwdChange, pwd1: e.target.value})} />
                  <input type='password' placeholder='Confirm new password' value={pwdChange.pwd2} onChange={(e) =>setPwdChange({...pwdChange, pwd2: e.target.value})} />
                  <p style={{ color: "red" }}>{ pwdMessage }</p>
                  <button className='pop-btn' onClick={handleChangePassword}>SAVE</button>
                </>
              }
          </div> : ''
        }
      </div>
    </div>
  )
}

export default Login
