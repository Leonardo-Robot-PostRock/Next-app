import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from './MainLayout.module.css';
import { Navbar } from '../Navbar';

const inter = Inter({ subsets: ['latin'] });

type Props = {
	children: React.ReactNode;
};

export const MainLayout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Head>
				<title>Home - Leonardo</title>
				<meta name='description' content='Home Page' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Head>
				<meta name='keywords' content='Leonardo, portfolio, frontend' />
			</Head>

			<Navbar />

			<main className={`${styles.main} ${inter.className}`}>{children}</main>
		</>
	);
};
