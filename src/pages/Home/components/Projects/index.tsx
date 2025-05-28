import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { CardProject } from './components/Card';
import Anyway from '../../../../assets/images/tech.png';
import Douglas from '../../../../assets/images/douglas.png';
import Olatelecom from '../../../../assets/images/ola-telecom.png';
import Products from '../../../../assets/images/Products.png';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { ProjectsSm } from './ProjectsSm';

interface Props {
	children: React.ReactNode;
}

export const Projects = () => {
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
					<ProjectsSm />
				</>
			)) || (
				<>
					<Grid
						container
						spacing={{ xs: 2, sm: 2, md: 4 }}
						columns={{ xs: 12, sm: 12, md: 12 }}
						sx={{
							pb: 5,
						}}
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
									Projetos
								</Typography>
							</Section>
						</Grid>

						<Grid item xs={12} sm={12} md={12}>
							<Box
								sx={{
									width: '100%',
									px: 6,
									mb: 3,
								}}
							>
								<Section>
									<Typography
										component="h1"
										variant="h5"
										sx={{
											fontWeight: 500,
											color: '#fff',
											'&::after': {
												content: '""',
												display: 'block',
												width: '5%',
												height: '0.3rem',
												borderRadius: '2rem',
												backgroundImage:
													'linear-gradient(90deg, rgba(138,47,8,0.5494572829131652) 26%, rgba(138,47,8,0.6558998599439776) 53%, rgba(138,47,8,1) 100%);',
											},
										}}
									>
										Destaques
									</Typography>
								</Section>
							</Box>
						</Grid>
						<Box
							sx={{
								width: '100%',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								px: 10,
							}}
						>
							<Grid
								item
								xs={12}
								sm={12}
								md={6}
								sx={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<Section>
									<a
										href="https://tech-plum.vercel.app/"
										style={{ textDecoration: 'none' }}
									>
										<CardProject
											backgroundCard={Anyway}
											text="Anyway"
										/>
									</a>
								</Section>
							</Grid>
							<Grid
								item
								xs={12}
								sm={12}
								md={6}
								sx={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<Section>
									<a
										href="https://douglas-coiffeur.vercel.app/"
										style={{ textDecoration: 'none' }}
									>
										<CardProject
											backgroundCard={Douglas}
											text="Douglas Coiffeur"
										/>
									</a>
								</Section>
							</Grid>
						</Box>
						<Box
							sx={{
								width: '100%',
								display: 'flex',
								justifyContent: 'flex-start',
								alignItems: 'center',
								px: 10,
								mt: 3,
							}}
						>
							<Grid
								item
								xs={12}
								sm={12}
								md={6}
								sx={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<Section>
									<a
										href="https://ola-telecom.vercel.app/ola-telecom"
										style={{ textDecoration: 'none' }}
									>
										<CardProject
											backgroundCard={Olatelecom}
											text="Olá Telecom"
										/>
									</a>
								</Section>
							</Grid>

							<Grid
								item
								xs={12}
								sm={12}
								md={6}
								sx={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<Section>
									<a
										href="https://produto-two.vercel.app/"
										style={{ textDecoration: 'none' }}
									>
										<CardProject
											backgroundCard={Products}
											text="Lista de Produtos"
										/>
									</a>
								</Section>
							</Grid>
						</Box>
					</Grid>
				</>
			)}
		</>
	);
};
