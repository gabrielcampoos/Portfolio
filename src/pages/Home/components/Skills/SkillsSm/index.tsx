import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Html from '../../../../../assets/images/html.png';
import Css from '../../../../../assets/images/css.png';
import Axios from '../../../../../assets/images/axios.png';
import Bootstrap from '../../../../../assets/images/bootstrap.png';
import Elementor from '../../../../../assets/images/elementor.png';
import Express from '../../../../../assets/images/express.png';
import Figma from '../../../../../assets/images/figma.png';
import Git from '../../../../../assets/images/git.png';
import Github from '../../../../../assets/images/github.png';
import Javascript from '../../../../../assets/images/javascript.png';
import Jest from '../../../../../assets/images/jest.png';
import Mui from '../../../../../assets/images/mui.png';
import Node from '../../../../../assets/images/node.png';
import PostgreSql from '../../../../../assets/images/postgresql.png';
import Prisma from '../../../../../assets/images/prisma.io.png';
import React from '../../../../../assets/images/react.png';
import Redux from '../../../../../assets/images/redux.png';
import Sql from '../../../../../assets/images/sql.png';
import StyledComponents from '../../../../../assets/images/styledcomponents.png';
import Tailwind from '../../../../../assets/images/tailwind.png';
import TypeOrm from '../../../../../assets/images/typeorm.png';
import Typescript from '../../../../../assets/images/typescript.png';
import Wordpress from '../../../../../assets/images/wordpress.png';
import CardSkill from '../components/Card';

interface Props {
	children: React.ReactNode;
}

export const SkillsSm = () => {
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
				py: '5rem',
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
				<Grid item xs={12} sm={12} md={3}>
					<Section>
						<CardSkill img={Html} text="Html" />
					</Section>
				</Grid>

				<Grid item xs={12} sm={12} md={3}>
					<Section>
						<CardSkill img={Css} text="Css" />
					</Section>
				</Grid>

				<Grid item xs={12} sm={12} md={3}>
					<Section>
						<CardSkill img={Axios} text="Axios" />
					</Section>
				</Grid>

				<Grid item xs={12} sm={12} md={3}>
					<Section>
						<CardSkill img={Bootstrap} text="Bootstrap" />
					</Section>
				</Grid>

				<Grid item xs={12} sm={12} md={3}>
					<Section>
						<CardSkill img={Elementor} text="Elementor" />
					</Section>
				</Grid>

				<Grid item xs={12} sm={12} md={3}>
					<Section>
						<CardSkill img={Express} text="Express" />
					</Section>
				</Grid>

				<Grid item xs={12} sm={12} md={3}>
					<CardSkill img={Figma} text="Figma" />
				</Grid>

				<Grid item xs={12} sm={12} md={3}>
					<Section>
						<CardSkill img={Git} text="Git" />
					</Section>
				</Grid>

				<Grid item xs={12} sm={12} md={3}>
					<Section>
						<CardSkill img={Github} text="Github" />
					</Section>
				</Grid>

				<Grid item xs={12} sm={12} md={3}>
					<Section>
						<CardSkill img={Javascript} text="Javascript" />
					</Section>
				</Grid>

				<Grid item xs={12} sm={12} md={3}>
					<Section>
						<CardSkill img={Jest} text="Jest" />
					</Section>
				</Grid>

				<Grid item xs={12} sm={12} md={3}>
					<Section>
						<CardSkill img={Mui} text="Mui" />
					</Section>
				</Grid>

				<Grid item xs={12} sm={12} md={3}>
					<Section>
						<CardSkill img={Node} text="Node" />
					</Section>
				</Grid>

				<Grid item xs={12} sm={12} md={3}>
					<Section>
						<CardSkill img={PostgreSql} text="PostgreSql" />
					</Section>
				</Grid>

				<Grid item xs={12} sm={12} md={3}>
					<Section>
						<CardSkill img={Prisma} text="Prisma" />
					</Section>
				</Grid>

				<Grid item xs={12} sm={12} md={3}>
					<Section>
						<CardSkill img={React} text="React" />
					</Section>
				</Grid>

				<Grid item xs={12} sm={12} md={3}>
					<Section>
						<CardSkill img={Redux} text="Redux" />
					</Section>
				</Grid>

				<Grid item xs={12} sm={12} md={3}>
					<Section>
						<CardSkill img={Sql} text="Sql" />
					</Section>
				</Grid>

				<Grid item xs={12} sm={12} md={3}>
					<Section>
						<CardSkill
							img={StyledComponents}
							text="StyledComponents"
						/>
					</Section>
				</Grid>

				<Grid item xs={12} sm={12} md={3}>
					<Section>
						<CardSkill img={Tailwind} text="Tailwind" />
					</Section>
				</Grid>

				<Grid item xs={12} sm={12} md={3}>
					<Section>
						<CardSkill img={TypeOrm} text="TypeOrm" />
					</Section>
				</Grid>

				<Grid item xs={12} sm={12} md={3}>
					<Section>
						<CardSkill img={Typescript} text="Typescript" />
					</Section>
				</Grid>

				<Grid item xs={12} sm={12} md={3}>
					<Section>
						<CardSkill img={Wordpress} text="Wordpress" />
					</Section>
				</Grid>
			</Box>
		</Grid>
	);
};
