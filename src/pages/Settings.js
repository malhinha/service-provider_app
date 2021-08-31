import React, { useState, useEffect } from 'react';

import PageTitle from '../components/PageTitle';

export default function Settings(props) {
	// Set Services state
	const [services, setServices] = useState([]);

	// load Services API into state
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/services');
				const data = await response.json();
				//sort jobs by date, descending
				const resortedData = data.sort(function(a, b) {
					if (a.updatedAt > b.updatedAt) return 1;
					if (a.updatedAt < b.updatedAt) return -1;
					return 0;
				});

				setServices(resortedData);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	// delete client
	const handleDelete = async e => {
		try {
			const response = await fetch(
				`/api/services/${e.target.dataset.service}`,
				{
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json'
					}
				}
			);
			const deletedService = await response.json();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<div className="col p-5">
				<PageTitle title={props.page} />
				<main className="d-flex flex-column justify-content-between">
					<h4 className="mb-4">Available Services</h4>
					<table className="table table-sm">
						<thead>
							<tr>
								<th>Name</th>
								<th>Cost</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{services.map((service, i) => {
								return (
									<tr key={service._id}>
										<td>{service.title}</td>
										<td>{service.cost}</td>
										<td align="right">
											<button className="btn btn-outline-primary btn-sm mr-1">
												Edit
											</button>
											<button
												className="btn btn-outline-primary btn-sm"
												data-service={service._id}
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
				</main>
			</div>
		</>
	);
}
