import React, { ReactNode } from 'react';
import Header from '../Header';

type Props = {
	children: ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<div>
			<Header />
			<div className={'max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 mt-10'}>
				{children}
			</div>
		</div>
	);
};

export default Layout;
