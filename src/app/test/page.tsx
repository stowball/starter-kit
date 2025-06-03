// 'use client';
import { type Metadata } from 'next';
import { Analytics } from '../../components/Analytics';
import Script from 'next/script';

export const metadata: Metadata = {
	title: 'Test - AG Design System Starter Kit',
};

export default function TestPage() {
	return <Analytics scriptComponents={{ Script }}>bar</Analytics>;
}
