import React, { useEffect, useState } from 'react';
import Footer from '../components/app_launch/Footer';
import Header from '../components/app_launch/Header';
import Preloader from '../components/app_launch/Preloader';
import SectionA from '../components/app_launch/SectionA';
import SectionB from '../components/app_launch/SectionB';
import SectionC from '../components/app_launch/SectionC';

export default function CUAppLaunch() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  return (
    <>
      {!loaded && <Preloader />}
      <Header />
      <SectionA />
      <SectionB />
      <SectionC />
      <Footer />
    </>
  );
}
