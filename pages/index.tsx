import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

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
			<main className={`${styles.main} ${inter.className}`}>
				<h1 className={styles.title}>
					Ir a <Link href="/about">About</Link>
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
