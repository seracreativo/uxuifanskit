import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({
	children,
	onPress,
	func, // Para compatibilidad con versiones anteriores
	className = '',
	disabled = false,
	...props
}: {
	children: React.ReactNode;
	onPress?: () => void;
	func?: () => void;
	className?: string;
	disabled?: boolean;
}) => {
	const handlePress = onPress || func;

	return (
		<TouchableOpacity
			onPress={handlePress}
			disabled={disabled}
			className={`bg-accent px-4 py-3 rounded-lg items-center justify-center ${
				disabled ? 'opacity-50' : ''
			} ${className}`}
			{...props}
		>
			{children}
		</TouchableOpacity>
	);
};

export default Button;
