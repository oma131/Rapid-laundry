import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword =() => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);
  const [resetError, setResetError] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      // Assuming you have an API endpoint for resetting the password
      const response = await axios.post('https://rapidclean-laundry.onrender.com/api/user/resetPasssword', {
        email
      });
      
      // Assuming the backend responds with success message
      setResetSuccess(true);
    } catch (error) {
      console.error('Error resetting password:', error);
      setResetError('Error resetting password. Please try again later.');
    }
  };

  return (
    // <div className='bg-[#EBEBEB] max-w-screen-2xl mx-auto p-4 flex justify-center items-center min-h-screen'>
    //   <div className='flex items-center'>
    //     <div className='bg-white w-60  lg:w-[577px] rounded-lg flex flex-col justify-center p-6'>
    //       <div className='w-[489px]'>
    //         <h2 className='text-[34px] lg:text-[40px] font-semibold text-center'>Forgot Password?</h2>
    //         <p className='text-sm lg:text-xl font-medium text-[#646468] mt-[8px]'>Please enter your email below to receive a password reset link</p>
    //         {resetSuccess ? (
    //           <p>An email with password reset instructions has been sent to your email address.</p>
    //         ) : (
    //           <form onSubmit={handleResetPassword} className='w-[465] mt-[16px]'>
    //             <div className='flex flex-col mt-[52px]'>
    //               <label htmlFor="email" className='text-sm'>Your email address</label>
    //               <input
    //                 type="email"
    //                 id="email"
    //                 name="email"
    //                 value={email}
    //                 className='h-[36px] rounded-lg mt-[4px]  outline-none border border-solid border-[#646468]'
    //                 onChange={(e) => {
    //                   setEmail(e.target.value);
    //                   const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    //                   setEmailError(emailRegex.test(e.target.value) ? '' : 'Please enter a valid email address');
    //                 }}
    //                 required
    //               />
    //               {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
    //             </div>
    //             {resetError && <p style={{ color: 'red' }}>{resetError}</p>}
    //             <div className='flex justify-center mt-[24px]'>
    //             <button type="submit" className='w-[465px] h-[36px] text-white rounded-full bg-[#0100BB] text-center' onClick={handleResetPassword}>Reset Password</button>
    //             </div>
    //           </form>
    //         )}
    //         <p className='text-base font-normal text-center mt-[10px]'>Don’t have an account? <span className='text-[#0100BB]'><a href='/signup'> Sign Up</a></span>  </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='bg-[#EBEBEB] max-w-screen-2xl mx-auto p-4 flex justify-center items-center min-h-screen'>
    <div className='flex items-center'>
      <div className='bg-white w-60  lg:w-[577px] rounded-lg flex flex-col justify-center p-6'>
        <div>
          <h2 className='text-2xl lg:text-4xl text-center font-semibold'>Forgot Password</h2>
          <h3 className='text-xs lg:text-2xl font-[500] text-[#646468] mt-2'>Please enter your email below to receive a password reset link</h3>
        </div>
        {resetSuccess ? (
          <p>An email with password reset instructions has been sent to your email address.</p>
        ) : (
          <form onSubmit={handleResetPassword} className='w-[465] mt-14'>
            <div className=' flex flex-col justify-between'>
              
              <div className='flex flex-col '>
                <label htmlFor="email" className='text-[14px]'>Your email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  className='h-[36px] rounded-lg mt-[4px]  outline-none border border-solid border-[#646468]'
                  onChange={(e) => {
                    setEmail(e.target.value);
                    const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
                    setEmailError(emailRegex.test(e.target.value) ? '' : 'Please enter a valid email address');
                  }}
                  required
                />
                {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
              </div> 
              {resetError && <p style={{ color: 'red' }}>{resetError}</p>} 
            </div>
            <div className='mt-6 flex flex-col items-center  justify-between'>
              <button id="signupButton" className='w-48 lg:w-full h-[36px] text-white rounded-full bg-[#0100BB] text-center' type="submit">Sign Up</button>
              
            </div>
        </form>
        )}
        <p className='text-base font-normal text-center mt-[10px]'>Don’t have an account? <span className='text-[#0100BB]'><a href='/signup'> Sign Up</a></span>  </p>
      </div>
    </div>
    
   </div>
  );
};

export default ForgotPassword;
