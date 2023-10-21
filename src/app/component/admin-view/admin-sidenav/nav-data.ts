import { faBagShopping, faUser,faHome, faBox, faList, faGift, faMessage, faGear } from '@fortawesome/free-solid-svg-icons';


export const  navbarData=[
    {
        routerLink: 'dashboard',
        icon: faHome,
        label: 'DashBoard'
    },
    {
        routerLink: 'product',
        icon: faBox,
        label: 'Product'
    },
    {
        routerLink: 'category',
        icon: faList,
        label: 'Category'
    },
    {
        routerLink: 'order',
        icon: faBagShopping,
        label: 'Order'
    },
    {
        routerLink: 'user',
        icon : faUser,
        label: 'User'
    },
    {
        routerLink: 'coupon',
        icon : faGift,
        label: 'Coupon'
    },
    {
        routerLink: 'message',
        icon : faMessage,
        label: 'Message'
    },
    {
        routerLink: 'setting',
        icon : faGear,
        label: 'Setting'
    },
];