import React, {useState} from 'react'
import './Login.css'
import { Link , useHistory} from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
const Signup = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleOnChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value
    });
    setErrors({
      ...errors,
      [e.target.name]: '', // Clear errors when the user starts typing
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    //validate email
    if(!formData.email){
      newErrors.email = 'Email is required';
      valid = false;
    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)){
      newErrors.email = 'Invalid email format';
      valid = false;
    }

    //valid username
    if(!formData.username){
      newErrors.username = 'Username is required';
      valid = false;
    }
    else if(formData.username.length < 4){
      newErrors.username = 'Username must be at least 4 letters long';
      valid = false;
    }

    //valid password
    if(!formData.password){
      newErrors.password = 'Password is required';
      valid = false;
    }else if(formData.password.length < 6){
      newErrors.password = 'Password must be at least 6 character';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(validateForm()){
      axios.post('http://localhost:3000/registrationform', formData)
      .then(response => {
        alert(response.data.message);
        history.push('/login');
      })
      .catch(error =>{
        console.error('There was an error registering.', error);
      });
    }else{
      alert('Please fix the validation errors before submitting');
    }
  };

  return (
   <>
    <div className="center-wrapper">
    <div class="form-container">
        <div class="logo-container">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Signup
        </div>

        <form class="form" onSubmit={handleSubmit}>
          <div class="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" value={formData.email} onChange={handleOnChange} placeholder="Enter your email" required=""/>
          </div>
          <div class="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleOnChange} placeholder="Enter your username" required=""/>
          </div>
          <div class="form-group">
            <label htmlFor="password">Password</label>
            <input type="text" id="password" name="password" value={formData.password} onChange={handleOnChange} placeholder="Enter your password" required=""/>
          </div>

          <button class="form-submit-btn" type="submit">Sign Up</button>
        </form>

        <p class="signup-link">
          Have an account?
        <Link to="/login" class="signup-link link"> Log in</Link>
        </p>
    </div>
    </div>
       
    <div className="errorMessage" style={{textAlign:'center'}}>
      {errors.email && <p className="error">{errors.email}</p>}
      {errors.username && <p className="error">{errors.username}</p>}
      {errors.password && <p className="error">{errors.password}</p>}
    </div>     
   </>
  )
}

export default Signup
