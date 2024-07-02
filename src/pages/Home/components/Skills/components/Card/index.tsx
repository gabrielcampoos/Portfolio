import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';

interface CardSkillProps {
	img: string;
	text: string;
}

export default function CardSkill({ img, text }: CardSkillProps) {
	return (
		<Card sx={{ maxWidth: 345, background: 'transparent' }}>
			<CardActionArea
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					background: 'transparent',
				}}
			>
				<Box
					sx={{
						width: 140,
						height: 140,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<CardMedia
						component="img"
						height="100%"
						image={img}
						sx={{
							width: '100%',
							background: 'transparent',
						}}
					/>
				</Box>
				<CardContent>
					<Typography
						gutterBottom
						variant="h5"
						component="div"
						sx={{ color: '#fff' }}
					>
						{text}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
