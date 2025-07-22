import React from 'react';
import '../App.css';
import { FaLocationDot, FaMagnifyingGlass, FaBars, FaCartShopping } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <>
      <header>
        <div className="navbar">
          <div className="nav-logo border">
            <div className="logo"></div>
          </div>

          <div className="nav-address border">
            <p className="add-first">Deliver to</p>
            <div className="add-icon">
              <FaLocationDot />
              <p className="add-second">India</p>
            </div>
          </div>

          <div className="search">
            <select className="search-select">
              <option>All</option>
            </select>
            <input placeholder="Search" className="search-input" />
            <div className="search-icon">
              <FaMagnifyingGlass />
            </div>
          </div>

          <div className="nav-signin border">
            <p><span>Hello, sign in</span></p>
            <p className="nav-second">Account & Lists</p>
          </div>

          <div className="nav-return border">
            <p><span>Return</span></p>
            <p className="nav-second">& Orders</p>
          </div>

          <div className="nav-cart border">
            <FaCartShopping />
            <span>Cart</span>
          </div>
        </div>

        <div className="panel">
          <div className="panel-all">
            <FaBars />
            <span>All</span>
          </div>
          <div className="panel-ops">
            <p>Today's Deals</p>
            <p>Customer Service</p>
            <p>Registry</p>
            <p>Gift Cards</p>
            <p>Sell</p>
          </div>
          <div className="panel-deals">
            Shop deals in Electronics
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
