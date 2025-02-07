import React from 'react';

const Card = ({ title, content, footer }) => {
	const styles = {
		container: {
			border: '1px solid #e0e0e0',
			borderRadius: '10px',
			padding: '20px',
			boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
			maxWidth: '300px',
			margin: '10px',
		},
		title: {
			fontSize: '20px',
			marginBottom: '10px',
			fontWeight: 'bold',
		},
		content: {
			fontSize: '16px',
			marginBottom: '10px',
		},
		footer: {
			marginTop: '10px',
			fontSize: '14px',
			color: '#6C757D',
		},
	};

	return (
		<div style={styles.container}>
			<div style={styles.title}>{title}</div>
			<div style={styles.content}>{content}</div>
			{footer && <div style={styles.footer}>{footer}</div>}
		</div>
	);
};

export default Card;
