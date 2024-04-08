
import React from 'react';
import { motion } from 'framer-motion';

// Signup page 
const SignUpSucessfulPage = () => {
  return (
    <div class="">
       
     <div className='items-center gap-y-[2rem] justify-center pt-[2rem] pb-[5rem] bg-white w-[17rem] rounded-[1rem] flex flex-col'>
     { /* Animated svg */}
        <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        viewBox="0 0 24 24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ stroke: '#28a745', fill: 'none' }}
        // animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      >
        <motion.g
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <circle cx="12" cy="12" r="10" />
        </motion.g>
        <motion.g
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.path
            d="M7 13l3 3 7-7"
            strokeDasharray="24"
            strokeDashoffset="24"
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, repeat: 1, ease: 'linear' }} 
          />
        </motion.g>
      </motion.svg>
        

     {/* Congratulations text */}
        <p className='text-center'>
            Congratulations You have, <br />successfully created your <br />account
        </p>
        <button id="signupButton" className='w-[9rem] h-[2rem] text-white rounded-[0.3rem] bg-green-500 text-center' type="submit">Continue</button>
         </div>
    </div>
  );
};

export default SignUpSucessfulPage;
