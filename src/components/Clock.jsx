import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';


const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="clock-container" style={{display:"flex",alignItems:"center" , fontWeight:"800" }}>
      <p className="date" style={{margin:"0rem 0.3rem"}}> {format(currentTime, 'MMMM dd, yyyy')}</p>
      <span>[</span><p className="time" >{format(currentTime, 'HH:mm:ss')}</p><span>]</span>
    </div>
  );
};

export default Clock;