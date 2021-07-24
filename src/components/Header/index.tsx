import NavLink from 'components/NavLink';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
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
					<NavLink href={'/'} activeClassName={'active-menu-item'}>
						<a className={`${styles['menu-item']}`}>Home</a>
					</NavLink>
					<NavLink
						href={'/nextjs'}
						activeClassName={'active-menu-item'}
					>
						<a className={`${styles['menu-item']}`}>Next.js</a>
					</NavLink>
					<NavLink
						href={'/tailwind'}
						activeClassName={'active-menu-item'}
					>
						<a className={`${styles['menu-item']}`}>TailwindCSS</a>
					</NavLink>
					<NavLink
						href={'/framermotion'}
						activeClassName={'active-menu-item'}
					>
						<a className={`${styles['menu-item']}`}>FramerMotion</a>
					</NavLink>
				</nav>
			</div>
		</header>
	);
};

export default Header;
