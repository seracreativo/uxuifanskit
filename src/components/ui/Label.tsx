import React from 'react';
import { Text } from 'react-native';

interface LabelProps {
	children: React.ReactNode;
	className?: string;
}

export default function Label({ children, className = '' }: LabelProps) {
	return (
		<Text className={`text-title font-semibold text-base ${className}`}>
			{children}
		</Text>
	);
}
