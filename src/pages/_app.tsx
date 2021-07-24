import { AnimateSharedLayout } from 'framer-motion';
import type { AppProps } from 'next/app';
import 'styles/globals.scss';
import 'styles/tailwind.scss';
import Layout from '../components/Layout/index';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<AnimateSharedLayout>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</AnimateSharedLayout>
	);
};

export default MyApp;
