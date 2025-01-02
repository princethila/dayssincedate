"use client"
import React, { useState, useEffect } from 'react';
 
 export default function Home() {
  const [selectedDate, setSelectedDate] = useState('');
  const [timeElapsed, setTimeElapsed] = useState(null);

  const calculateTimeElapsed = () =>{
    if (!selectedDate) return

    const inputDate = new Date(selectedDate)
    const now = new Date()
  }
  return (
    <div className="">
      we up!
    </div>
  );
}
