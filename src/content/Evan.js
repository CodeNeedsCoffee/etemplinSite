import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RemoveIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

class Evan extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isMobile: this.props.isMobile,
			skills: [],
			jobs: [],
			expanded: 'panel1',
		};
	}

	componentDidMount() {
		this.setState({
			skills: [
				{
					title: 'Databases',
					star: false,
					description: ['TSQL/MSSQL', 'MySQL/MariaDB', 'MongoDB'],
					// buttonText: 'Demo',
					// buttonVariant: 'outlined',
				},
				{
					title: 'Programming',
					//subheader: 'languages',
					star: false,
					description: ['NodeJS', 'ReactJS', 'JavaScript/jQuery', 'ASP .NET', 'C# & VB .NET'],
					buttonText: "See This Site's code",
					buttonVariant: 'contained',
					url: 'https://github.com/CodeNeedsCoffee/etemplinSite/',
				},
				{
					title: 'Design',
					star: false,
					description: ['Material Design', 'Adobe CC', 'CSS & SCSS'],
					// buttonText: 'See Examples',
					// buttonVariant: 'outlined',
				},
			],
			jobs: [
				{
					panel: 1,
					company: 'PennAir',
					title: 'System Engineer',
					time: 'September 2018 – Present',
					description:
						"I was orginalyl hired to perfom helpdesk duties as well as implent an ERP. During my time as a System Anaylst, I've found myself Assist users both on-site and remotely; exercise the abilities of Microsoft SCCM to maintain, log, and troubleshoot tickets. I've also held responsibilities in documenting, presenting, and training users on application usage. Furthermore I have deployed, maintained, and troubleshooted core Hyper-V, DHCP, DNS, AD, and file servers as well as created PowerShell scripts for automation and increased efficiencies. Once moving to a System Enginer, I found myself surpassing my intial tasks of ERP Implentation and taking on the duties of working with third party vendor to test, implenet, and train users on the new processed. I also found myself customizting the ERP to add additional request functionalities to the system. Working along side users, I not only was able to listen to their pain points, but find strategies to improve day to day tasks.",
				},
				{
					panel: 2,
					company: 'Cornerstone Operations Group',
					title: 'Application Developer Intern',
					time: 'April 2018 – August 2018',
					description:
						'While working as an intern, my responsibilities were to create micro-sites using HTML, JavaScript, SQL, SCSS, and Cold Fusion. I was tasked with communicating and working with clients to design mock-ups and as well as building fully functional products or simple customizations. I worked through the full Software Development Life Cycle and has to properly document code while communicating developer notes with our internal QA team.',
				},
				{
					panel: 3,
					company: 'Personal & Family',
					title: 'Developer & Webmaster',
					time: 'September 2013 – Present',
					description: '',
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

	handleExpand(panel) {
		if (this.state.expanded !== panel) {
			this.setState({ expanded: panel });
		} else {
			this.setState({ expanded: '' });
		}
	}

	renderBody = () => (
		<React.Fragment>
			<GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
			<CssBaseline />
			<Container disableGutters maxWidth='sm' component='main' sx={{ pt: 8, pb: 6 }}>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<Avatar alt='Evan Templin' src='/1.png' sx={{ width: 150, height: 150, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} />
				</div>

				<Typography component='h1' variant='h2' align='center' color='text.primary' gutterBottom>
					About Me
				</Typography>
				<Typography variant='h5' align='center' color='text.secondary' component='p'>
					have been programming and providing user-based solutions for over 3 years while working within Information Technology the last 5 years. I’m seeking to continue working in innovated
					development and future focused deployment.
				</Typography>
			</Container>

			<Container maxWidth='md' component='main'>
				<Typography component='h2' variant='h3' align='center' color='text.primary' gutterBottom>
					Skills
				</Typography>
				<Grid container spacing={5} alignItems='flex-end'>
					{this.state.skills.map((skill) => (
						<Grid item key={skill.title} xs={12} sm={skill.title === 'Design' ? 12 : 6} md={4}>
							<Card>
								<CardHeader
									title={skill.title}
									subheader={skill.subheader}
									titleTypographyProps={{ align: 'center' }}
									action={skill.star === true ? <StarIcon /> : null}
									subheaderTypographyProps={{
										align: 'center',
									}}
									sx={{
										backgroundColor: (theme) => (theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[700]),
									}}
								/>
								<CardContent>
									<ul>
										{skill.description.map((line) => (
											<Typography component='li' variant='subtitle1' align='center' key={line}>
												{line}
											</Typography>
										))}
									</ul>
								</CardContent>
								<CardActions>
									<Button fullWidth variant={skill.buttonVariant} href={skill.url} target='_blank'>
										{skill.buttonText}
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>

			<Container maxWidth='md' component='main' sx={{ marginTop: '50px' }}>
				<Typography component='h2' variant='h3' align='center' color='text.primary' gutterBottom>
					Experience
				</Typography>
				<div>
					{this.state.jobs.map((job) => (
						<Accordion
							expanded={this.state.expanded === `panel${job.panel}`}
							onChange={() => {
								this.handleExpand(`panel${job.panel}`);
							}}>
							<AccordionSummary aria-controls={`panel${job.panel}d-content`} id={`panel${job.panel}d-header`}>
								{this.state.expanded === `panel${job.panel}` ? (
									<RemoveIcon sx={{ fontSize: '1rem', marginTop: '.2em' }} />
								) : (
									<ExpandMoreIcon sx={{ fontSize: '1rem', marginTop: '.2em' }} />
								)}
								<span style={{ minWidth: '55%' }}>
									<Typography sx={{ display: 'inline' }}>{job.company}</Typography>
									<Typography sx={{ display: 'inline', marginLeft: '.5em', color: (theme) => theme.palette.primary[300] }}>{job.title}</Typography>
								</span>
								<span style={{ minWidth: '42%' }}>
									<Typography sx={{ color: 'text.secondary', textAlign: 'right' }}>{job.time}</Typography>
								</span>
							</AccordionSummary>
							<AccordionDetails>
								<Typography sx={{ whiteSpace: 'pre-line', marginLeft: '2em' }}>{job.description}</Typography>
							</AccordionDetails>
						</Accordion>
					))}
				</div>
			</Container>
		</React.Fragment>
	);
	render() {
		return <div>{this.renderBody()}</div>;
	}
}

export default Evan;
