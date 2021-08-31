import React, { useState, useEffect } from 'react';

import ServiceName from '../components/ServiceName';
import PetName from '../components/PetName';
import ClientName from '../components/ClientName';

export default function JobsMiniList({ jobs }) {
	// // Set Jobs state
	// const [jobs, setJobs] = useState([]);
	//
	// // load Jobs API into state
	// useEffect(() => {
	// 	(async () => {
	// 		try {
	// 			const response = await fetch('/api/jobs');
	// 			const data = await response.json();
	// 			//sort jobs by date, descending
	// 			const resortedData = data.sort(function(a, b) {
	// 				if (a.updatedAt > b.updatedAt) return -1;
	// 				if (a.updatedAt < b.updatedAt) return 1;
	// 				return 0;
	// 			});
	//
	// 			setJobs(resortedData);
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	})();
	// }, []);

	return (
		<>
			<div className="test-red flex-fill ml-1 pl-3">
				<table className="table table-sm">
					<tbody>
						{jobs.map((job, i) => {
							return (
								<tr key={job._id} className="row">
									<td>
										<ServiceName id={job.service} />
									</td>
									<td>
										<PetName id={job.client} />
									</td>
									<td>
										<ClientName id={job.client} />
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
}
