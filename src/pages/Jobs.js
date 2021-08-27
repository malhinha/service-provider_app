import React, { useState, useEffect } from 'react';

import ServiceName from '../components/ServiceName';
import PetName from '../components/PetName';
import ClientName from '../components/ClientName';
import SimpleDateDisplay from '../components/SimpleDateDisplay';

export default function Jobs(props) {
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

	// delete job
	const handleDelete = async e => {
		console.log(`client id: ${e.target.dataset.client}`);
		console.log(`job id: ${e.target.dataset.job}`);

		try {
			// remove job record from client jobs array
			const responseClient = await fetch(
				`/api/clients/${e.target.dataset.client}/${e.target.dataset.job}`,
				{
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json'
					}
				}
			);
			const updatedClient = await responseClient.json();
			// remove entire job document from job db
			const responseJob = await fetch(`/api/jobs/${e.target.dataset.job}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const deletedJob = await responseJob.json();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<h1>Jobs</h1>
			<table>
				<thead>
					<tr>
						<th>Date</th>
						<th>Service</th>
						<th>Pets</th>
						<th>Client</th>
						<th>Charge</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{jobs.map((job, i) => {
						return (
							<tr key={job._id}>
								<td>
									<SimpleDateDisplay date={job.createdAt} />
								</td>
								<td>
									<ServiceName id={job.service} />
								</td>
								<td>
									<PetName id={job.client} />
								</td>
								<td>
									<ClientName id={job.client} />
								</td>
								<td>{job.charge}</td>
								<td>
									<button>Edit</button>
									<button
										data-job={job._id}
										data-client={job.client}
										onClick={handleDelete}
									>
										Delete
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
