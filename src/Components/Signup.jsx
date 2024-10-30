import React from 'react'
import './Login.css'
const Signup = () => {
  return (
   <>
    <form className="form-control" action="">
            <p className="title">Signup</p>
            <div className="input-field">
                <input required="" className="input" type="text" />
                <label className="label" for="input">Enter Email</label>
            </div>
            <div className="input-field">
                <input required="" className="input" type="password" />
                <label className="label" for="input">Enter Password</label>
            </div>
            <button className="submit-btn">Sign Up</button>
        </form>
   </>
  )
}

export default Signup
