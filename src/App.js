import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Theme from './Theme';
import Footer from './components/Footer';
import Evan from './content/Evan';
import Header from './components/Header';
import { isMobile } from 'react-device-detect';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			isMobile: isMobile,
		};
	}
	renderBody = () => (
		<ThemeProvider theme={Theme}>
			<Box sx={{ pb: 7, height: '100%' }} ref={this.ref}>
				<CssBaseline />
				<Router>
					<Header isMobile={this.state.isMobile} />
					<Routes>
						<Route path='/' element={<Evan isMobile={this.state.isMobile} />} />
					</Routes>
					<Footer isMobile={this.state.isMobile} />
				</Router>
			</Box>
		</ThemeProvider>
	);
	render() {
		return <div>{this.renderBody()}</div>;
	}
}

export default App;
/*
process.on('SIGTERM', () => {
	server.close(() => {
		console.log('Process terminated');
	});
});
*/
