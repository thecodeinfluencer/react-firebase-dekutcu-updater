import React from 'react';
import footer_shape from '../../img/footer/footer-shape-1.svg';
import icon from '../../img/icon2.png';

export default function Footer() {
  return (
    <>
      <footer id='footer' className='footer'>
        <div className='footer-shape'>
          <img src={footer_shape} alt='' className='shape shape-1' />
        </div>

        <div className='container'>
          <div className='widget-wrapper'>
            <div className='row'>
              <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6'>
                <div className='footer-widget'>
                  <div className='logo'>
                    <a href='index-2.html'>
                      <img
                        style={{ height: 22 }}
                        src={icon}
                        alt=''
                        className='logo-2'
                      />
                      {/* <img src={icon} alt='' className='logo-1' /> */}
                    </a>
                  </div>
                  <ul className='socials'>
                    <li>
                      <a href='#footer'>
                        <i className='lni lni-facebook-filled'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#footer'>
                        <i className='lni lni-twitter-filled'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#footer'>
                        <i className='lni lni-instagram-filled'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#footer'>
                        <i className='lni lni-linkedin-original'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='copy-right-wrapper'>
                <p>
                  Designed and Developed by
                  <a
                    href='https://graygrids.com/'
                    rel='noreferrer'
                    target='_blank'
                  >
                    GrayGrids
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <a href='#header' className='scroll-top btn-hover'>
        <i className='lni lni-chevron-up'></i>
      </a>
    </>
  );
}
