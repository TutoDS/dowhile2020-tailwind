import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {
	imgPath: string;
	layoutId?: string;
	href: string;
	className?: string;
};

const Card = ({ imgPath, layoutId, href, className, ...props }: Props) => {
	return (
		<Link href={href}>
			<div
				className={`relative w-full h-20 md:h-40 bg-gray-200 text-center rounded-xl shadow-md cursor-pointer hover:bg-gray-400 transition-all ${
					className || ''
				}`}
				{...props}
			>
				<motion.img
					layoutId={layoutId}
					src={imgPath}
					alt={layoutId}
					className={'md:w-full md:h-full w-32 h-auto mx-auto'}
				/>
			</div>
		</Link>
	);
};

export default Card;
