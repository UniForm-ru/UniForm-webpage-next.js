'use client'

import { ScheduleItem } from '@/components/ScheduleItem/ScheduleItem'
import { scheduleData } from '@/scripts/fakeData'

import style from './Schedule.module.css'
import { useState, useEffect } from "react";
import axios from 'axios';
import DarkBlueContainer from '@/components/DarkBlueContainer/DarkBlueContainer';

export default function Schedule() {

  const [data, setData] = useState([]);

  // Функция для выполнения запроса на сервер
  const fetchData = async () => {
    try {
      const response = await axios.get('url');
      setData(response.data);
      console.log(data);
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    }
  };

  // useMemo для кэширования данных
  //const scheduleData = useMemo(() => data, [data]);

  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <div>
      <div className={style.container}>
          {scheduleData.map((dayData, index) => (
            <DarkBlueContainer>
              <h2>{dayData.day}</h2>
              <ul className={style.subjects}>
                {dayData.subjects.map((subject, subIndex) => (
                  <li className={style.subject} key={subIndex}>
                    <div className={style.subject}>
                      <ScheduleItem 
                        type={subject.type}
                        time={subject.time}
                        subject={subject.subject}
                        location={subject.location}
                        teacher={subject.teacher}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </DarkBlueContainer>
          ))}
        </div>
    </div>
  )
}
