import {
	Box,
	Button,
	Grid,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import Photo from '../../../../assets/images/f.png';
import { useNavigate } from 'react-router-dom';
import { AboutSm } from './AboutSm';

export const About = () => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	const navigate = useNavigate();

	return (
		<>
			{(smDown && (
				<>
					<AboutSm />
				</>
			)) || (
				<>
					<Grid
						container
						spacing={{ xs: 2, sm: 2, md: 4 }}
						columns={{ xs: 12, sm: 12, md: 12 }}
					>
						<Grid item xs={12} sm={12} md={6}>
							<Box
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
									flexDirection: 'column',
									py: '10rem',
									px: '5rem',
								}}
							>
								<Typography
									component="h1"
									variant="h3"
									sx={{
										fontWeight: 500,
										color: '#fff',
										alignSelf: 'flex-start',
									}}
								>
									Olá, eu sou o
								</Typography>

								<Typography
									component="h1"
									variant="h3"
									sx={{
										fontWeight: 500,
										color: '#8A2F08',
										alignSelf: 'flex-start',
									}}
								>
									Gabriel Campos
								</Typography>

								<Typography
									component="p"
									variant="subtitle1"
									sx={{
										fontSize: '1.5rem',
										color: '#828282',
										fontWeight: 500,
										alignSelf: 'flex-start',
									}}
								>
									Desenvolvedor Full-Stack
								</Typography>
								<Box
									sx={{
										width: '100%',
										display: 'flex',
										justifyContent: 'flex-start',
										alignItems: 'center',
										gap: 5,
										mt: 3,
									}}
								>
									<Button
										variant="contained"
										sx={{
											background: '#8A2F08',
										}}
										onClick={() => navigate('/curriculum')}
									>
										Download CV
									</Button>
									<Button
										variant="outlined"
										sx={{
											border: '1px solid #8A2F08',
											color: '#fff',
										}}
									>
										Entrar em contato
									</Button>
								</Box>
							</Box>
						</Grid>

						<Grid item xs={12} sm={12} md={6}>
							<Box
								sx={{
									width: '100%',
									height: '100%',
									display: 'flex',
									justifyContent: 'flex-end',
									alignItems: 'center',
									px: '5rem',
								}}
							>
								<Box
									component="img"
									src={Photo}
									sx={{
										width: '50%',
										borderRadius: '50%',
									}}
								/>
							</Box>
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
								flexDirection: 'column',
								gap: 2,
							}}
						>
							<Typography
								component="h1"
								variant="h3"
								sx={{
									fontWeight: 500,
									color: '#fff',
								}}
							>
								Sobre mim
							</Typography>

							<Box
								sx={{
									width: '50%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<Typography
									sx={{
										fontSize: '1rem',
										color: '#828282',
										fontWeight: 500,
										textAlign: 'justify',
									}}
								>
									Desenvolvedor Full-Stack com experiência em
									TypeScript, JavaScript, React.js, Node.js,
									Redux, Express, React Router DOM, Styled
									Components, Material UI, Bootstrap, criação
									e consumo de APIs, Jest, HTML, CSS,
									Tailwind, TypeORM, Git, GitHub, Prisma,
									Figma, WordPress, Elementor, SQL,
									PostgreSQL, Axios, React Hooks, React State.
									Apaixonado pelo desenvolvimento de
									componentes reutilizáveis e com experiência
									em projetos gerenciados por metodologias
									ágeis. Formado em Ciência da Computação pela
									FEMA (Fundação Educacional do Município de
									Assis) e no Programa Starter Web Full-Stack
									da Growdev.
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</>
			)}
		</>
	);
};
