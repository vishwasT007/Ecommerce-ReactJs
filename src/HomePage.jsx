import React from "react";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className='container'>
      <div className='directory-menu'>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Hats</h1>
            <span className='sub-title'>Shop Now</span>
          </div>
        </div>

        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>SHoes</h1>
            <span className='sub-title'>Shop Now</span>
          </div>
        </div>

        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Jackets</h1>
            <span className='sub-title'>Shop Now</span>
          </div>
        </div>

        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Mobiles</h1>
            <span className='sub-title'>Shop Now</span>
          </div>
        </div>

        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Sabji</h1>
            <span className='sub-title'>Shop Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
