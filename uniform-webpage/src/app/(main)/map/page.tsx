import React from 'react'
import style  from './Map.module.css'

export default function Map() {
  return (
    <div>
      <h1 className={style.head__main}>Карта  скидок для студента</h1>
      <main className={style.main}>
        <div className={style.content}>
            <div className={style.seleccts__container}>

              <select name="" id="" className={style.select}>
                <option value="" disabled selected hidden>Скидки</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>   
              </select>

              <select name="" id="" className={style.select}>
                <option value="" disabled selected hidden>Скидки</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>   
              </select>

              <select name="" id="" className={style.select}>
                <option value="" disabled selected hidden>Скидки</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>   
              </select>
            </div>
            <div className={style.info__container}>
              
            </div>
        </div>
        <div className={style.map}>
          <div className={style.map__container}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2232.0609870307794!2d37.20673057689611!3d55.98297267317027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5150ee356291f%3A0xf8416923b73b7571!2z0JzQmNCt0KI!5e0!3m2!1sru!2sru!4v1700899510711!5m2!1sru!2sru" width="100%" height="450px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </main>
    </div>
  )
}
