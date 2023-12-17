import React from 'react';
import styles from './Navbar.module.css';
import { ActiveLink } from './ActiveLink';

export const Navbar = () => {
	interface menuItems {
		text: string;
		href: string;
	}

	const menuItems: menuItems[] = [
		{
			text: 'Home',
			href: '/',
		},
		{
			text: 'About',
			href: '/about',
		},
		{
			text: 'Contact',
			href: '/contact',
		},
		{
			text: 'Pricing',
			href: '/pricing',
		},
	];
	return (
		<nav className={styles['menu-container']}>
			{menuItems.map(({ text, href }) => (
				<ActiveLink key={href} href={href} text={text} />
			))}
		</nav>
	);
};
