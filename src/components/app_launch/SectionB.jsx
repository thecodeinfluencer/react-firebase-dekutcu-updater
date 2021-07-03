import React from 'react';

export default function SectionB() {
  return (
    <section id='tracking' className='tracking-section pt-150'>
      <div className='tracking-shape'>
        <img
          src='assets/img/plan/plan-shape.svg'
          alt=''
          className='shape shape-1'
        />
      </div>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6 col-xl-7'>
            <div className='tracking-image'>
              <img src='assets/img/plan/plan-img.png' alt='' />
            </div>
          </div>
          <div className='col-lg-6 col-xl-5'>
            <div class='tracking-content'>
              <div class='section-title mb-50'>
                <h1 class='mb-40 wow fadeInUp' data-wow-delay='.2s'>
                  Stay in sync with the Church
                </h1>
                <p class='wow fadeInUp' data-wow-delay='.4s'>
                  Get access to audio sermons, daily followships throughout the
                  week, events, gallery, devotionals and notifications. Also get
                  info on church ministries and contact details.
                </p>
              </div>
              <div class='single-plan'>
                <div class='icon-style bg-primary'>
                  <i class='lni lni-book'></i>
                </div>
                <div class='content'>
                  <h3>Devotionals</h3>
                  <p>Get access to daily devotionals within the application.</p>
                </div>
              </div>
              <div class='single-plan'>
                <div class='icon-style bg-success'>
                  <i class='lni lni-users'></i>
                </div>
                <div class='content'>
                  <h3>Daily fellowships</h3>
                  <p>
                    Get reminded on the daily fellowships throughout the week
                  </p>
                </div>
              </div>
              <div class='single-plan'>
                <div class='icon-style bg-info'>
                  <i class='lni lni-calendar'></i>
                </div>
                <div class='content'>
                  <h3>Events and Notifications</h3>
                  <p>
                    Be the first to know of events and notifications from the
                    church
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
