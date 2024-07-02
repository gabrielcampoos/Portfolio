import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

interface CardProjectProps {
	backgroundCard: string;
	text: string;
}

export const CardProject = ({ backgroundCard, text }: CardProjectProps) => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<>
			{(smDown && (
				<>
					<Box
						sx={{
							width: 300,
							height: 200,
							backgroundImage: ` linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundCard})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							'&:hover': {
								transform: 'scale(1.2)',
								transition: 'ease-in-out, .5s',
							},
						}}
					>
						<Box
							sx={{
								width: '100%',
								height: '100%',
								display: 'flex',
								justifyContent: 'center',
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
								}}
							>
								{text}
							</Typography>
						</Box>
					</Box>
				</>
			)) || (
				<>
					<Box
						sx={{
							width: 500,
							height: 300,
							backgroundImage: ` linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundCard})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							'&:hover': {
								transform: 'scale(1.2)',
								transition: 'ease-in-out, .5s',
							},
						}}
					>
						<Box
							sx={{
								width: '100%',
								height: '100%',
								display: 'flex',
								justifyContent: 'center',
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
								}}
							>
								{text}
							</Typography>
						</Box>
					</Box>
				</>
			)}
		</>
	);
};
