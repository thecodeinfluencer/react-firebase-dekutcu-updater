import React, { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import firebase from '../config/Firebase';
import Screen from '../layout/Screen';

export default function Home() {
  const history = useHistory();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (!user) {
        history.push('/login');
      }
    });
  }, [history]);

  return (
    <Screen>
      <h4 className='h4'>Welcome</h4>
      <p className='lead'>DekutCU App Notifications and Devotionals Editor</p>
      <Link
        to='/devotionals'
        type='button'
        className='btn btn-success mr-2 mb-2'
      >
        Devotionals
      </Link>
      <Link
        to='/notifications'
        type='button'
        className='btn btn-success mr-2 mb-2'
      >
        Notifications
      </Link>
      <Link to='/library' type='button' className='btn btn-success mr-2 mb-2'>
        Library (Physical books)
      </Link>
      <Link to='/ebooks' type='button' className='btn btn-success mr-2 mb-2'>
        Ebooks
      </Link>
      <Link to='/app' type='button' className='btn btn-success'>
        CU App
      </Link>
    </Screen>
  );
}
