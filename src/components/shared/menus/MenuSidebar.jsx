import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const MenuSidebar = () => {
    const router = useRouter();
    const menuItems = [
        {
            text: 'Dashboard',
            url: '/',
            icon: 'icon-home',
        },
        {
            text: 'Produtos',
            url: '/products',
            icon: 'icon-database',
        },
        {
            text: 'Encomendas',
            url: '/orders',
            icon: 'icon-bag2',
        },
        {
            text: 'Clientes',
            url: '/customers',
            icon: 'icon-users2',
        },
        {
            text: 'Categorias',
            url: '/categories',
            icon: 'icon-users2',
        },
        {
            text: 'Settings',
            url: '/settings',
            icon: 'icon-cog',
        },
    ];

    return (
        <ul className="menu">
            {menuItems.map((item, index) => (
                <li
                    key={index}
                    className={router.pathname === item.url ? 'active' : ''}>
                    <Link href={item.url}>
                        <i className={item.icon}></i>
                        {item.text}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default MenuSidebar;
