'use client'

import style from './SortByUnis.module.css'
import GlassContainer from '../GlassContainer/GlassContainer';
import { useState } from 'react';

interface SortByUnisProps {
    active: boolean;
    items: {name: string, logo: string}[];
    sortFunction: () => void;
}

const SortByUnis = ({active, items}:SortByUnisProps) => {

    const [uniToSort, setUniToSort] = useState<string>('')
    console.log(uniToSort);
    

  return (
    <div className={active? '': style.hide}>
        <h2 className={style.head}>Выбор университета для просмотра учебных материалов</h2>
        <main className={style.main}>
            {items.map((item, index) => (
                <GlassContainer flex column center key={index} onClickFunction={() => setUniToSort(item.name)}>
                        <h2 className={style.uni__name}>{item.name}</h2>
                        <img src={`${item.logo}`} alt={`${item.name}`} />
                </GlassContainer>
            ))}
        </main>
    </div>
  )
}

export default SortByUnis