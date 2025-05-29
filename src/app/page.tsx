import { PageContent } from '@ag.ds-next/react/content';
import { Prose } from '@ag.ds-next/react/prose';

export default function Home() {
	return (
		<PageContent>
			<Prose>
				<h1>AG Design System Starter Kit</h1>
				<p>
					This is a simple starter kit built using the AG Design System, NextJS
					and Typescript.
				</p>
				<p>
					For examples of common user interfaces, please refer to the{' '}
					<a href="https://design-system.agriculture.gov.au/templates">
						design system templates.
					</a>
					.
				</p>
			</Prose>
		</PageContent>
	);
}
