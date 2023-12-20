import React from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href="/home">
            <img src={Logo} alt="" className="w-30 h-24" />
          
          </a>
          <a href="/contact">
            <button className='btn btn-sm'>Work with me</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
