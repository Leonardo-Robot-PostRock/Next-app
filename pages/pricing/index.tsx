import Head from 'next/head';
import Link from 'next/link';
import { MainLayout } from '@/components/layouts/MainLayout';


export default function pricingPage() {
	return (
		<>
			<Head>
				<title>Contact - Leonardo</title>
				<meta name='description' content='Contact Page' />
			</Head>

			<MainLayout>
				<h1>Pricing Page</h1>

				<h1 className={'title'}>
					Ir a <Link href='/'>Home</Link>
				</h1>

				<div className={'description'}>
					<p>
						Get started by editing&nbsp;
						<code className={'code'}>pages/pricing/pricing.tsx</code>
					</p>
				</div>
			</MainLayout>
		</>
	);
}
