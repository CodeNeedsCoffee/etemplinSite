import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isMobile: this.props.isMobile,
			footers: [],
		};
	}

	componentDidMount() {
		this.setState({
			footers: [
				{
					title: 'Training',
					description: [
						{ name: 'Pluralsight', url: 'https://www.pluralsight.com/' },
						{ name: 'Google Academy', url: 'https://analytics.google.com/analytics/academy/' },
					],
				},
				{
					title: 'Current Dev',
					description: [
						{ name: 'Pet Tracking App', url: 'https://puppyclock.com/' },
						{ name: ' Gift Management App', url: 'https://giftamizer.com/' },
					],
				},
				{
					title: 'Dev Sites',
					description: [
						{ name: 'Stack Overflow', url: 'https://stackoverflow.com/users/8467180/codeneedscoffee' },
						{ name: 'CodePen', url: 'https://codepen.io/CodeNeedsCoffee' },
						{ name: 'Github', url: 'https://github.com/CodeNeedsCoffee' },
						{ name: 'Docker Hub', url: 'https://hub.docker.com/u/codeneedscoffee' },
					],
				},
				{
					title: 'Achievements',
					description: [{ name: '1st Place, MU Midnight Run Media Festival' }, { name: 'Eagle Scout, BSA' }],
				},
			],
		});
		//console.log('Component Mounted');
	}

	componentDidUpdate(preprops) {
		if (this.props.isMobile !== preprops.isMobile) {
			this.setState({ isMobile: this.props.isMobile });
		}
	}

	copyright() {
		return (
			<Typography variant='body2' color='text.secondary' align='center' sx={{ mt: 5 }}>
				{'Copyright © '}
				<Link color='inherit' href='#top'>
					Evan Templin
				</Link>{' '}
				{new Date().getFullYear()}
			</Typography>
		);
	}

	renderBody = () => (
		<Container
			maxWidth='md'
			component='footer'
			sx={{
				borderTop: (theme) => `1px solid ${theme.palette.divider}`,
				mt: 8,
				py: [3, 6],
			}}>
			<Grid container spacing={4} justifyContent='space-evenly'>
				{this.state.footers.map((footer) => (
					<Grid item xs={6} sm={3} key={footer.title}>
						<Typography variant='h6' color='text.primary' gutterBottom>
							{footer.title}
						</Typography>
						<ul>
							{footer.description.map((item) => (
								<li key={item.url}>
									<Link href={item.url} target='_blank' variant='subtitle1' color='text.secondary'>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</Grid>
				))}
			</Grid>
			{this.copyright()}
		</Container>
	);
	render() {
		return <div>{this.renderBody()}</div>;
	}
}

export default Footer;
