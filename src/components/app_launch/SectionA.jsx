import React from 'react';

export default function SectionA() {
  return (
    <section id='home' className='hero-section'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <div className='hero-content'>
              <h1 className='wow fadeInUp' data-wow-delay='.2s'>
                Dedan Christians App
              </h1>
              <p className='wow fadeInUp lead' data-wow-delay='.4s'>
                This is an application for <b>Christian Union</b> of{' '}
                <b>Dedan Kimathi University. </b>We're working towards a smaller
                download size. Please bear with us.
              </p>
              <div className='hero-btns'>
                <button
                  //   href='javascript:void(0)'
                  onClick={() =>
                    window.open(
                      'https://firebasestorage.googleapis.com/v0/b/dekutchristians.appspot.com/o/apps%2Fdekutcu.apk?alt=media&token=9d832c15-8be6-48ba-a766-fdce1a016c0b'
                    )
                  }
                  className='main-btn btn-hover wow fadeInUp'
                  data-wow-delay='.6s'
                >
                  Download Now
                </button>
                <button
                  //   href='javascript:void(0)'
                  className='main-btn border-btn btn-hover wow fadeInUp'
                  data-wow-delay='.6s'
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='hero-img wow fadeInUp' data-wow-delay='.5s'>
              <img src='assets/img/hero/hero-img.png' alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='hero-shape'>
        <img
          src='assets/img/hero/hero-shape-1.svg'
          alt=''
          className='shape shape-1'
        />
      </div>
    </section>
  );
}
