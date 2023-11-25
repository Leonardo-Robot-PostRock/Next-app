import Head from 'next/head';
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

				<h1 className={'title'}>
					Ir a <Link href='/'>Home</Link>
				</h1>

				<div className={'description'}>
					<p>
						Get started by editing&nbsp;
						<code className={'code'}>pages/contact.tsx</code>
					</p>
				</div>
			</MainLayout>
		</>
	);
}
