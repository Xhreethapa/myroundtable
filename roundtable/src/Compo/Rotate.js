import React, { useState, useEffect } from 'react';




const Rotate = ({ imageUrl }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation(prevRotation => prevRotation + 1);
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ transform: `rotateY(${rotation}deg)` , position:'absolute', zIndex:'200'}}>
      <img src={imageUrl} alt="360 degree image" style={{height:'150px',width:'150px'}} />
    </div>
  );
};

export default Rotate;
