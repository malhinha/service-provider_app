import React, { useState, useEffect } from 'react';

import SimpleDateDisplay from '../components/SimpleDateDisplay';

export default function Clients(props) {
	// Set Jobs state
	const [clients, setClients] = useState([]);

	// load Jobs API into state
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/clients');
				const data = await response.json();
				//sort jobs by date, descending
				const resortedData = data.sort(function(a, b) {
					if (a.updatedAt > b.updatedAt) return 1;
					if (a.updatedAt < b.updatedAt) return -1;
					return 0;
				});

				setClients(resortedData);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<>
			<h1>Clients</h1>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Number</th>
						<th>Pets</th>
						<th>Last Servive</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{clients.map((client, i) => {
						return (
							<tr key={client._id}>
								<td>{client.name}</td>
								<td>{client.number}</td>
								<td>{client.pets}</td>
								<td>
									<SimpleDateDisplay date={client.updatedAt} />
								</td>
								<td>
									<button>Edit</button>
									<button>Delete</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
