'use client'

import style from './SortByUnis.module.css';
import GlassContainer from '../GlassContainer/GlassContainer';
import { sortByUniOpenContext } from '@/scripts/contexts';

interface SortByUnisProps {
    active: boolean;
    items: {name: string, logo: string}[];
    sortFunction: (item:string) => void;
}

const SortByUnis = ({active, items, sortFunction }:SortByUnisProps) => {
  
  return (
    <div className={active? '': style.hide} onClick={() => {sortByUniOpenContext.displayName}}>
        <h2 className={style.head}>Выбор университета для просмотра учебных материалов</h2>
        <main className={style.main}>
            {items.map((item, index) => (
                <GlassContainer flex column center gap={18} key={index} onClickFunction={() => sortFunction(item.name)}>
                        <h2 className={style.uni__name}>{item.name}</h2>
                        <img src={`${item.logo}`} alt={`${item.name}`}/>
                </GlassContainer>
            ))}
        </main>
    </div>
  )
}

export default SortByUnis