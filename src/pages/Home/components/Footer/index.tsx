import {
	Box,
	Grid,
	IconButton,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FooterSm } from './FooterSm';

interface Props {
	children: React.ReactNode;
}

export const Footer = () => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

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
		<>
			{(smDown && (
				<>
					<FooterSm />
				</>
			)) || (
				<>
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
								gap: 5,
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
								<IconButton size="large">
									<AlternateEmailIcon
										fontSize="large"
										color="warning"
									/>
								</IconButton>

								<Typography
									component="h1"
									variant="h6"
									sx={{ color: '#fff' }}
								>
									E-mail
								</Typography>

								<Typography
									component="p"
									variant="subtitle1"
									sx={{
										fontSize: '.9rem',
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
								<IconButton size="large">
									<PhoneIcon
										fontSize="large"
										color="warning"
									/>
								</IconButton>

								<Typography
									component="h1"
									variant="h6"
									sx={{ color: '#fff' }}
								>
									Telefone
								</Typography>

								<Typography
									component="p"
									variant="subtitle1"
									sx={{
										fontSize: '.9rem',
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
									<IconButton size="large">
										<LinkedInIcon
											fontSize="large"
											color="warning"
										/>
									</IconButton>

									<Typography
										component="h1"
										variant="h6"
										sx={{ color: '#fff' }}
									>
										LinkedIn
									</Typography>

									<Typography
										component="p"
										variant="subtitle1"
										sx={{
											fontSize: '.9rem',
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
									<IconButton size="large">
										<GitHubIcon
											fontSize="large"
											color="warning"
										/>
									</IconButton>

									<Typography
										component="h1"
										variant="h6"
										sx={{ color: '#fff' }}
									>
										GitHub
									</Typography>

									<Typography
										component="p"
										variant="subtitle1"
										sx={{
											fontSize: '.9rem',
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
				</>
			)}
		</>
	);
};
