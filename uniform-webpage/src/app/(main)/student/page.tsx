import DarkBlueContainer from "@/components/DarkBlueContainer/DarkBlueContainer";
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
