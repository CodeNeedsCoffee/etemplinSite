import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isMobile: this.props.isMobile,
		};
	}

	componentDidUpdate(preprops) {
		if (this.props.isMobile !== preprops.isMobile) {
			this.setState({ isMobile: this.props.isMobile });
		}
	}

	renderBody = () => (
		<AppBar id='top' position='static' color='default' elevation={0} sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
			<Toolbar sx={{ flexWrap: 'wrap' }}>
				<Typography variant='h6' color='inherit' noWrap sx={{ flexGrow: 1 }}>
					Evan Templin
				</Typography>
				<nav>
					<Link variant='button' color='text.primary' target='_blank' href='https://codepen.io/CodeNeedsCoffee' sx={{ my: 1, mx: 1.5 }}>
						CodePen
					</Link>
					<Link variant='button' color='text.primary' target='_blank' href='https://www.linkedin.com/in/evan-templin-ba862384/' sx={{ my: 1, mx: 1.5 }}>
						LinkedIn
					</Link>
				</nav>
				<Button href='mailto:evan@etemplin.com?subject=Reaching%20Out' variant='outlined' sx={{ my: 1, mx: 1.5 }}>
					Contact
				</Button>
			</Toolbar>
		</AppBar>
	);
	render() {
		return <div>{this.renderBody()}</div>;
	}
}

export default Header;
