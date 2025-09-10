import React from 'react';
import { Text } from 'react-native';

interface NoteProps {
	children: React.ReactNode;
	className?: string;
}

export default function Note({ children, className = '' }: NoteProps) {
	return (
		<Text className={`text-body text-sm opacity-75 ${className}`}>
			{children}
		</Text>
	);
}
