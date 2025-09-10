import React from 'react';
import { TextInput, View, Text } from 'react-native';

export default function Input({
	label,
	placeholder,
	value,
	onChangeText,
	className = '',
	error,
	multiline = false,
	secureTextEntry = false,
	keyboardType = 'default',
	...props
}) {
	return (
		<View className={`mb-4 ${className}`}>
			{label && <Text className='text-body font-medium mb-2'>{label}</Text>}
			<TextInput
				placeholder={placeholder}
				value={value}
				onChangeText={onChangeText}
				multiline={multiline}
				secureTextEntry={secureTextEntry}
				keyboardType={keyboardType}
				className={`
					bg-input 
					border border-border 
					rounded-lg 
					px-4 py-3 
					text-body 
					placeholder:text-placeholder
					${multiline ? 'min-h-[100px]' : 'h-12'}
					${error ? 'border-red-500' : 'focus:border-accent'}
				`}
				placeholderTextColor='#6c757d'
				{...props}
			/>
			{error && <Text className='text-red-500 text-sm mt-1'>{error}</Text>}
		</View>
	);
}
