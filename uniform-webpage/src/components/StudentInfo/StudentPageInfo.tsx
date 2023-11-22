import style from './StydentPageInfo.module.css'

interface StudentPageInfoProps {
    title: string;
    spaceValue: string | number;
}

export const StudentPageInfo = ({title, spaceValue}:StudentPageInfoProps) => {
  return (
    <div>
        <div className={style.title}>{title}</div>
        <div className={style.text}>{spaceValue}</div>
    </div>
  )
}
