import { type Metadata } from 'next';
import Home from '../components/pages/Home';

export const metadata: Metadata = {
	title: 'Home - AG Design System Starter Kit',
};

export default function HomePage() {
	return (
		<>
			<Home />
		</>
	);
}
