import React from 'react';
import { useState } from 'react';
import ScheduledAnimes from './ScheduledAnimes';

const Schedules = () => {
  const d = new Date();
  let day = d.getDay();
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const [activeDay, setActiveDay] = useState(days[day]);

  const changeDayHandler = (day) => {
    setActiveDay(day);
  };

  return (
    <section
      className='my-20 bg-gradient-to-r from-stone-50 to-stone-200 p-2 sm:p-8 dark:from-neutral-700 dark:to-neutral-800
'
    >
      <h2 className='uppercase font-bold mb-4 text-lg'>Schedules</h2>
      <div className='flex gap-2 mt-6 flex-wrap'>
        {days.map((day, i) => (
          <button
            className={
              day === activeDay
                ? 'bg-darker-gray text-white py-2 px-4 rounded-lg'
                : 'bg-dark-gray py-2 px-4 rounded-lg hover:bg-dark-gray-1 dark:text-black'
            }
            onClick={() => changeDayHandler(day)}
            key={i}
          >
            {day.slice(0, 3).toUpperCase()}
          </button>
        ))}
      </div>
      <ScheduledAnimes day={activeDay} />
    </section>
  );
};

export default Schedules;
