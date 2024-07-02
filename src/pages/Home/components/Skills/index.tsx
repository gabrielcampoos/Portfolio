import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
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
import CardSkill from './components/Card';
import { SkillsSm } from './SkillsSm';

interface Props {
	children: React.ReactNode;
}

export const Skills = () => {
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
					<SkillsSm />
				</>
			)) || (
				<>
					<Grid
						container
						spacing={{ xs: 2, sm: 2, md: 4 }}
						columns={{ xs: 12, sm: 12, md: 12 }}
						sx={{
							py: '12rem',
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
										textAlign: 'center',
										mb: 15,
									}}
								>
									Habilidades
								</Typography>
								<Grid
									container
									spacing={{ xs: 2, sm: 2, md: 4 }}
									columns={{ xs: 12, sm: 12, md: 12 }}
								>
									<Grid item xs={12} sm={12} md={3}>
										<CardSkill img={Html} text="Html" />
									</Grid>

									<Grid item xs={12} sm={12} md={3}>
										<CardSkill img={Css} text="Css" />
									</Grid>

									<Grid item xs={12} sm={12} md={3}>
										<CardSkill img={Axios} text="Axios" />
									</Grid>

									<Grid item xs={12} sm={12} md={3}>
										<CardSkill
											img={Bootstrap}
											text="Bootstrap"
										/>
									</Grid>

									<Grid item xs={12} sm={12} md={3}>
										<CardSkill
											img={Elementor}
											text="Elementor"
										/>
									</Grid>

									<Grid item xs={12} sm={12} md={3}>
										<CardSkill
											img={Express}
											text="Express"
										/>
									</Grid>

									<Grid item xs={12} sm={12} md={3}>
										<CardSkill img={Figma} text="Figma" />
									</Grid>

									<Grid item xs={12} sm={12} md={3}>
										<CardSkill img={Git} text="Git" />
									</Grid>

									<Grid item xs={12} sm={12} md={3}>
										<CardSkill img={Github} text="Github" />
									</Grid>

									<Grid item xs={12} sm={12} md={3}>
										<CardSkill
											img={Javascript}
											text="Javascript"
										/>
									</Grid>

									<Grid item xs={12} sm={12} md={3}>
										<CardSkill img={Jest} text="Jest" />
									</Grid>

									<Grid item xs={12} sm={12} md={3}>
										<CardSkill img={Mui} text="Mui" />
									</Grid>

									<Grid item xs={12} sm={12} md={3}>
										<CardSkill img={Node} text="Node" />
									</Grid>

									<Grid item xs={12} sm={12} md={3}>
										<CardSkill
											img={PostgreSql}
											text="PostgreSql"
										/>
									</Grid>

									<Grid item xs={12} sm={12} md={3}>
										<CardSkill img={Prisma} text="Prisma" />
									</Grid>

									<Grid item xs={12} sm={12} md={3}>
										<CardSkill img={React} text="React" />
									</Grid>

									<Grid item xs={12} sm={12} md={3}>
										<CardSkill img={Redux} text="Redux" />
									</Grid>

									<Grid item xs={12} sm={12} md={3}>
										<CardSkill img={Sql} text="Sql" />
									</Grid>

									<Grid item xs={12} sm={12} md={3}>
										<CardSkill
											img={StyledComponents}
											text="StyledComponents"
										/>
									</Grid>

									<Grid item xs={12} sm={12} md={3}>
										<CardSkill
											img={Tailwind}
											text="Tailwind"
										/>
									</Grid>

									<Grid item xs={12} sm={12} md={3}>
										<CardSkill
											img={TypeOrm}
											text="TypeOrm"
										/>
									</Grid>

									<Grid item xs={12} sm={12} md={3}>
										<CardSkill
											img={Typescript}
											text="Typescript"
										/>
									</Grid>

									<Grid item xs={12} sm={12} md={3}>
										<CardSkill
											img={Wordpress}
											text="Wordpress"
										/>
									</Grid>
								</Grid>
							</Section>
						</Grid>
					</Grid>
				</>
			)}
		</>
	);
};
