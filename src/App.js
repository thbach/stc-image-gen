import { Route, Switch } from 'react-router-dom';

import ImgGenerator from './pages/ImgGenerator';

function App() {
	return (
		<>
			<Switch>
				<Route exact path="/images/:name/:job/:rarity/:basehp/:basemp">
					<ImgGenerator />
				</Route>
			</Switch>
		</>
	);
}

export default App;
