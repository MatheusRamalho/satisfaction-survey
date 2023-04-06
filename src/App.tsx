import { DefaultTheme, ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { usePersistedState } from './hooks/usePersistedState';

import { Routers } from './routers/Routes';

import { defaultTheme } from './styles/default';
import GlobalStyle from './styles/global';

import { Navigation } from './components/Navgation';
import { Footer } from './components/Footer';

export const App = () => {
	const [theme, setTheme] = usePersistedState<DefaultTheme>('nav-theme', defaultTheme);

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<div className="App">
					<GlobalStyle />

					<Navigation />

					<main style={{
						marginTop: '112px',
						minHeight: 'calc(100vh - 312px)'
						// minHeight: 'calc(100vh - 112px - 312px)'
					}}>
						<Routers />
					</main>

					<Footer />
				</div>
			</BrowserRouter>
		</ThemeProvider>
	)
}
