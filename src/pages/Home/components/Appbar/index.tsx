import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid } from '@mui/material';

export default function Appbar() {
	return (
		<Grid
			container
			spacing={{ xs: 2, sm: 2, md: 4 }}
			columns={{ xs: 12, sm: 12, md: 12 }}
		>
			<Grid item xs={12} sm={12} md={12}>
				<Box
					sx={{
						flexGrow: 1,
					}}
				>
					<AppBar
						position="static"
						sx={{
							background: '#2b2b2b',
							borderBottom: '1px solid #8A2F08',
						}}
					>
						<Toolbar>
							<IconButton
								size="large"
								edge="start"
								color="warning"
								aria-label="menu"
								sx={{ mr: 2 }}
							>
								<MenuIcon />
							</IconButton>
							<Typography
								variant="h4"
								component="div"
								sx={{
									flexGrow: 1,
									textAlign: 'center',
									fontWeight: 700,
								}}
							>
								Portfólio
							</Typography>
						</Toolbar>
					</AppBar>
				</Box>
			</Grid>
		</Grid>
	);
}
