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
    <section class='my-20 bg-gradient-to-r from-stone-50 to-stone-200 p-2 sm:p-8'>
      <h2 class='uppercase font-bold mb-4 text-lg'>Schedules</h2>
      <div class='flex gap-2 mt-6 flex-wrap'>
        {days.map((day, i) => (
          <button
            class={
              day === activeDay
                ? 'bg-darker-gray text-white py-2 px-4 rounded-lg'
                : 'bg-dark-gray py-2 px-4 rounded-lg hover:bg-dark-gray-1'
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
