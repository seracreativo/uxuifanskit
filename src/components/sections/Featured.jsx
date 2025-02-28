import React from 'react';

const Featured = ({ className = '', ...props }) => {
	return (
		<div className='grid  divide-x  divide-border border-y border-border text-body grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-5'>
			<div className='p-4 flex items-center justify-center  md:row-span-full bg-surface'>
				<p className='text-2xl'>Featured by Fernan</p>
			</div>
			<div className='p-4 flex items-center justify-center border-t border-border md:border-0'>
				<img
					src='https://inmigreat-web.vercel.app/assets/feat1.svg'
					alt=''
					className='h-8'
				/>
			</div>
			<div className='p-4 flex items-center justify-center border-t border-border md:border-0'>
				<img
					src='https://inmigreat-web.vercel.app/assets/feat2.svg'
					alt=''
					className='h-8'
				/>
			</div>
			<div className='p-4 flex items-center justify-center border-t border-border lg:border-0'>
				<img
					src='https://inmigreat-web.vercel.app/assets/feat3.svg'
					alt=''
					className='h-8'
				/>
			</div>
			<div className='p-4 flex items-center justify-center border-t border-border lg:border-0'>
				<img
					src='https://inmigreat-web.vercel.app/assets/feat4.svg'
					alt=''
					className='h-8'
				/>
			</div>
		</div>
	);
};

export default Featured;
