"use client"
import React, { useState, useEffect } from 'react';
 
 export default function Home() {
  const [selectedDate, setSelectedDate] = useState('');
  const [timeElapsed, setTimeElapsed] = useState(null);

  const calculateTimeElapsed = () =>{
    if (!selectedDate) return

    const inputDate = new Date(selectedDate);
    const now = new Date();
    const diffTime = Math.abs(now - inputDate);

    const totalSeconds = Math.floor(diffTime / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);


    setTimeElapsed({ 
      days: totalDays,
      hours: totalHours,
      minutes: totalMinutes,
      seconds: totalSeconds
    });

    useEffect(() => {
      let interval;
      if (selectedDate) {
        calculateTimeElapsed();
        interval = setInterval(calculateTimeElapsed, 1000);
      }
      return () => clearInterval(interval);
    }, [selectedDate]);

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    };
  }
  return (
    <div className="">
      we up!
    </div>
  );
}
