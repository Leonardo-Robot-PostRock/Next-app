import React from 'react';
import styles from './Navbar.module.css';
import { ActiveLink } from './ActiveLink';

export const Navbar = () => {
	return (
		<nav className={styles['menu-container']}>
			<ActiveLink href='/' text='Home' />
			<ActiveLink href='/about' text='About' />
			<ActiveLink href='/contact' text='Contact' />
		</nav>
	);
};
