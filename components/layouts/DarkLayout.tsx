type Props = {
	children: React.ReactNode;
};

export const DarkLayout: React.FC<Props> = ({ children }) => {
	return (
		<div
			style={{
				backgroundColor: '#141E46',
				borderRadius: '5px',
				padding: '10px',
			}}
		>
			<h3>Dark-Layout</h3>
			<div>{children}</div>
		</div>
	);
};
