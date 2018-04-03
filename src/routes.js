import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import ClubView from './components/ClubView';
import ClubSelector from './components/ClubSelector';
import NationView from './components/NationView';
import NationSelector from './components/NationSelector';
import Versus from './components/Versus';
import MatchDetails from './components/MatchDetails';
import Manage from './components/Manage';

const ClubRoutes = ({ match }) => (
	<div>
		<Route path={`${match.url}/:year/:team`} component={ClubView} />
		<Route exact path={`${match.url}/:year`} component={ClubSelector} />
	</div>
);

const NationRoutes = ({ match }) => (
	<div>
		<Route path={`${match.url}/:year/:team`} component={NationView} />
		<Route exact path={`${match.url}`} component={NationSelector} />
	</div>
);

const Routes = (props) => (
	<BrowserRouter>
		<div>
			<div className="text-center header"><Link to="/">Football Archive</Link></div>
			<Route exact path="/" component={Home} />
			<Route path="/club" component={ClubRoutes} />
			<Route path="/nation" component={NationRoutes} />
			<Route path="/versus/:teamA/:teamB" component={Versus} />
			<Route path="/match/:url" component={MatchDetails} />
			<Route path="/manage" component={Manage} />
		</div>
	</BrowserRouter>
);

export default Routes;
