import { Inter } from 'next/font/google';
import Link from 'next/link';
import { MainLayout } from '@/components/layouts/MainLayout';
import styles from '../components/layouts/MainLayout.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function HomePage() {
	return (
		<MainLayout>
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
		</MainLayout>
	);
}
