import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';

const Header = () => {
	return (
		<header className={'shadow bg-gray-800 text-gray-300'}>
			<div
				className={
					'max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-center md:justify-between py-2 md:py-4'
				}
			>
				<Link href={'/'}>
					<a>
						<Image
							src={'/img/logo.svg'}
							alt={'DoWhile 2020'}
							width={150}
							height={33}
						/>
					</a>
				</Link>

				<nav className={'hidden md:flex items-center gap-4'}>
					<Link href={'/'}>
						<a className={`${styles['menu-item']}`}>Home</a>
					</Link>
					<Link href={'/nextjs'}>
						<a className={`${styles['menu-item']}`}>Next.js</a>
					</Link>
					<Link href={'/tailwind'}>
						<a className={`${styles['menu-item']}`}>TailwindCSS</a>
					</Link>
					<Link href={'/framermotion'}>
						<a className={`${styles['menu-item']}`}>FramerMotion</a>
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
