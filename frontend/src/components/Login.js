import React, { useState } from 'react';
import './Login.css'; // Assuming you have your CSS in a file named styles.css

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSwitch = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className='contaaa'>

    <div className="contaaaa">
      <div className={`overlay ${isSignUp ? 'open-sign-up' : 'open-sign-in'}`} id="overlay">
        <div className="sign-in" id="sign-in">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <button className="switch-button" id="slide-right-button" onClick={handleSwitch}>Sign In</button>
        </div>
        <div className="sign-up" id="sign-up">
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start a journey with us</p>
          <button className="switch-button" id="slide-left-button" onClick={handleSwitch}>Sign Up</button>
        </div>
      </div>
      <div className="form">
        <div className={`sign-in ${isSignUp ? 'form-left-slide-out' : 'form-left-slide-in'}`} id="sign-in-info">
          <h1>Sign In</h1>
          <div className="social-media-buttons">
            <div className="icon">
              <svg viewBox="0 0 24 24">
                {/* Example social media SVG icon */}
                <path fill="#000000" d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
              </svg>
            </div>
            {/* Add more social media icons as needed */}
          </div>
          <p className="small">or use your email account:</p>
          <form id="sign-in-form">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <p className="forgot-password">Forgot your password?</p>
            <button className="control-button in">Sign In</button>
          </form>
        </div>
        <div className={`sign-up ${isSignUp ? 'form-right-slide-in' : 'form-right-slide-out'}`} id="sign-up-info">
          <h1>Create Account</h1>
          <div className="social-media-buttons">
            <div className="icon">
              <svg viewBox="0 0 24 24">
                {/* Example social media SVG icon */}
                <path fill="#000000" d="M23,11H21V9H19V11H17V13H19V15H21V13H23M8,11V13.4H12C11.8,14.4 10.8,16.4 8,16.4C5.6,16.4 3.7,14.4 3.7,12C3.7,9.6 5.6,7.6 8,7.6C9.4,7.6 10.3,8.2 10.8,8.7L12.7,6.9C11.5,5.7 9.9,5 8,5C4.1,5 1,8.1 1,12C1,15.9 4.1,19 8,19C12,19 14.7,16.2 14.7,12.2C14.7,11.7 14.7,11.4 14.6,11H8Z" />
              </svg>
            </div>
            {/* Add more social media icons as needed */}
          </div>
          <p className="small">or use your email for registration:</p>
          <form id="sign-up-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="control-button up">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
