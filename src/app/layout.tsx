import { type ReactNode } from 'react';
import type { Metadata } from 'next';
import { App } from '../components/App/App';

export const metadata: Metadata = {
	title: 'AgDS Starter Kit',
	description:
		'This is a simple starter kit built using the AG Design System, NextJS and TypeScript.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<App>{children}</App>
			</body>
		</html>
	);
}
