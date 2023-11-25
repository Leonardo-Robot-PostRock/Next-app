import Head from 'next/head';
import styles from '../../components/layouts/MainLayout.module.css';
import Link from 'next/link';
import { MainLayout } from '@/components/layouts/MainLayout';


export default function contactPage() {
	return (
		<>
			<Head>
				<title>Contact - Leonardo</title>
				<meta name='description' content='Contact Page' />
			</Head>

			<MainLayout>
				<h1>Contact Page</h1>

				<h1 className={styles.title}>
					Ir a <Link href='/'>Home</Link>
				</h1>

				<div className={styles.description}>
					<p>
						Get started by editing&nbsp;
						<code className={styles.code}>pages/contact.tsx</code>
					</p>
				</div>
			</MainLayout>
		</>
	);
}
