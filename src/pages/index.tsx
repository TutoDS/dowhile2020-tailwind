import Card from 'components/Card';
import React from 'react';

const Home = () => {
	return (
		<>
			<h1
				className={
					'text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-700 text-center'
				}
			>
				Construa sites modernos com agilidade sem precisar sair do HTML.
			</h1>

			<div
				className={
					'mt-10 lg:mt-14 w-full grid grid-rows-3 grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-1'
				}
			>
				<Card
					className={'flex-1'}
					imgPath={'/img/nextjs.svg'}
					layoutId={'nextjs'}
					href={'/nextjs'}
				/>
				<Card
					className={'flex-1'}
					imgPath={'/img/tailwind.svg'}
					layoutId={'tailwind-css'}
					href={'/tailwind'}
				/>
				<Card
					className={'flex-1'}
					imgPath={'/img/framermotion.svg'}
					layoutId={'framer-motion'}
					href={'/framermotion'}
				/>
			</div>
		</>
	);
};

export default Home;
