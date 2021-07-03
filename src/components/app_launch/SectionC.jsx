import React from 'react';

export default function SectionC() {
  return (
    <section id='download' className='download-section pt-130 pb-130'>
      <div className='map-bg'>
        <img src='assets/img/download/map-bg.svg' alt='' />
      </div>
      <div className='download-shape'>
        <img
          src='assets/img/download/download-shape.svg'
          alt=''
          className='shape shape-1'
        />
      </div>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6 col-xl-5'>
            <div className='search-content'>
              <div className='section-title mb-40'>
                <h1 className='mb-40 wow fadeInUp' data-wow-delay='.2s'>
                  Download now to get access
                </h1>
                <p className='wow fadeInUp' data-wow-delay='.4s'>
                  Explore and get started on the Dedan Christians application
                  today by downloading from below.
                </p>
              </div>
              <div className='app-info'>
                <div className='single-info'>
                  <div className='icon-style bg-primary'>
                    <h2>2.2</h2>
                  </div>
                  <h4>Version</h4>
                </div>
                <div className='single-info'>
                  <div className='icon-style bg-success'>
                    <h2>50</h2>
                  </div>
                  <h4>Size</h4>
                </div>
                <div className='single-info'>
                  <div className='icon-style bg-info'>
                    <h2>4.5</h2>
                  </div>
                  <h4>Rating</h4>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='download-img mb-50 text-lg-right'>
              <img src='assets/img/download/download-img.png' alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
