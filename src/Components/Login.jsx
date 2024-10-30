import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <>
        <form className="form-control" action="">
            <p className="title">Login</p>
            <div className="input-field">
                <input required="" className="input" type="text" />
                <label className="label" for="input">Enter Email</label>
            </div>
            <div className="input-field">
                <input required="" className="input" type="password" />
                <label className="label" for="input">Enter Password</label>
            </div>
            <a>Forgot your password?</a>
            <button className="submit-btn">Sign In</button>
        </form>

    </>
  )
}

export default Login