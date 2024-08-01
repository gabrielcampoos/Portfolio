import { Box, Grid, Typography } from '@mui/material';
import { CardProject } from '../components/Card';
import Saniport from '../../../../../assets/images/saniport.png';
import Douglas from '../../../../../assets/images/douglas.png';
import Target from '../../../../../assets/images/target.png';
import Olatelecom from '../../../../../assets/images/ola-telecom.png';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Products from '../../../../assets/images/Products.png';

interface Props {
	children: React.ReactNode;
}

export const ProjectsSm = () => {
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
					flexDirection: 'column',
					gap: 2,
				}}
			>
				<Grid item xs={12} sm={12} md={4}>
					<Section>
						<a
							href="https://saniport.com.br"
							style={{ textDecoration: 'none' }}
						>
							<CardProject
								backgroundCard={Saniport}
								text="Saniport"
							/>
						</a>
					</Section>
				</Grid>
				<Grid item xs={12} sm={12} md={4}>
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
				<Grid item xs={12} sm={12} md={4}>
					<Section>
						<a
							href="https://agenciatarget.com.br/"
							style={{ textDecoration: 'none' }}
						>
							<CardProject
								backgroundCard={Target}
								text="Target"
							/>
						</a>
					</Section>
				</Grid>
			</Box>
			<Box
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					mt: 2,
				}}
			>
				<Grid
					item
					xs={12}
					sm={12}
					md={4}
					sx={{
						width: '100%',
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
			</Box>

			<Box
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					mt: 2,
				}}
			>
				<Grid
					item
					xs={12}
					sm={12}
					md={4}
					sx={{
						width: '100%',
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
	);
};
