import Head from 'next/head';
import type { ReactElement } from 'react';
import Link from 'next/link';
import { MainLayout } from '@/components/layouts/MainLayout';
import { DarkLayout } from '../components/layouts/DarkLayout';

export default function AboutPage() {
	return (
		<>
			<Head>
				<title>About - Leonardo</title>
				<meta name='description' content='Generated by create next app' />
			</Head>
			<h1>About Page</h1>

			<h1 className={'title'}>
				Ir a <Link href='/'>Home</Link>
			</h1>

			<div className={'description'}>
				<p>
					Get started by editing&nbsp;
					<code className={'code'}>pages/about.tsx</code>
				</p>
			</div>
		</>
	);
}

AboutPage.getLayout = function (page: ReactElement) {
	return (
		<MainLayout>
			<DarkLayout>{page}</DarkLayout>
		</MainLayout>
	);
};
