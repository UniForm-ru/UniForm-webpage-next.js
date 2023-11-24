import style from './SidebarMenuItem.module.css';

interface SidebarMenuItemProps {
    relocate: () => void;
    item: {
        path?:string, 
        icon:string,
        icon_active?:string,
        label:string,
    };
    active: boolean;
}

export const SidebarMenuItem = ({ item, active, relocate }: SidebarMenuItemProps) => {
    return (
        <div className={active ? style.item__active : style.item} onClick={relocate}>
            <div className={style.item__icon}>
                <img src={`${active ? item.icon_active : item.icon}`} alt="icon" />
            </div>
            <div className={active ? style.item__label__active : style.item__label}>{item.label}</div>
        </div>
    );
};
