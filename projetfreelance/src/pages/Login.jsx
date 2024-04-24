import React from 'react'
import { Link } from 'react-router-dom'
import Buttonnav from '../components/Navbar/Buttonnav'
import Create from '../components/buttons/Create'
import Delete from '../components/buttons/Delete'
import Submit from '../components/buttons/Submit'
import Export from '../components/buttons/Export'
import Cancel from '../components/buttons/Cancel'
import SignIn from '../components/buttons/SignIn'
import './Login.css'
import Logo from '../assets/Logo.png'
import Navbar from '../components/Navbar/Navbar'
import LoginInput from '../components/login/LoginInput'



function Login() {
    return (
        <div className='container111'>
            <div className='Imagecontainer111'>
                <img src={Logo}></img>
            </div>
            <div className='Inputcontainer111'>
                <LoginInput text="E-mail:" type="email"></LoginInput>
                <LoginInput text="Password :" type="password"></LoginInput>
                <label for="remember-me" class="checkbox-label">
                    <input type="checkbox" id="remember-me" name="remember-me" class="checkbox">
                    </input>
                    <p className='checkbox-label'>Remember me</p>
                </label>
                <div className='signinbutton111'>
                    <SignIn text="Sign In"></SignIn>
                    <p className='texte'>Your first time here? <Link to='/NEW' style={{color:"black"}}><u>Click here to get started!</u></Link>  </p>
                </div>
            </div>




        </div>
    )
}

export default Login