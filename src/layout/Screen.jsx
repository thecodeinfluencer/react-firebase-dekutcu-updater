import React, { useEffect, useState } from 'react';
import firebase from '../config/Firebase';

export default function Screen({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setUser(user.email);
      } else setUser('Logged out');
    });
    return () => {
      // cleanup;
    };
  }, []);

  return (
    <div className='container my-5'>
      {user !== 'Logged out' && (
        <div
          className='bg-success p-2 mb-2'
          style={{
            width: '100%',
            color: '#fff',
          }}
        >
          Hello {user}
        </div>
      )}
      {children}
    </div>
  );
}
