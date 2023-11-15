interface MenuItemInterface {
    path: string;
    icon: string;
    icon_active: string;
    label: string;
}

export const menuItems: MenuItemInterface[] = [
    {
        path: '/messenger',
        icon: '/messenger.svg',
        icon_active: '/messenger_active.svg',
        label: 'Мессенджер',
    },
    {
        path: '/student', 
        icon: '/card.svg',
        icon_active: '/card_active.svg',
        label:'Личный кабинет',
    }, 
    {
        path: '/schedule', 
        icon: '/schedule.svg',
        icon_active: '/schedule_active.svg',
        label:'Расписание',
    },
    {
        path: '/events', 
        icon: '/events.svg',
        icon_active: '/events_active.svg',
        label:'События',
    },
    {
        path: '/studies', 
        icon: '/studies.svg',
        icon_active: '/studies_active.svg',
        label:'Учебные материалы',
    },
    {
        path: '/map', 
        icon: '/map.svg',
        icon_active: '/map_active.svg',
        label:'Карта',
    }
];