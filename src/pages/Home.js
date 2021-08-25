import React, { useState, useEffect } from 'react';

import AddJob from '../components/AddJob';
import JobsMiniList from '../components/JobsMiniList';

export default function Home(props) {
	// Set Jobs state
	const [jobs, setJobs] = useState([]);

	// load Jobs API into state
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/jobs');
				const data = await response.json();
				//sort jobs by date, descending
				const resortedData = data.sort(function(a, b) {
					if (a.updatedAt > b.updatedAt) return -1;
					if (a.updatedAt < b.updatedAt) return 1;
					return 0;
				});

				setJobs(resortedData);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<>
			<AddJob jobs={jobs} />
			<JobsMiniList jobs={jobs} />
		</>
	);
}
