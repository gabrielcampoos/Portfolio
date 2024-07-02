import { Box, Button, Grid, Typography } from '@mui/material';
import Photo from '../../../../../assets/images/f.png';
import { useNavigate } from 'react-router-dom';

export const AboutSm = () => {
	const navigate = useNavigate();

	return (
		<Grid
			container
			spacing={{ xs: 2, sm: 2, md: 4 }}
			columns={{ xs: 12, sm: 12, md: 12 }}
		>
			<Grid item xs={6} sm={6} md={6}>
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						alignItems: 'center',
						flexDirection: 'column',
					}}
				>
					<Typography
						component="h1"
						variant="h5"
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
						variant="h5"
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
							fontSize: '1rem',
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
							gap: 1,
							mt: 3,
						}}
					>
						<Button
							variant="contained"
							size="small"
							sx={{
								background: '#8A2F08',
								fontSize: '.5rem',
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
								fontSize: '.5rem',
							}}
						>
							Entrar em contato
						</Button>
					</Box>
				</Box>
			</Grid>

			<Grid item xs={6} sm={6} md={6}>
				<Box
					sx={{
						width: '100%',
						height: '100%',
						display: 'flex',
						justifyContent: 'flex-end',
						alignItems: 'center',
						px: 2,
					}}
				>
					<Box
						component="img"
						src={Photo}
						sx={{
							width: '100%',
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
					mt: 5,
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
						width: '100%',
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
							px: 2,
						}}
					>
						Desenvolvedor Full-Stack com experiência em Typescript,
						Javascript, React.js, Node.js, Redux, Express,
						RouterDOM, Styled Components, Material UI, Bootstrap,
						criação de APIs, consumo de APIs, Jest, Html, Css,
						Tailwind, TypeORM, Git, Github, Prisma, Figma,
						WordPress, Elementor, SQL, PostgreSQL, Axios,
						ReactHooks, ReactState, Apaixonado pelo desenvolvimento
						de componentes reutilizáveis. Também possui experiência
						em projetos gerenciados por Metodologias Ágeis. Formado
						em Ciência da Computação na FEMA(Fundação Educacional do
						Município de Assis) e Programa Starter Web Full-Stack na
						Growdev
					</Typography>
				</Box>
			</Grid>
		</Grid>
	);
};
