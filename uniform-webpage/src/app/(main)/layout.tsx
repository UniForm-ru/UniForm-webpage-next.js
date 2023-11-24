'use client'

import { Sidebar } from "@/components/Sidebar/Sidebar"
import { useState, type PropsWithChildren } from "react"

import style from './css/WrapperStyle.module.css'
import { sortByUniOpenContext } from "@/scripts/contexts"

export default function MainLayout({
    children,
}:PropsWithChildren<unknown>) {

  const [sortActive, setSortActive] = useState<boolean>(false);

  return (
    <div className={style.wrapper}>
        <sortByUniOpenContext.Provider value={sortActive}>
          <Sidebar sortActive={sortActive} setSortActive={() => setSortActive(!sortActive)}/>
          {children}
        </sortByUniOpenContext.Provider>
    </div>
  )
}
