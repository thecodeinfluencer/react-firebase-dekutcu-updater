import React from 'react';
import icon from '../../img/icon.png';

export default function Header() {
  return (
    <header id='header' className='header'>
      <div className='navbar-area'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-12'>
              <nav className='navbar navbar-expand-lg'>
                <a className='navbar-brand' href='index-2.html'>
                  <img style={{ width: '100%' }} src={icon} alt='Logo' />
                  {/* <span className="lead">Dekut CU</span> */}
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
