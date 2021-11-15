import { createTheme } from '@mui/material/styles';
const theme = createTheme({
	palette: {
		primary: { 100: '#bbdefb', 300: '#8eacbb', 500: '#4d5e66' },
		grey: { 100: '#f5f5f5', 300: '#8eacbb', 700: '#4d5e66' },
	},
	root: {
		back: { background: '#34515e' },
	},
});
export default theme;
