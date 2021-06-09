import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default function DashboardNav(props) {
  // ------LOGOUT Handler
  const logoutHandler = () => {
    props.setLoggedInProps('false');
  };

  return (
    <>
      <Navbar className="bg-light justify-content-between">
        <div className="animate__animated animate__backInLeft">
          Welcome To DashBoard
        </div>

        <div>
          <nav>
            <div className="drop-btn cursor "></div>
            <div className="tooltip"></div>
            <div className="wrapper">
              <ul className="menu-bar">
                <li>
                  <a href="#">
                    <div className="icon">
                      <span className="fas fa-home"></span>
                    </div>
                    Home
                  </a>
                </li>
                <li className="setting-item">
                  <a href="#">
                    <div className="icon">
                      <span className="fas fa-cog"></span>
                    </div>
                    Settings & privacy <i className="fas fa-angle-right"></i>
                  </a>
                </li>
                <li className="help-item">
                  <a href="#">
                    <div className="icon">
                      <span className="fas fa-question-circle"></span>
                    </div>
                    Help & support <i className="fas fa-angle-right"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="icon">
                      <span className="fas fa-user"></span>
                    </div>
                    About us
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="icon">
                      <span className="fas fa-comment-alt"></span>
                    </div>
                    Feedback
                  </a>
                </li>
              </ul>
              <ul className="setting-drop">
                <li className="arrow back-setting-btn">
                  <span className="fas fa-arrow-left"></span>Settings & privacy
                </li>
                <li>
                  <a href="#">
                    <div className="icon">
                      <span className="fas fa-user"></span>
                    </div>
                    Personal info
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="icon">
                      <span className="fas fa-lock"></span>
                    </div>
                    Password
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="icon">
                      <span className="fas fa-address-book"></span>
                    </div>
                    Activity log
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="icon">
                      <span className="fas fa-globe-asia"></span>
                    </div>
                    Languages
                  </a>
                </li>
                <li onClick={logoutHandler}>
                  <a href="#">
                    <div className="icon">
                      <span className="fas fa-sign-out-alt"></span>
                    </div>
                    Log out
                  </a>
                </li>
              </ul>
              <ul className="help-drop">
                <li className="arrow back-help-btn">
                  <span className="fas fa-arrow-left"></span>Help & support
                </li>
                <li>
                  <a href="#">
                    <div className="icon">
                      <span className="fas fa-question-circle"></span>
                    </div>
                    Help centre
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="icon">
                      <span className="fas fa-envelope"></span>
                    </div>
                    Support Inbox
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="icon">
                      <span className="fas fa-comment-alt"></span>
                    </div>
                    Send feedback
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="icon">
                      <span className="fas fa-exclamation-circle"></span>
                    </div>
                    Report problem
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </Navbar>
    </>
  );
}
