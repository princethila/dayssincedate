"use client"
import React, { useState, useEffect } from 'react';

interface TimeElapsed {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
 
 export default function Home() {
  const [selectedDate, setSelectedDate] = useState('');
  const [timeElapsed, setTimeElapsed] = useState<TimeElapsed | null>(null);

  const calculateTimeElapsed = () =>{
    if (!selectedDate) return

    const inputDate = new Date(selectedDate);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - inputDate.getTime());

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
  }

  useEffect(() => {
    let interval: number;
    if (selectedDate) {
      calculateTimeElapsed();
      interval = window.setInterval(calculateTimeElapsed, 1000);
    }
    return () => clearInterval(interval);
  }, [selectedDate]);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-lg bg-white">
        <div>
          <h1 className="sm:text-4xl text-2xl font-black  tracking-tight">
            TIME ELAPSED
          </h1>
          <p className="text-xs mb-8 font-blacktracking-tight">Figure out how much time has passed since some date</p>
        </div>
        
        
        <div className="space-y-8">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="flex-1 p-4 sm:text-lg text-base font-mono border-2 border-black focus:outline-none"
              />
            </div>
          </div>
          
          {timeElapsed && (
            <div className="space-y-4 border-t-2 border-black pt-4">
              <div className="flex justify-between font-mono sm:text-xl text-base">
                <span>DAYS ELAPSED:</span>
                <span className="font-bold">{timeElapsed.days}</span>
              </div>
              
              <div className="flex justify-between font-mono sm:text-xl text-base">
                <span>HOURS ELAPSED:</span>
                <span className="font-bold">{timeElapsed.hours}</span>
              </div>

              <div className="flex justify-between font-mono sm:text-xl text-base">
                <span>MINUTES ELAPSED:</span>
                <span className="font-bold">{timeElapsed.minutes}</span>
              </div>

              <div className="flex justify-between font-mono sm:text-xl text-base">
                <span>SECONDS ELAPSED:</span>
                <span className="font-bold">{timeElapsed.seconds}</span>
              </div>
              
              <div className="flex justify-between font-mono">
                <span>FROM DATE:</span>
                <span>{formatDate(selectedDate)}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
