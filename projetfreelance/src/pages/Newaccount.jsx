import React from 'react'
import SignUpInput from '../components/SignUp/SignUpInput'
import SignIn from '../components/buttons/SignIn'
import './Newaccount.css'
import LoginInput from '../components/login/LoginInput'

function Newaccount() {
    return (
        <div>
            <div className='titre'>
                <p className='titre1'>Create a New Account</p>
            </div>
            <div className='inputcontainer22'>
                <SignUpInput text="Username" type="email"></SignUpInput>
                <SignUpInput text="Email" type="email"></SignUpInput>
                <SignUpInput text="Password" type="password"></SignUpInput>
                <SignUpInput text="Confirm password" type="password" />

            </div>
            <div className='agree'>
                <label for="remember-me" class="checkbox-label">
                    <input type="checkbox" id="remember-me" name="remember-me" class="checkbox">
                    </input>
                    <p className='checkbox-label'>I agree to the Terms of Service & Privacy Policy</p>
                </label>
            </div>
            <div className='button'>
               <SignIn text='Sign Up'></SignIn>
            </div>
            






        </div>
    )
}

export default Newaccount