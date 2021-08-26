import React from 'react';
import NavBar from '../components/NavBar';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import routes from './routes';

const AppRouter = () => {
	return (
		<Router>
			<NavBar routes={routes.reverse()} />
			<Switch>
				{routes.map(({ Component, key, path }) => (
					<Route
						key={key}
						path={path}
						exact
						component={() => <Component page={key} />}
					></Route>
				))}
			</Switch>
		</Router>
	);
};

export default AppRouter;
