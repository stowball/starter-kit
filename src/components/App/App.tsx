/** @jsxImportSource @emotion/react */
'use client';

import { type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Footer as CommonFooter } from '@ag.common/footer';
import { Header as CommonHeader } from '@ag.common/header';
import { theme } from '@ag.ds-next/react/ag-branding';
import { Box } from '@ag.ds-next/react/box';
import { Core } from '@ag.ds-next/react/core';
import { Flex } from '@ag.ds-next/react/flex';
import { SkipLinks } from '@ag.ds-next/react/skip-link';
import { LinkComponent } from '../LinkComponent/LinkComponent';
import { RootStyleRegistry } from '../RootStyleRegistry/RootStyleRegistry';

export const App = ({ children }: { children: ReactNode }) => {
	const pathname = usePathname();
	return (
		<RootStyleRegistry>
			<Core linkComponent={LinkComponent} theme={theme}>
				<SkipLinks
					links={[
						{ href: '#main-content', label: 'Skip to main content' },
						{ href: '#main-nav', label: 'Skip to main navigation' },
					]}
				/>
				<Flex flexDirection="column" fontFamily="body" minHeight="100vh">
					<CommonHeader activePath={pathname} />
					<Box
						flexGrow={1}
						as="main"
						css={{ '&:focus': { outline: 'none' } }}
						id="main-content"
						tabIndex={-1}
					>
						{children}
					</Box>
					<CommonFooter />
				</Flex>
			</Core>
		</RootStyleRegistry>
	);
};
