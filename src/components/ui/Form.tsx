import React from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface FormProps {
	children?: React.ReactNode;
	func?: () => void;
	scroll?: boolean;
	map?: boolean;
	btn?: React.ReactNode;
}

export default function Form({
	children,
	func,
	scroll = true,
	map = false,
	btn,
}: FormProps) {
	if (children == null) {
		return (
			<>
				<SafeAreaView edges={{ top: 'maximum' }} className='view'>
					<View className='comodin p-4 gap-2 m-6 rounded-3xl' />
				</SafeAreaView>
			</>
		);
	}

	if (map) {
		return (
			<>
				<SafeAreaView edges={{ top: 'maximum' }} className='view '>
					<View className='scroll gap-6  overflow-visible'>{children}</View>
					{btn && <View className='p-4 border-t border-gray-200 '>{btn}</View>}
				</SafeAreaView>
			</>
		);
	}

	if (!scroll) {
		return (
			<>
				<SafeAreaView edges={{ top: 'maximum' }} className='view '>
					<View className='scroll gap-6 px-6 pt-6 overflow-visible'>
						{children}
					</View>
					{btn && <View className='p-4 border-t border-gray-200 '>{btn}</View>}
				</SafeAreaView>
			</>
		);
	}

	if (!func) {
		return (
			<>
				<SafeAreaView edges={{ top: 'maximum' }} className='view'>
					<ScrollView
						className='scroll'
						contentContainerStyle={{ flexGrow: 1, padding: 24 }}
					>
						{children}
					</ScrollView>
					{btn && <View className='p-4 border-t border-gray-200 '>{btn}</View>}
				</SafeAreaView>
			</>
		);
	}

	return (
		<>
			{/* <StatusBar
				animated={true}
				backgroundColor='#000000'
				barStyle={'light-content'}
				showHideTransition={'fade'}
				hidden={false}
			/> */}
			<SafeAreaView edges={{ top: 'maximum' }} className='view'>
				<ScrollView
					className='scroll'
					contentContainerStyle={{ flexGrow: 1, padding: 24 }}
					refreshControl={
						<RefreshControl refreshing={false} onRefresh={func} />
					}
				>
					{children}
				</ScrollView>
				{btn && <View className='p-4 border-t border-gray-200 '>{btn}</View>}
			</SafeAreaView>
		</>
	);
}
