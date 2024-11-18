import React from 'react'
import './Pricing.css';
const Pricing = () => {
  return (
    <div>
        <h1 className='price-head'>App Pricing</h1>
        <p className='price-subhead'>
            Generate high-volume questions and answers with our Pro plan. Cancel any time.
        </p>



        <div className="plans-container">
            {/* Plan 1 */}
        <div class="plan">
            <div class="inner">
                <span class="pricing">
                <span>
                    $0 <small>/ m</small>
                </span>
                </span>
                <p class="title">Free</p>
                <p class="info">This plan is perfect for individuals or small teams just getting started with question generation.</p>
                <ul class="features">
                    <li>
                        <span class="icon">
                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                        </svg>
                        </span>
                        <span><strong>5</strong> team members</span>
                    </li>
                    <li>
                        <span class="icon">
                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                        </svg>
                        </span>
                        <span><strong>20</strong> Free Runs </span>
                    </li>
                    <li>
                        <span class="icon">
                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                        </svg>
                        </span>
                        <span>no File sharing</span>
                    </li>
                </ul>
                <div class="action">
                    <a class="button" href="#">
                        Choose plan
                    </a>
                </div>
            </div>
        </div>




        {/* Plan 2 */}
        <div class="plan">
            <div class="inner">
                <span class="pricing">
                <span>
                    $49 <small>/ m</small>
                </span>
                </span>
                <p class="title">Professional</p>
                <p class="info">This plan is for those who have a team already and running a large business.</p>
                <ul class="features">
                    <li>
                        <span class="icon">
                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                        </svg>
                        </span>
                        <span><strong>20</strong> team members</span>
                    </li>
                    <li>
                        <span class="icon">
                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                        </svg>
                        </span>
                        <span>Plan <strong>team meetings</strong></span>
                    </li>
                    <li>
                        <span class="icon">
                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                        </svg>
                        </span>
                        <span>File sharing</span>
                    </li>
                </ul>
                <div class="action">
                    <a class="button" href="#">
                        Choose plan
                    </a>
                </div>
            </div>
        </div>
        </div>



    </div>
  )
}

export default Pricing
