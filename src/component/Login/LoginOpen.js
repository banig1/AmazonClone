import React from 'react'
import { Link } from 'react-router-dom';
import './LoginOpen.css'

const LoginOpen = () => {

    return (
    
            <div className='open'>
            <h1 className='welcome'> Welcome! </h1>
            <p className='logged'>You are now Logged In</p>
            <Link to= '/'>
            <button className='continue'>Continue</button>
            </Link>
            </div>

    )
}

export default LoginOpen;