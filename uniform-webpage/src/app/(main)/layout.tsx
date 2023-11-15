import { Sidebar } from "@/components/Sidebar/Sidebar"
import type { PropsWithChildren } from "react"

import style from './css/WrapperStyle.module.css'

export default function MainLayout({
    children,
}:PropsWithChildren<unknown>) {
  return (
    <div className={style.wrapper}>
        <Sidebar/>
        {children}
    </div>
  )
}
