import { Box, useMediaQuery, useTheme } from '@mui/material';
import Appbar from './components/Appbar';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

export const Home = () => {
	return (
		<Box
			component="main"
			sx={{
				width: '100%',
				background: '#2b2b2b',
			}}
		>
			<Appbar />
			<About />
			<Skills />
			<Projects />
			<Footer />
		</Box>
	);
};
