import type { AppProps } from 'next/app';
import Layout from '../../components/Layout/index';
import '../styles/globals.scss';
import '../styles/tailwind.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
};

export default MyApp;
