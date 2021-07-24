import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { FiArrowRight, FiHome } from 'react-icons/fi';

const NextJSPage = () => {
	return (
		<div className={'flex flex-col items-center justify-center'}>
			<motion.img
				layoutId={'nextjs'}
				src={'/img/nextjs.svg'}
				alt={'nextjs'}
				className={'w-10/12 h-10/12 mx-auto'}
			/>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1, duration: 1 }}
			>
				<Link href={'/'}>
					<a
						className={
							'flex items-center gap-2 bg-gray-900 text-gray-50 px-6 py-3 text-lg font-semibold rounded hover:bg-gray-700'
						}
					>
						Voltar para a Home
						<FiArrowRight />
					</a>
				</Link>
			</motion.div>
		</div>
	);
};

export default NextJSPage;
