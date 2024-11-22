import {useState} from 'react'
import './Login.css'
import { Link , useHistory} from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
const Signup = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
    gender: '',
    subscription: "0" ,
    role: 'user'
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
    gender: ''
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

    //valid name
    if(!formData.name){
      newErrors.name = 'name is required';
      valid = false;
    }
    else if(formData.name.length < 4){
      newErrors.name = 'name must be at least 4 letters long';
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

    //valid confirm password
    if(formData.password !== formData.confirm_password){
      newErrors.confirm_password = 'Passwords do not match';
      valid = false;
    }

    //validate gender
    if(!formData.gender){
      newErrors.gender = 'Gender is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(formData)


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
    <div className="form-container">
        <div className="logo-container">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Signup
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" value={formData.email} onChange={handleOnChange} placeholder="Enter your email" required=""/>
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group1">
            <label htmlFor="gender">Gender</label>
            <div className="radio-container">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleOnChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleOnChange}
                />
                Female
              </label>
            </div>
            {errors.gender && <p className="error">{errors.gender}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="name">name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleOnChange} placeholder="Enter your name" required=""/>
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="text" id="password" name="password" value={formData.password} onChange={handleOnChange} placeholder="Enter your password" required=""/>
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="form-group">
              <label htmlFor="confirm_password">Confirm Password</label>
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleOnChange}
                placeholder="Confirm your password"
                required=""
              />
              {errors.confirm_password && <p className="error">{errors.confirm_password}</p>}
            </div>

          <button className="form-submit-btn" type="submit">Sign Up</button>
        </form>

        <p className="signup-link">
          Have an account?
        <Link to="/login" class="signup-link link"> Log in</Link>
        </p>
    </div>
    </div>
       
    <div className="errorMessage" style={{textAlign:'center'}}>
     
    </div>     
   </>
  )
}

export default Signup