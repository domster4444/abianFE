import React from 'react';

import { Redirect } from 'react-router-dom';

import { useEffect } from 'react';

//------------------react tostify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardNav from '../4templates/DashboardNav';
import BreadCrum from '../2molecules/BreadCrum';

export default function WelcomeHome(props) {
  console.log(props.loggedInStateProps);
  useEffect(() => {
    let btn = document.querySelector('#btn');

    let sidebar = document.querySelector('.sidebar');

    btn.addEventListener('mouseenter', () => {
      sidebar.classList.toggle('active');
      if (btn.classList.contains('bx-menu')) {
        btn.classList.replace('bx-menu', 'bx-menu-alt-right');
      } else {
        btn.classList.replace('bx-menu-alt-right', 'bx-menu');
      }
    });
    sidebar.addEventListener('mouseenter', () => {
      sidebar.classList.add('active');
    });
    sidebar.addEventListener('mouseleave', () => {
      sidebar.classList.remove('active');
    });

    //?dropdown js
    const drop_btn = document.querySelector('.drop-btn');
    const tooltip = document.querySelector('.tooltip');
    const menu_wrapper = document.querySelector('.wrapper');
    const menu_bar = document.querySelector('.menu-bar');
    const setting_drop = document.querySelector('.setting-drop');
    const help_drop = document.querySelector('.help-drop');
    const setting_item = document.querySelector('.setting-item');
    const help_item = document.querySelector('.help-item');
    const setting_btn = document.querySelector('.back-setting-btn');
    const help_btn = document.querySelector('.back-help-btn');
    drop_btn.onclick = () => {
      menu_wrapper.classList.toggle('show');
      tooltip.classList.toggle('show');
    };
    setting_item.onclick = () => {
      menu_bar.style.marginLeft = '-400px';
      setTimeout(() => {
        setting_drop.style.display = 'block';
      }, 100);
    };
    help_item.onclick = () => {
      menu_bar.style.marginLeft = '-400px';
      setTimeout(() => {
        help_drop.style.display = 'block';
      }, 100);
    };
    setting_btn.onclick = () => {
      menu_bar.style.marginLeft = '0px';
      setting_drop.style.display = 'none';
    };
    help_btn.onclick = () => {
      help_drop.style.display = 'none';
      menu_bar.style.marginLeft = '0px';
    };

    //?Toast on firt render
    toast('Successfully loggedin');
  }, []);

  if (props.loggedInStateProps === 'true') {
    //?sidebar admin animation

    return (
      <>
        <div id="welcomeHome">
          <div className="sidebar">
            <div className="logo_content">
              <div className="logo">
                <i className="bx bx-shape-triangle"></i>
                <div className="logo_name">Abian</div>
              </div>
              <i className="bx bx-menu" id="btn" />
            </div>
            <ul className="nav_list">
              <li>
                <i className="bx bx-search" />
                <input type="text" placeholder="Search..." />
                <span className="tooltip">Search</span>
              </li>
              <li>
                <a href="#">
                  <i className="bx bx-grid-alt" />
                  <span className="links_name">Dashboard</span>
                </a>
                <span className="tooltip">Dashboard</span>
              </li>
              <li>
                <a href="#">
                  <i className="bx bx-user" />
                  <span className="links_name">User</span>
                </a>
                <span className="tooltip">User</span>
              </li>
              <li>
                <a href="#">
                  <i className="bx bx-chat" />
                  <span className="links_name">Messages</span>
                </a>
                <span className="tooltip">Messages</span>
              </li>
              <li>
                <a href="#">
                  <i className="bx bx-pie-chart-alt-2" />
                  <span className="links_name">Analytics</span>
                </a>
                <span className="tooltip">Analytics</span>
              </li>
              <li>
                <a href="#">
                  <i className="bx bx-folder" />
                  <span className="links_name">File Manager</span>
                </a>
                <span className="tooltip">Files</span>
              </li>
              <li>
                <a href="#">
                  <i className="bx bx-cart-alt" />
                  <span className="links_name">Order</span>
                </a>
                <span className="tooltip">Order</span>
              </li>
              <li>
                <a href="#">
                  <i className="bx bx-heart" />
                  <span className="links_name">Saved</span>
                </a>
                <span className="tooltip">Saved</span>
              </li>
              <li>
                <a href="#">
                  <i className="bx bx-cog" />
                  <span className="links_name">Setting</span>
                </a>
                <span className="tooltip">Setting</span>
              </li>
            </ul>
            <div className="profile_content">
              <div className="profile">
                <div className="profile_details">
                  {/*<img src="profile.jpg" alt="">*/}
                  <div className="name_job">
                    <div className="name">Prem Shahi</div>
                    <div className="job">Web Designer</div>
                  </div>
                </div>
                <i className="bx bx-log-out" id="log_out" />
              </div>
            </div>
          </div>
          <div className="home_content">
            <div className="text">
              {/* navbar start  */}
              <DashboardNav setLoggedInProps={props.setLoggedInProps} />
              {/* ____________bread crumb start  */}
              <BreadCrum />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Redirect to="/login" />;
      </>
    );
  }
}
