import React from 'react';
import { View, TouchableOpacity } from 'react-native';

export default function Card({
	children,
	onPress,
	className = '',
	padding = true,
	shadow = true,
	...props
}) {
	const Component = onPress ? TouchableOpacity : View;

	return (
		<Component
			onPress={onPress}
			className={`
				bg-surface 
				rounded-xl 
				${padding ? 'p-4' : ''} 
				${shadow ? 'shadow-sm' : ''} 
				border border-border 
				${className}
			`}
			{...props}
		>
			{children}
		</Component>
	);
}
