import React, { useState, useEffect } from 'react';
import Home from '../Home';
import Loaderimg from '../images/loaderimg.jpg'

export const Spinner = () => {
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loader-container">
            <img src={Loaderimg} />
        </div> 
      ) : (
        <Home />
      )}
    </>
  )
}
