import { StudentPageInfo } from '@/components/StudentInfo/StudentPageInfo';
import style from './StudentPage.module.css';
import {student} from './StudentInfo';


export default function StudentPage() {
  return (
    <div className={style.wrapper}>
        <header className={style.header}>
            <div className={style.logo}>logo</div>
            <div className={style.univercity}>{student.univercity}</div>
        </header>
        <main className={style.main}>
        <div className={style.top__container}>
                <div className={style.info}>
                    <StudentPageInfo title={'ФИО студента'} spaceValue={`${student.userName.surname} 
                                                                         ${student.userName.name} 
                                                                         ${student.userName.lastName}`}/>
                    <StudentPageInfo title={'Номер студенческого билета'} spaceValue={student.id}/>
                    <StudentPageInfo title={'Направление / группа'} spaceValue={`${student.studyGroup.group} / 
                                                                                 ${student.studyGroup.groupReduct}`}/>
                </div>
                <div className={style.photo} style={{backgroundImage:`url(${student.photo})`}}/>
              </div>
              <div className={style.bottom__container}>
                  <StudentPageInfo title={'Дата рождения'} spaceValue={student.birthDay}/>
                  <StudentPageInfo title={'Действителен до'} spaceValue={student.validUntil}/>
              </div>
              <div className={style.reset__request}><button>Отправить запрос на изменение данных</button></div>
        </main>
        <footer className={style.footer}>
            <div className={style.footer__content}>
              <div className={style.qr} style={{backgroundImage:`url(${student.qr})`}}/>
              <div className={style.login}>login</div>
            </div>
        </footer>
    </div>
  )
}
