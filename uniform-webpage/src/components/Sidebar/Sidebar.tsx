'use client'
import style from './Sidebar.module.css'
import { menuItems } from '@/scripts/constants'

import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useRouter } from "next/navigation"
import { useState } from 'react'
import { SidebarMenuItem } from '../SidebarMenuItem/SidebarMenuItem'

export const Sidebar = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();  

  return (
    <div className={style.sidebar}>
        <div className={style.container}>
            <button className={style.open__close} onClick={() => setIsOpen(!isOpen)}><FontAwesomeIcon icon={faBars}/></button>
            <ul className={isOpen? style.menu__open: style.menu}>
              {
                menuItems.map((item, index) => (
                  <SidebarMenuItem
                    key={index} 
                    relocate={() => {router.push(item.path), setIsOpen(false)}}
                    item={item} 
                    active={window.location.pathname == item.path? true: false} 
                  />
              ))}
            </ul>
        </div>
    </div>
  )
}
 