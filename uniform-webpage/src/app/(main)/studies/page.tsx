'use client'

import SortByUnis from '@/components/SortByUnis/SortByUnis'
import SortByDisciplines from '@/components/SortByUnis/SortedByDisciplines'
import { sortByUniOpenContext } from '@/scripts/contexts'
import { subjects, universitysData } from '@/scripts/fakeData'
import { useContext, useState } from 'react'

export default function Studies() {
  
  const active = useContext(sortByUniOpenContext);
  const [uniToSort, setUniToSort] = useState<string>('МИЭТ');  
  console.log(uniToSort);
  

  return (
    <div>
      <SortByUnis active={active} items={universitysData} sortFunction={(i) => {setUniToSort(i)}}/>
      <SortByDisciplines active={!active} items={subjects} uniToSort={uniToSort}/>
    </div>
  )
}
