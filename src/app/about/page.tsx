import { type Metadata } from 'next';
import About from '../../components/pages/About';
import { HelpCallout } from '../../components/HelpCallout/HelpCallout';
import { Header } from '../../components/Header/Header';
import { Footer } from '@ag.common/footer';
// import { Footer } from '../../components/Footer';

export const metadata: Metadata = {
	title: 'About - AG Design System Starter Kit',
};

export default function AboutPage() {
	return (
		<>
			<HelpCallout internal />
			<Footer />
			<Header />
			<About />
		</>
	);
}
