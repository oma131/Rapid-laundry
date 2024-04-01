// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import axios from "axios";

const Test = () => {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState("")
    const [userpassword, setUserPassword] = useState("");
    const [register, setRegister] = useState(false);

    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        // make a popup alert showing the "submitted" text
        console.log('form submitted')

        axios.post('https://rapidclean-laundry.onrender.com/api/user/register', {
            email: email,
            userpassword: userpassword
          })
          .then(function (response) {
            console.log(response.data);
            alert("Submited");
          })
          .catch(function (error) {
            console.log(error);
            console.log(error.response)
            alert(error.response.data.error.message)
          });
      }
    
  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // style={{ border: formData.emailError ? '1px solid red' : '' }}
            required
          />
          {/* {formData.emailError && <p style={{ color: 'red' }}>{formData.emailError}</p>} */}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userpassword}
            onChange={(e) => setUserPassword(e.target.value)}
            required
          />
          {/* {formData.passwordError && <p style={{ color: 'red' }}>{formData.passwordError}</p>} */}
        </div>
        {/* <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {formData.confirmPasswordError && <p style={{ color: 'red' }}>{formData.confirmPasswordError}</p>}
        </div> */}
        {/* <div>
          <input
            type="checkbox"
            id="agreed"
            name="agreed"
            // checked={formData.agreed}
            // onChange={handleChange}
            required
          />
          <label htmlFor="agreed">I agree to the terms and conditions</label>
        </div> */}
        <button id="signupButton" onClick={(e) => handleSubmit(e)} type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default Test