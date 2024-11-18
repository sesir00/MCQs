import React ,{useState} from 'react'
import './Login.css'
import { Link, useHistory} from 'react-router-dom/cjs/react-router-dom.min'
import axios from 'axios';
const Login = () => {
  const history = useHistory();
  const handleButtonClick = () => {
    history.push('/');
  }

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/login', formData)
      .then(response => {
        if(response.data.success){
          history.push('/upload');
        }else{
          alert(response.data.message);
        }
      })
      .catch(error => {
        console.error("There was an error logging in.", error);
        setError("An error occured. Please try again.");
      });
  }
  return (
    <>
      <button className='backbtn' onClick={handleButtonClick}>
        <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
        <span>Back</span>
      </button>



      <div className="center-wrapper">
      <div class="form-container">
        <div class="logo-container">
          Login
        </div>

        <form class="form" onSubmit={handleSubmit}>
          <div class="form-group">
            <label hrmlFor="username">Username</label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleOnChange} placeholder="Enter your username" required=""/>
          </div>
          <div class="form-group">
            <label htmlFor="password">Password</label>
            <input type="text" id="password" name="password" value={formData.password} onChange={handleOnChange} placeholder="Enter your password" required=""/>
          </div>

          

          <button class="form-submit-btn" type="submit">Login</button>
        </form>

        <p class="signup-link">
          Don't have an account?
        <Link to="/signup" class="signup-link link"> Sign up now</Link>
        </p>
      </div>
      </div>
    </>
  )
}

export default Login