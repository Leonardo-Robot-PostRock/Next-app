import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { Navbar } from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
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

			<main className={`${styles.main} ${inter.className}`}>
				<h1>Home Page</h1>

				<h1 className={styles.title}>
					Ir a <Link href='/about'>About</Link>
				</h1>
				<h1 className={styles.title}>
					Ir a <Link href='/contact'>Contact</Link>
				</h1>

				<div className={styles.description}>
					<p>
						Get started by editing&nbsp;
						<code className={styles.code}>pages/index.tsx</code>
					</p>
				</div>
			</main>
		</>
	);
}
