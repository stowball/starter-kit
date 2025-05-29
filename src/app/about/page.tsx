'use client';

import { HelpCallout } from '@ag.common/help-callout';
import { PageContent } from '@ag.ds-next/react/content';
import { Prose } from '@ag.ds-next/react/prose';
import { Stack } from '@ag.ds-next/react/stack';

export default function About() {
	return (
		<PageContent>
			<Stack gap={2}>
				<Prose>
					<h1>About</h1>
					<p>A simple example of another route.</p>
				</Prose>
				<HelpCallout />
			</Stack>
		</PageContent>
	);
}
