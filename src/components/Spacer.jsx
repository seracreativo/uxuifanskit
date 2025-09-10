import React from 'react';
import { View } from 'react-native';

const Spacer = ({ height = 12, width = 0, className = '', ...props }) => {
	const style = {
		height: typeof height === 'number' ? height : undefined,
		width: typeof width === 'number' ? width : undefined,
	};

	return <View style={style} className={className} {...props} />;
};

export default Spacer;
