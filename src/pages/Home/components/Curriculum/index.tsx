import { Box, Button, Container, Typography } from '@mui/material';
import Photo from '../../../../assets/images/f.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Html from '../../../../assets/images/html.png';
import Css from '../../../../assets/images/css.png';
import Axios from '../../../../assets/images/axios.png';
import Bootstrap from '../../../../assets/images/bootstrap.png';
import Elementor from '../../../../assets/images/elementor.png';
import Express from '../../../../assets/images/express.png';
import Figma from '../../../../assets/images/figma.png';
import Git from '../../../../assets/images/git.png';
import Github from '../../../../assets/images/github.png';
import Javascript from '../../../../assets/images/javascript.png';
import Jest from '../../../../assets/images/jest.png';
import Mui from '../../../../assets/images/mui.png';
import Node from '../../../../assets/images/node.png';
import PostgreSql from '../../../../assets/images/postgresql.png';
import Prisma from '../../../../assets/images/prisma.io.png';
import React from '../../../../assets/images/react.png';
import Redux from '../../../../assets/images/redux.png';
import Sql from '../../../../assets/images/sql.png';
import StyledComponents from '../../../../assets/images/styledcomponents.png';
import Tailwind from '../../../../assets/images/tailwind.png';
import TypeOrm from '../../../../assets/images/typeorm.png';
import Typescript from '../../../../assets/images/typescript.png';
import Wordpress from '../../../../assets/images/wordpress.png';
import generatePDF, { Margin, Options } from 'react-to-pdf';

export const Curriculum = () => {
	const targetRef = () => document.getElementById('targetRef');

	const options: Options = {
		method: 'save',

		page: {
			// margin is in MM, default is Margin.NONE = 0
			margin: Margin.SMALL,
			// default is 'A4'
			format: 'A4',
			// default is 'portrait'
			orientation: 'portrait',
		},
	};

	return (
		<>
			<Button
				variant="contained"
				sx={{
					mt: 5,
					ml: 5,
				}}
				onClick={() => generatePDF(targetRef, options)}
			>
				Download
			</Button>

			<Box
				component="div"
				id="targetRef"
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Container
					sx={{
						mt: 5,
					}}
				>
					<Box
						sx={{
							width: '100%',
							background: '#8A2F08',
							p: 5,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Box
							sx={{
								width: '50%',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								flexDirection: 'column',
							}}
						>
							<Typography
								component="h1"
								variant="h3"
								sx={{
									color: '#fff',
								}}
							>
								Gabriel Campos
							</Typography>

							<Typography
								component="p"
								variant="subtitle1"
								sx={{
									fontSize: '1.5rem',
									color: '#fff',
								}}
							>
								Desenvolvedor Full-Stack
							</Typography>
						</Box>

						<Box
							sx={{
								width: '50%',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
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
					</Box>

					<Box
						sx={{
							width: '100%',
							p: 2,
							display: 'flex',
							justifyContent: 'space-evenly',
							alignItems: 'center',
						}}
					>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								border: '1px solid #8A2F08',
								p: 1,
							}}
						>
							<LocationOnIcon />
							<Typography
								sx={{
									fontWeight: 500,
								}}
							>
								Assis - SP
							</Typography>
						</Box>

						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								border: '1px solid #8A2F08',
								p: 1,
							}}
						>
							<PhoneIcon />
							<Typography
								sx={{
									fontWeight: 500,
								}}
							>
								(18)99668-1138
							</Typography>
						</Box>

						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								border: '1px solid #8A2F08',
								p: 1,
							}}
						>
							<AlternateEmailIcon />
							<Typography
								sx={{
									fontWeight: 500,
								}}
							>
								gabrielcampoos.az@gmail.com
							</Typography>
						</Box>
					</Box>

					<Box
						sx={{
							width: '100%',
							height: '600px',
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<Box
							sx={{
								width: '40%',
								height: '100%',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								flexDirection: 'column',
							}}
						>
							<Box
								sx={{
									width: '100%',
									background: '#8A2F08',
								}}
							>
								<Typography
									component="h1"
									variant="h4"
									sx={{
										textAlign: 'center',
										color: '#fff',
									}}
								>
									Experiências
								</Typography>
							</Box>

							<Box
								sx={{
									width: '100%',
								}}
							>
								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '1rem',
										fontWeight: 500,
										mt: 2,
									}}
								>
									Programador Full-Stack
								</Typography>

								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '1rem',
										fontWeight: 400,
									}}
								>
									Target
								</Typography>

								<Typography
									component="p"
									variant="subtitle1"
									sx={{
										fontSize: '1rem',
										fontWeight: 400,
										color: '#6b6b6b',
									}}
								>
									Fev/2024 - Atual
								</Typography>

								<Typography
									component="p"
									variant="body1"
									sx={{
										fontSize: '1rem',
										fontWeight: 400,
										mb: 3,
									}}
								>
									Responsável por desenvolver sites e
									aplicações web,
								</Typography>

								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '1rem',
										fontWeight: 500,
									}}
								>
									Programador de multimidia
								</Typography>

								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '1rem',
										fontWeight: 400,
									}}
								>
									Olá telecom
								</Typography>

								<Typography
									component="p"
									variant="subtitle1"
									sx={{
										fontSize: '1rem',
										fontWeight: 400,
										color: '#6b6b6b',
									}}
								>
									Jul/2023 - Dez/2023
								</Typography>

								<Typography
									component="p"
									variant="body1"
									sx={{
										fontSize: '1rem',
										fontWeight: 400,
										mb: 3,
									}}
								>
									Responsável por desenvolver layouts
								</Typography>

								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '1rem',
										fontWeight: 500,
									}}
								>
									Auxiliar de TI
								</Typography>

								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '1rem',
										fontWeight: 400,
									}}
								>
									InfoHouse
								</Typography>

								<Typography
									component="p"
									variant="subtitle1"
									sx={{
										fontSize: '1rem',
										fontWeight: 400,
										color: '#6b6b6b',
									}}
								>
									Fev/2022 - Jul/2023
								</Typography>

								<Typography
									component="p"
									variant="body1"
									sx={{
										fontSize: '1rem',
										fontWeight: 400,
										mb: 3,
									}}
								>
									Responsável por formatar computadores e
									notebooks, instalar e consertar impressoras,
									configurações de roteadores e redes.
								</Typography>

								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '1rem',
										fontWeight: 500,
									}}
								>
									Programador Front-End
								</Typography>

								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '1rem',
										fontWeight: 400,
									}}
								>
									Target Sistemas
								</Typography>

								<Typography
									component="p"
									variant="subtitle1"
									sx={{
										fontSize: '1rem',
										fontWeight: 400,
										color: '#6b6b6b',
									}}
								>
									Fev/2022 - Jul/2022
								</Typography>

								<Typography
									component="p"
									variant="body1"
									sx={{
										fontSize: '1rem',
										fontWeight: 400,
										mb: 3,
									}}
								>
									Responsável por desenvolver layouts focado
									para e-commerce
								</Typography>
							</Box>
						</Box>
						<Box
							sx={{
								width: '40%',
								height: '100%',
								display: 'flex',
								alignItems: 'center',
								flexDirection: 'column',
								pt: 0.6,
							}}
						>
							<Box
								sx={{
									width: '100%',
									background: '#8A2F08',
								}}
							>
								<Typography
									component="h1"
									variant="h4"
									sx={{
										textAlign: 'center',
										color: '#fff',
									}}
								>
									Sobre mim
								</Typography>
							</Box>

							<Box
								sx={{
									width: '100%',
								}}
							>
								<Typography
									component="p"
									variant="h6"
									sx={{
										fontSize: '1rem',
										fontWeight: 400,
										mt: 2,
									}}
								>
									Desenvolvedor Full-Stack com experiência em
									Typescript, Javascript, React.js, Node.js,
									Redux, Express, RouterDOM, Styled
									Components, Material UI, Bootstrap, criação
									de APIs, consumo de APIs, Jest, Html, Css,
									Tailwind, TypeORM, Git, Github, Prisma,
									Figma, WordPress, Elementor, SQL,
									PostgreSQL, Axios, ReactHooks, ReactState,
									Apaixonado pelo desenvolvimento de
									componentes reutilizáveis. Também possui
									experiência em projetos gerenciados por
									Metodologias Ágeis. Formado em Ciência da
									Computação na FEMA(Fundação Educacional do
									Município de Assis) e Programa Starter Web
									Full-Stack na Growdev
								</Typography>
							</Box>
						</Box>
					</Box>

					<Box
						sx={{
							width: '100%',
							height: '600px',
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<Box
							sx={{
								width: '40%',
								height: '100%',
								display: 'flex',
								justifyContent: 'flex-start',
								alignItems: 'center',
								flexDirection: 'column',
							}}
						>
							<Box
								sx={{
									width: '100%',
									background: '#8A2F08',
								}}
							>
								<Typography
									component="h1"
									variant="h4"
									sx={{
										textAlign: 'center',
										color: '#fff',
									}}
								>
									Formação
								</Typography>
							</Box>
							<Box
								sx={{
									width: '100%',
									mt: 2,
								}}
							>
								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '1rem',
										fontWeight: 500,
									}}
								>
									Ciência da computação
								</Typography>

								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '1rem',
										fontWeight: 400,
									}}
								>
									FEMA(Fundação Educacional do Município de
									Assis)
								</Typography>

								<Typography
									component="p"
									variant="subtitle1"
									sx={{
										fontSize: '1rem',
										fontWeight: 400,
										color: '#6b6b6b',
									}}
								>
									Fev/2017 - Dez/2021
								</Typography>

								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '1rem',
										fontWeight: 500,
										mt: 2,
									}}
								>
									Programa starter web full stack
								</Typography>

								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '1rem',
										fontWeight: 400,
									}}
								>
									Growdev
								</Typography>

								<Typography
									component="p"
									variant="subtitle1"
									sx={{
										fontSize: '1rem',
										fontWeight: 400,
										color: '#6b6b6b',
									}}
								>
									Dez/2022 - Dez/2023
								</Typography>
							</Box>
						</Box>
						<Box
							sx={{
								width: '40%',
								height: '100%',
								display: 'flex',
								justifyContent: 'flex-start',
								alignItems: 'center',
								flexDirection: 'column',
							}}
						>
							<Box
								sx={{
									width: '100%',
									background: '#8A2F08',
								}}
							>
								<Typography
									component="h1"
									variant="h4"
									sx={{
										textAlign: 'center',
										color: '#fff',
									}}
								>
									Habilidades
								</Typography>
							</Box>
							<Box
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<Box
									sx={{
										width: '7%',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										mt: 2,
										mr: 15,
									}}
								>
									<Box
										component="img"
										src={Html}
										sx={{
											width: '100%',
										}}
									/>
									<Typography
										component="h1"
										variant="h6"
										sx={{
											fontWeight: 500,
										}}
									>
										Html
									</Typography>
								</Box>
								<Box
									sx={{
										width: '7%',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										mt: 2,
										mr: 15,
									}}
								>
									<Box
										component="img"
										src={Css}
										sx={{
											width: '100%',
										}}
									/>
									<Typography
										component="h1"
										variant="h6"
										sx={{
											fontWeight: 500,
										}}
									>
										Css
									</Typography>
								</Box>
								<Box
									sx={{
										width: '7%',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										mt: 2,
									}}
								>
									<Box
										component="img"
										src={Axios}
										sx={{
											width: '100%',
										}}
									/>
									<Typography
										component="h1"
										variant="h6"
										sx={{
											fontWeight: 500,
										}}
									>
										Axios
									</Typography>
								</Box>
							</Box>
							<Box
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<Box
									sx={{
										width: '7%',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										mt: 2,
										mr: 15,
									}}
								>
									<Box
										component="img"
										src={Bootstrap}
										sx={{
											width: '100%',
										}}
									/>
									<Typography
										component="h1"
										variant="h6"
										sx={{
											fontWeight: 500,
										}}
									>
										Bootstrap
									</Typography>
								</Box>
								<Box
									sx={{
										width: '7%',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										mt: 2,
										mr: 15,
									}}
								>
									<Box
										component="img"
										src={Elementor}
										sx={{
											width: '100%',
										}}
									/>
									<Typography
										component="h1"
										variant="h6"
										sx={{
											fontWeight: 500,
										}}
									>
										Elementor
									</Typography>
								</Box>
								<Box
									sx={{
										width: '7%',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										mt: 2,
									}}
								>
									<Box
										component="img"
										src={Express}
										sx={{
											width: '100%',
										}}
									/>
									<Typography
										component="h1"
										variant="h6"
										sx={{
											fontWeight: 500,
										}}
									>
										Express
									</Typography>
								</Box>
							</Box>
							<Box
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<Box
									sx={{
										width: '7%',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										mt: 2,
										mr: 15,
									}}
								>
									<Box
										component="img"
										src={Figma}
										sx={{
											width: '100%',
										}}
									/>
									<Typography
										component="h1"
										variant="h6"
										sx={{
											fontWeight: 500,
										}}
									>
										Figma
									</Typography>
								</Box>
								<Box
									sx={{
										width: '7%',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										mt: 2,
										mr: 15,
									}}
								>
									<Box
										component="img"
										src={Git}
										sx={{
											width: '100%',
										}}
									/>
									<Typography
										component="h1"
										variant="h6"
										sx={{
											fontWeight: 500,
										}}
									>
										Git
									</Typography>
								</Box>
								<Box
									sx={{
										width: '7%',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										mt: 2,
									}}
								>
									<Box
										component="img"
										src={Github}
										sx={{
											width: '100%',
										}}
									/>
									<Typography
										component="h1"
										variant="h6"
										sx={{
											fontWeight: 500,
										}}
									>
										Github
									</Typography>
								</Box>
							</Box>

							<Box
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<Box
									sx={{
										width: '7%',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										mt: 2,
										mr: 15,
									}}
								>
									<Box
										component="img"
										src={Javascript}
										sx={{
											width: '100%',
										}}
									/>
									<Typography
										component="h1"
										variant="h6"
										sx={{
											fontWeight: 500,
										}}
									>
										Javascript
									</Typography>
								</Box>
								<Box
									sx={{
										width: '7%',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										mt: 2,
										mr: 15,
									}}
								>
									<Box
										component="img"
										src={Jest}
										sx={{
											width: '100%',
										}}
									/>
									<Typography
										component="h1"
										variant="h6"
										sx={{
											fontWeight: 500,
										}}
									>
										Jest
									</Typography>
								</Box>
								<Box
									sx={{
										width: '7%',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										mt: 2,
									}}
								>
									<Box
										component="img"
										src={Mui}
										sx={{
											width: '100%',
										}}
									/>
									<Typography
										component="h1"
										variant="h6"
										sx={{
											fontWeight: 500,
										}}
									>
										Mui
									</Typography>
								</Box>
							</Box>

							<Box
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<Box
									sx={{
										width: '7%',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										mt: 2,
										mr: 15,
									}}
								>
									<Box
										component="img"
										src={Node}
										sx={{
											width: '100%',
										}}
									/>
									<Typography
										component="h1"
										variant="h6"
										sx={{
											fontWeight: 500,
										}}
									>
										Node
									</Typography>
								</Box>
								<Box
									sx={{
										width: '7%',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										mt: 2,
										mr: 15,
									}}
								>
									<Box
										component="img"
										src={PostgreSql}
										sx={{
											width: '100%',
										}}
									/>
									<Typography
										component="h1"
										variant="h6"
										sx={{
											fontWeight: 500,
										}}
									>
										PostgreSql
									</Typography>
								</Box>
								<Box
									sx={{
										width: '7%',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										mt: 2,
									}}
								>
									<Box
										component="img"
										src={Prisma}
										sx={{
											width: '100%',
										}}
									/>
									<Typography
										component="h1"
										variant="h6"
										sx={{
											fontWeight: 500,
										}}
									>
										Prisma
									</Typography>
								</Box>
							</Box>
							<Box
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<Box
									sx={{
										width: '7%',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										mt: 2,
										mr: 15,
									}}
								>
									<Box
										component="img"
										src={StyledComponents}
										sx={{
											width: '100%',
										}}
									/>
									<Typography
										component="h1"
										variant="h6"
										sx={{
											fontWeight: 500,
										}}
									>
										StyledComponents
									</Typography>
								</Box>
								<Box
									sx={{
										width: '7%',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										mt: 2,
										mr: 15,
									}}
								>
									<Box
										component="img"
										src={Tailwind}
										sx={{
											width: '100%',
										}}
									/>
									<Typography
										component="h1"
										variant="h6"
										sx={{
											fontWeight: 500,
										}}
									>
										Tailwind
									</Typography>
								</Box>
								<Box
									sx={{
										width: '7%',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										mt: 2,
									}}
								>
									<Box
										component="img"
										src={TypeOrm}
										sx={{
											width: '100%',
										}}
									/>
									<Typography
										component="h1"
										variant="h6"
										sx={{
											fontWeight: 500,
										}}
									>
										TypeOrm
									</Typography>
								</Box>
							</Box>
							<Box
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<Box
									sx={{
										width: '7%',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										mt: 2,
										mr: 15,
									}}
								>
									<Box
										component="img"
										src={Typescript}
										sx={{
											width: '100%',
										}}
									/>
									<Typography
										component="h1"
										variant="h6"
										sx={{
											fontWeight: 500,
										}}
									>
										Typescript
									</Typography>
								</Box>
								<Box
									sx={{
										width: '7%',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										mt: 2,
										mr: 15,
									}}
								>
									<Box
										component="img"
										src={Wordpress}
										sx={{
											width: '100%',
										}}
									/>
									<Typography
										component="h1"
										variant="h6"
										sx={{
											fontWeight: 500,
										}}
									>
										Wordpress
									</Typography>
								</Box>
								<Box
									sx={{
										width: '7%',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										mt: 2,
									}}
								>
									<Box
										component="img"
										src={Sql}
										sx={{
											width: '100%',
										}}
									/>
									<Typography
										component="h1"
										variant="h6"
										sx={{
											fontWeight: 500,
										}}
									>
										Sql
									</Typography>
								</Box>
							</Box>
							<Box
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<Box
									sx={{
										width: '7%',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										mt: 2,
										mr: 15,
									}}
								>
									<Box
										component="img"
										src={React}
										sx={{
											width: '100%',
										}}
									/>
									<Typography
										component="h1"
										variant="h6"
										sx={{
											fontWeight: 500,
										}}
									>
										React
									</Typography>
								</Box>
								<Box
									sx={{
										width: '7%',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										mt: 2,
										mr: 15,
									}}
								>
									<Box
										component="img"
										src={Redux}
										sx={{
											width: '100%',
										}}
									/>
									<Typography
										component="h1"
										variant="h6"
										sx={{
											fontWeight: 500,
										}}
									>
										Redux
									</Typography>
								</Box>
							</Box>
						</Box>
					</Box>
				</Container>
			</Box>
		</>
	);
};
