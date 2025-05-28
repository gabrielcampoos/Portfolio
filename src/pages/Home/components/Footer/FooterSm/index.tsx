import { Box, Grid, IconButton, Typography } from '@mui/material';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

interface Props {
	children: React.ReactNode;
}

export const FooterSm = () => {
	const Section: React.FC<Props> = ({ children }) => {
		const ref = useRef(null);
		const isInView = useInView(ref, { once: true });

		return (
			<section
				ref={ref}
				style={{
					opacity: isInView ? 1 : 0,
					transition: 'all 2s 0.6s',
				}}
			>
				{children}
			</section>
		);
	};

	return (
		<Grid
			container
			spacing={{ xs: 2, sm: 2, md: 4 }}
			columns={{ xs: 12, sm: 12, md: 12 }}
		>
			<Grid
				item
				xs={12}
				sm={12}
				md={12}
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					mt: 10,
				}}
			>
				<Section>
					<Typography
						component="h1"
						variant="h3"
						sx={{
							fontWeight: 500,
							color: '#fff',
						}}
					>
						Contatos
					</Typography>
				</Section>
			</Grid>
			<Grid
				item
				xs={12}
				sm={12}
				md={12}
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					gap: 2,
				}}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
					}}
				>
					<IconButton size="small">
						<AlternateEmailIcon fontSize="small" color="warning" />
					</IconButton>

					<Typography
						component="h1"
						variant="h6"
						sx={{ fontSize: '.5rem', color: '#fff' }}
					>
						E-mail
					</Typography>

					<Typography
						component="p"
						variant="subtitle1"
						sx={{
							fontSize: '.5rem',
							color: '#828282',
							fontWeight: 500,
							alignSelf: 'flex-start',
						}}
					>
						gabrielcampoos.az@gmail.com
					</Typography>
				</Box>

				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
					}}
				>
					<IconButton size="small">
						<PhoneIcon fontSize="small" color="warning" />
					</IconButton>

					<Typography
						component="h1"
						variant="h6"
						sx={{ fontSize: '.5rem', color: '#fff' }}
					>
						Telefone
					</Typography>

					<Typography
						component="p"
						variant="subtitle1"
						sx={{
							fontSize: '.5rem',
							color: '#828282',
							fontWeight: 500,
							alignSelf: 'flex-start',
						}}
					>
						(18)99622-2316
					</Typography>
				</Box>

				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
					}}
				>
					<a
						href="https://linkedin.com/in/gabriel-campos-859a32223"
						style={{ textDecoration: 'none' }}
					>
						<IconButton size="small">
							<LinkedInIcon fontSize="small" color="warning" />
						</IconButton>

						<Typography
							component="h1"
							variant="h6"
							sx={{ fontSize: '.5rem', color: '#fff' }}
						>
							LinkedIn
						</Typography>

						<Typography
							component="p"
							variant="subtitle1"
							sx={{
								fontSize: '.5rem',
								color: '#828282',
								fontWeight: 500,
								alignSelf: 'flex-start',
							}}
						>
							@gabrielcampoos
						</Typography>
					</a>
				</Box>

				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
					}}
				>
					<a
						href="https://github.com/gabrielcampoos"
						style={{ textDecoration: 'none' }}
					>
						<IconButton size="small">
							<GitHubIcon fontSize="small" color="warning" />
						</IconButton>

						<Typography
							component="h1"
							variant="h6"
							sx={{ fontSize: '.5rem', color: '#fff' }}
						>
							GitHub
						</Typography>

						<Typography
							component="p"
							variant="subtitle1"
							sx={{
								fontSize: '.5rem',
								color: '#828282',
								fontWeight: 500,
								alignSelf: 'flex-start',
							}}
						>
							@gabrielcampoos
						</Typography>
					</a>
				</Box>
			</Grid>
		</Grid>
	);
};
