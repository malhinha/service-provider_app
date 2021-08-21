import React, { useState } from 'react';

import AddJob from '../components/AddJob';
import JobsMiniList from '../components/JobsMiniList';

export default function Home(props) {
	return (
		<>
			<AddJob />
			<JobsMiniList />
		</>
	);
}
