import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface Style {
	color: string;
	textDecoration: string;
}

const style: Style = {
	color: '#0070f3',
	textDecoration: 'underline',
};

type Props = {
	href: string;
	text: string;
};

export const ActiveLink: React.FC<Props> = ({ href, text }) => {
	//Se puede desestructurar del useRouter
	const { asPath } = useRouter();

	return (
		<Link href={href} style={asPath === href ? style : undefined}>
			{text}
		</Link>
	);
};
