import React from 'react'
import './Signup.css'

const Signup = () => {
  return (
    <div>
        <div className='conatinersignin'>
            <div id='imgsinup'>
                <img src='cerveau.jpg'></img>
            </div>
            <div className='containsignup'>
                <div className='containtitle'>
                    <h1 id='titlesignup'>Sign UP</h1>
                    <p id='dessignup'>Loremloremloremloremloremloremloremloremlorem</p>
                </div>
                <div className='formsignup'>
                    <input type='txt' placeholder='write your name'></input>
                    <input type='email' placeholder='write your email'></input>
                    <input type='password' placeholder='password'></input>
                    <input type='password' placeholder='confirmpassword'></input>
                </div>
                
               <div className='containsubmitsignup'>
               <div className='submitsignup'>
                    <span>Create account</span>
                </div>
               </div>
                <div className='containlogin'><p>already have an account?<span id='login'>login</span></p></div>

            </div>
        </div>
    </div>
  )
}

export default Signup