import React from 'react';
import Home from '../pages/Home';
import Clients from '../pages/Clients';
import Jobs from '../pages/Jobs';
import Invoices from '../pages/Invoices';
import Settings from '../pages/Settings';

const routes = [
	{
		Component: Settings,
		key: 'Settings',
		path: '/settings'
	},
	// {
	// 	Component: Invoices,
	// 	key: 'Invoices',
	// 	path: '/invoices'
	// },
	{
		Component: Clients,
		key: 'Clients',
		path: '/clients'
	},
	{
		Component: Jobs,
		key: 'Jobs',
		path: '/jobs'
	},
	{
		Component: Home,
		key: 'Dashboard',
		path: '/'
	}
];

export default routes;
