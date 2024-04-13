import React, { useState } from 'react';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import ErrorLoginPage  from '../component/ErrorLoginPage';
import { Link, Navigate } from 'react-router-dom';
// import SignupImg from '../assets/SignupImg.png'

const LogIn = () => {
 
  const [email, setEmail] = useState('');
  const [userpassword, setUserpassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); 
    try {
        const response = await axios.post('https://rapidclean-laundry.onrender.com/api/user/login', {
          email,
          userpassword,
          agreed
        });
        console.log("User login successful", response.data); // Handle successful response from the backend
        // Navigate to main page if login is successful
       
        setIsLoading(false); 
        setRedirect(true);
      } catch (error) {
        console.error('Error logging in:', error); // Handle error response from the backend
        setLoginError(true); // Set loginError to true
        setIsLoading(false); 
       
      }
    };

  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
      console.log(error);
  };

  return (
   <div className='bg-[#EBEBEB] max-w-screen-2xl mx-auto p-4 flex justify-center items-center min-h-screen'>
     {redirect ? (
       <Navigate to="/" replace /> 
      // Render ErrorPage if loginError is true
      ) : loginError ? (
        <ErrorLoginPage />
      ) : (
    <div className='flex items-center'>
      <div className='bg-white w-60  lg:w-[520px] rounded-[2rem] flex flex-col justify-center items-center py-[4rem] px-[3rem]'>
        <div className='text-left'>
          <h2 className='text-[34px] lg:text-[40px] text-center font-semibold'>Welcome Back</h2>
          <h3 className='text-[24px] font-[500] text-center text-[#646468]'>Please enter your details to login</h3>
        </div>
        <form onSubmit={handleSubmit} className='w-[465] mt-[16px]'>
          <div className='h-[170px] mt-[0.5rem] flex flex-col justify-between'>
           
            <div className='flex mt-[1rem] flex-col '>
              <label htmlFor="email" className='text-[14px]'>Your email address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder='example@gmail.com'
                className='h-[36px] rounded-lg mt-[4px]  outline-none border border-solid border-[#646468]'
                onChange={(e) => {
                    {/* email check */}
                  setEmail(e.target.value);
                  const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
                  setEmailError(emailRegex.test(e.target.value) ? '' : 'Please enter a valid email address');
                }}
                required
              />
              {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
            </div>
            <div className='flex mt-[1rem] flex-col '>
              <label htmlFor="password" className='text-[14px]'>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={userpassword}
                placeholder='******'
                className='h-[36px] rounded-lg mt-[4px]  outline-none border border-solid border-[#646468]'
                onChange={(e) => {
                    {/* Specifies how the password should be */}
                  setUserpassword(e.target.value);
                  const hasUpperCase = /[A-Z]/.test(e.target.value);
                  const hasLowerCase = /[a-z]/.test(e.target.value);
                  const hasLength = e.target.value.length >= 8;
                  setPasswordError(
                    hasUpperCase && hasLowerCase && hasLength ? '' : 'Password must have at least one uppercase, one lowercase, and be at least 8 characters long'
                  );
                }}
               
              />
              {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
            </div>
           
           <div className='flex mt-[1rem] justify-between'>
           <div className='flex '>
              <input
                type="checkbox"
                id="agreed"
                name="agreed"
                checked={agreed}
                className='mt-[4px] border-[#0100BB]'
                onChange={(e) => setAgreed(e.target.checked)}
              
              />
              <label htmlFor="agreed" className='ml-[8px] text-sm'>
                Remember me
            
              </label>
            </div>
            <div>
            <Link to="/forgot-password" className="text-sm text-[#0100BB] underline active:text-customColor2 underline-offset-2" >ForgotPassword</Link>
            </div>
           </div>
          </div>
          <div className='mt-[4rem] h-[132px] flex flex-col items-center  justify-between'>
          <button id="signupButton" className='w-48 lg:w-full h-[36px] active:bg-rose-500 text-white rounded-full bg-[#0100BB] text-center' type="submit">
                  {isLoading ? (
                    <p>  Processing... <span class="icon-[svg-spinners--tadpole] ml-[0.5rem] text-white "></span>{/* Add your SVG animation here */}
                    </p>
                    ):( 'Login'
                    )}
                </button>
            <p className='mt-[0.5rem]'>
              Don't have an account 
              <span className='text-[#0100BB] active:text-rose-500'>
                <a href='/SignUp'> Sign up</a>
              </span>  
            </p>
            <div className=' flex items-center justify-between'>
              <hr  className='border border-[#94A3B8] w-16 lg:w-52'/>
              <p className='text-[#94A3B8] text-[14px]'>Or</p>
              <hr  className='border border-[#94A3B8] w-16 lg:w-52'/>
            </div>
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
          </div>
        </form>
        

      </div>
      {/* <div className=''>
        <img src={SignupImg} alt='Towel stacked together' className='h-48 w-full hidden lg:block object-cover rounded-r-xl md:h-[600px] md:w-full ' />
      </div> */}
    </div>
     )}
   </div>
  );
};

export default LogIn;