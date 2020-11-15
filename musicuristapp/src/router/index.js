import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { RoutesConfig } from './routes.config'

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Redirect to="/home" />
				</Route>
				<Route>
					<Switch>
						{
							Object.entries(RoutesConfig)
								.map(([path, config]) => <Route key={path} path={path} {...config} />)
						}
					</Switch>
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default Routes;
