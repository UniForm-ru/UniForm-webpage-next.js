'use client'

/* eslint-disable react/prop-types */
import { useState } from 'react'
import style from './ScheduleItem.module.css'
import GlassContainer from '../GlassContainer/GlassContainer';

interface ScheduleItemProps {
    type: string;
    time: { start:string, end:string };
    subject: string;
    location: { building: number, classroom: number | string };
    teacher: string;
}

export const ScheduleItem = ({ type, time, subject, location, teacher }:ScheduleItemProps) => {

  const [text, setText] = useState("");
  const [isRotate, setIsRotate] = useState(false)
  const maxChars = 212;

  const handleInputChange = (e:any) => { //потом поменять any на что-то адекватное
    const inputText = e.target.value;

    if (inputText.length <= maxChars) {
      setText(inputText);
    }
  };

   return (type != 'окно'?(
    
    <div className={style.main_container}>
      <div className={!isRotate? style.front: style.front__rotate}>
        <GlassContainer flex column gap={10}>
          <div className={style.inner__constainer}>
              <span className={type == 'практика'? style.type__lect: style.type__sem}>{type}</span>
              <span className={style.time}>{time.start} - {time.end}</span>
          </div>
          <div className={style.subject}>{subject}</div>
          <div className={style.location}>
              <span className={style.location__building}>{location.building} корпус</span>
              <span className={style.location__classroom}>{location.classroom} аудитория</span>
          </div>
          <div className={style.inner__constainer}>
            <p className={style.taecher}>Преподаватель {teacher}</p>
            <img onClick={() => setIsRotate(true)} className={style.edit__image} src="/edit.svg" alt="logo" />
          </div>
        </GlassContainer>
      </div>
      <div className={!isRotate? style.back: style.back__rotate}>
        <textarea 
          className={style.textarea}
          value={text}
          placeholder="Место для заметок"
          onChange={handleInputChange}
        />
        <img onClick={() => setIsRotate(false)} className={style.back__image} src="/back.svg" alt="logo" />
      </div>
    </div>
  )
  : <>
    <GlassContainer>
      <div className={style.gap__container}>
          <img className={style.gap__image} src="/gap.svg" alt="logo" />
          <p className={style.subject}>{type}</p>
      </div>
    </GlassContainer>
  </>)
}