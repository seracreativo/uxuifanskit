import React from 'react';

const Button = ({ children, func, className = '', ...props }) => {
	return (
		<button
			onClick={func}
			className={`bg-accent text-background px-4 h-12 ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
