'use client'

import style from './SortByUnis.module.css'
import GlassContainer from '../GlassContainer/GlassContainer';
import { useEffect, useState } from 'react';

interface SortByUnisProps {
    active: boolean;
    items: {name: string, labels: string[]}[];
    uniToSort:string;
}
const SortByDisciplines = ({active, items, uniToSort}:SortByUnisProps) => {

    const [filteredItems, setFilteredItems] = useState<string[]>([]);

    useEffect(() => {
      const filtered = items.filter((item) => item.name === uniToSort);
      setFilteredItems(filtered[0].labels);
    }, [uniToSort, items]);

     
    return (
      <div className={active ? '' : style.hide}>
        <h2 className={style.head}>Учебные материалы {uniToSort}</h2>
        <main className={style.main}>
        {filteredItems.map((item, index) => (
              <GlassContainer key={index} flex center>
                <h2 className={style.name}>{item}</h2>
              </GlassContainer>
        ))}
        </main>
      </div>
    );
}

export default SortByDisciplines