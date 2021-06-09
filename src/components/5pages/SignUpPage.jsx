import { Link } from 'react-router-dom';

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

//------------------react tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  handlerNameMethod = (event) => {
    this.setState({ username: event.target.value });
    console.log(event.target.value);
    // ? event.target.elementAttributeName
  };
  handlerEmailMethod = (event) => {
    this.setState({ email: event.target.value });
    console.log(event.target.value);
    // ? event.target.elementAttributeName
  };
  handlerPasswordMethod = (event) => {
    this.setState({ password: event.target.value });
    console.log(event.target.value);
    // ? event.target.elementAttributeName
  };
  handlerSubmitMethod = (e) => {
    e.preventDefault();
    let log = console.log;
    log(this.state.username);
    log(this.state.email);
    log(this.state.password);

    let toBeSent = {
      userName: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };

    fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify(toBeSent),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        if (json.message === 'success') {
          toast.success('Successfully Account Created');
        } else {
          throw new Error('sorry');
          toast.error('Sorry Something Went Wrong');
        }
      })
      .catch((error) => {
        if (error) {
          alert('Sorry Try Again');
        }
      });
  };

  // method of  class js

  render() {
    console.log(this.props.isLoggedInProps);
    if (this.props.isLoggedInProps === 'false') {
      return (
        <div>
          <div id="loginPage">
            <form onSubmit={this.handlerSubmitMethod}>
              <div className="login-div">
                <div className="logo"></div>
                <div className="title">SIGNUP</div>
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
                      value={this.state.username}
                      onChange={this.handlerNameMethod}
                      required
                      type="username"
                      className="user-input"
                      placeholder="username"
                    />
                  </div>
                  {/* <div className="username">
              <span style={{ fontSize: '3.5rem', color: 'rgb(153,153,153)' }}>
                &nbsp;&nbsp;&nbsp;&#128241;&nbsp;&nbsp;
              </span>
              <input
              required
                type="number"
                className="user-input"
                placeholder="phone number"
              />
            </div> */}
                  <div className="password">
                    <svg fill="#999" viewBox="0 0 1024 1024">
                      <path
                        className="path1"
                        d="M896 307.2h-819.2c-42.347 0-76.8 34.453-76.8 76.8v460.8c0 42.349 34.453 76.8 76.8 76.8h819.2c42.349 0 76.8-34.451 76.8-76.8v-460.8c0-42.347-34.451-76.8-76.8-76.8zM896 358.4c1.514 0 2.99 0.158 4.434 0.411l-385.632 257.090c-14.862 9.907-41.938 9.907-56.802 0l-385.634-257.090c1.443-0.253 2.92-0.411 4.434-0.411h819.2zM896 870.4h-819.2c-14.115 0-25.6-11.485-25.6-25.6v-438.566l378.4 252.267c15.925 10.618 36.363 15.925 56.8 15.925s40.877-5.307 56.802-15.925l378.398-252.267v438.566c0 14.115-11.485 25.6-25.6 25.6z"
                      ></path>
                      handlerEmailMethod
                    </svg>
                    <input
                      value={this.state.email}
                      onChange={this.handlerEmailMethod}
                      required
                      type="email"
                      className="pass-input"
                      placeholder="email"
                    />
                  </div>
                  <div className="password">
                    <svg fill="#999" viewBox="0 0 1024 1024">
                      <path
                        className="path1"
                        d="M742.4 409.6h-25.6v-76.8c0-127.043-103.357-230.4-230.4-230.4s-230.4 103.357-230.4 230.4v76.8h-25.6c-42.347 0-76.8 34.453-76.8 76.8v409.6c0 42.347 34.453 76.8 76.8 76.8h512c42.347 0 76.8-34.453 76.8-76.8v-409.6c0-42.347-34.453-76.8-76.8-76.8zM307.2 332.8c0-98.811 80.389-179.2 179.2-179.2s179.2 80.389 179.2 179.2v76.8h-358.4v-76.8zM768 896c0 14.115-11.485 25.6-25.6 25.6h-512c-14.115 0-25.6-11.485-25.6-25.6v-409.6c0-14.115 11.485-25.6 25.6-25.6h512c14.115 0 25.6 11.485 25.6 25.6v409.6z"
                      ></path>
                    </svg>
                    <input
                      value={this.state.password}
                      onChange={this.handlerPasswordMethod}
                      required
                      type="password"
                      className="pass-input"
                      placeholder="password"
                    />
                  </div>
                </div>
                <button type="submit" className="signin-button">
                  Signup
                </button>
                <div className="link">
                  <Link to="/login">Login?</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    } else {
      return <Redirect to="/welcomehome" />;
    }
  }
}

export default SignUpPage;
