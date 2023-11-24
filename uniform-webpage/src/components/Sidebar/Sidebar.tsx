'use client'
import style from './Sidebar.module.css'
import { addedMenuItems, menuItems } from '@/scripts/constants'

import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useRouter } from "next/navigation"
import { useContext, useState } from 'react'
import { SidebarMenuItem } from '../SidebarMenuItem/SidebarMenuItem'
import SortByUnis from '../SortByUnis/SortByUnis'

interface sidebarProps {
  sortActive: boolean;
  setSortActive: () => void;
}

export const Sidebar = ({sortActive, setSortActive}: sidebarProps) => {

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
                {(window.location.pathname == '/studies' || window.location.pathname == '/map') && 
                <SidebarMenuItem relocate={() => {setSortActive(!sortActive); setIsOpen(false)}} item={addedMenuItems[0]} active={false}/>}
              </ul>
          </div>
    </div>
  )
}
 