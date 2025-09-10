import React from 'react';
import { Text } from 'react-native';

interface FooterProps {
	children: React.ReactNode;
	className?: string;
}

export default function Footer({ children, className = '' }: FooterProps) {
	return (
		<Text className={`text-sm font-regular mb-4 px-2 ${className}`}>
			{children}
		</Text>
	);
}
