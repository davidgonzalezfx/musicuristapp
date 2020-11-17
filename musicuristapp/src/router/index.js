import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { RoutesConfig } from './routes.config'
import Layout from '../components/Layout'

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Redirect to="/home" />
				</Route>
				<Route>
					<Layout>
						<Switch>
							{
								Object.entries(RoutesConfig)
									.map(([path, config]) => <Route key={path} path={path} {...config} />)
							}
						</Switch>
					</Layout>
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default Routes;
