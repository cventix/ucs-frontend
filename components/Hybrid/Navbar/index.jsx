/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect, Fragment } from 'react';
import Link from 'next/link';
import navStyles from './navbar.module.scss';
import Login from '../Login';
import Register from '../Login/Register';
import UserItems from './UserItems';

function Navbar(props) {
  const [openedLogin, setOpenedLogin] = useState(false);
  const [openedRegister, setOpenedRegister] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setToken(localStorage?.getItem('token'));
      setUser(JSON.parse(localStorage?.getItem('user')));
    }
  }, []);

  const { className } = props;
  return (
    <div className={className}>
      <div className={navStyles['nav-link-desktop']}>
        <Link href="/">
          <a className={navStyles['nav-link'] + ' w--current'}>HOME</a>
        </Link>
      </div>
      <div className={navStyles['nav-link-desktop']}>
        <Link href="/who-we-are">
          <a className={navStyles['nav-link']}>WHO WE ARE</a>
        </Link>
      </div>
      <div className={navStyles['nav-link-desktop']}>
        <Link href="/what-we-do">
          <a className={navStyles['nav-link']}>WHAT WE DO</a>
        </Link>
      </div>
      <div className={navStyles['nav-link-desktop']}>
        <Link href="/our-events">
          <a className={navStyles['nav-link']}>OUR EVENTS</a>
        </Link>
      </div>
      <div className={navStyles['nav-link-desktop']}>
        <Link href="/work-with-us">
          <a className={navStyles['nav-link']}>WORK WITH US</a>
        </Link>
      </div>
      {!token ? (
        <Fragment>
          <Link href="#">
            <a
              data-ms-content="!members"
              data-w-id="2c2b1e03-c441-0e65-273f-2d66cf5365e0"
              className={navStyles['signup-btn'] + ' w-button'}
              onClick={() => {
                setOpenedRegister(true);
              }}
            >
              Sign up for our 30-day trial
            </a>
          </Link>
          <Link href="#">
            <a
              id="login-button"
              data-ms-content="!members"
              data-w-id="8ceaea60-d025-b698-9d5e-55dfce352604"
              className={navStyles['login-btn'] + ' w-button'}
              onClick={() => {
                setOpenedLogin(true);
              }}
            >
              Login
            </a>
          </Link>
        </Fragment>
      ) : (
        <UserItems user={user} />
      )}
      {openedLogin && <Login closeHandler={setOpenedLogin} />}
      {openedRegister && <Register closeHandler={setOpenedRegister} />}
    </div>
  );
}

export default Navbar;
