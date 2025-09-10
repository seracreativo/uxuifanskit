import React from 'react';
import { Text } from 'react-native';

interface InputLabelProps {
	children: React.ReactNode;
	className?: string;
	required?: boolean;
}

export default function InputLabel({
	children,
	className = '',
	required = false,
}: InputLabelProps) {
	return (
		<Text
			className={`font-medium uppercase mt-4 mb-1 ml-1 text-placeholder text-xs ${className}`}
		>
			{children}
			{required && <Text className='text-red-500 ml-1'>*</Text>}
		</Text>
	);
}
