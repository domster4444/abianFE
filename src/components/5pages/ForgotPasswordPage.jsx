import { Redirect } from 'react-router-dom';

import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div id="loginPage">
      <div className="login-div">
        <div className="logo"></div>
        <div className="title">FORGOT PASSWORD</div>
        <div className="sub-title">Abian Service</div>
        <div className="fields">
          <div className="username">
            <svg fill="#999" viewBox="0 0 1024 1024">
              <path
                className="path1"
                d="M896 307.2h-819.2c-42.347 0-76.8 34.453-76.8 76.8v460.8c0 42.349 34.453 76.8 76.8 76.8h819.2c42.349 0 76.8-34.451 76.8-76.8v-460.8c0-42.347-34.451-76.8-76.8-76.8zM896 358.4c1.514 0 2.99 0.158 4.434 0.411l-385.632 257.090c-14.862 9.907-41.938 9.907-56.802 0l-385.634-257.090c1.443-0.253 2.92-0.411 4.434-0.411h819.2zM896 870.4h-819.2c-14.115 0-25.6-11.485-25.6-25.6v-438.566l378.4 252.267c15.925 10.618 36.363 15.925 56.8 15.925s40.877-5.307 56.802-15.925l378.398-252.267v438.566c0 14.115-11.485 25.6-25.6 25.6z"
              ></path>
            </svg>
            <input
              type="username"
              className="user-input"
              placeholder="username"
            />
          </div>
        </div>
        <button className="signin-button">NEXT</button>
        <div className="link">
          <Link to="/login">Login? </Link> or <Link to="/signup"> Sign up</Link>
        </div>
      </div>
    </div>
  );
}
