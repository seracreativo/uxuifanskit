import React from 'react';

const Footer = ({ className = '', ...props }) => {
	return (
		<div className='grid grid-cols-5 divide-x divide-border border-y border-border text-body'>
			{[1, 2, 3, 4, 5].map((item) => (
				<div key={item} className='flex flex-col gap-2 p-3'>
					<p className='text-title'>Title</p>
					<a href='#'>Hola</a>
					<a href='#'>Hola</a>
					<a href='#'>Hola</a>
					<a href='#'>Hola</a>
				</div>
			))}
		</div>
	);
};

export default Footer;
