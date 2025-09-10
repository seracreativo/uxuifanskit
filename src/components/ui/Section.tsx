import React from 'react';
import { View, Text } from 'react-native';

interface SectionProps {
	children: React.ReactNode;
	title?: string;
	className?: string;
}

export default function Section({
	children,
	title,
	className = '',
}: SectionProps) {
	return (
		<View className={`bg-surface p-6 gap-4 rounded-2xl ${className}`}>
			{title && (
				<Text className='text-title font-bold text-lg mb-2'>{title}</Text>
			)}
			{children}
		</View>
	);
}
