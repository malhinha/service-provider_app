import React, { useState, useEffect } from 'react';

import PageTitle from '../components/PageTitle';
import SimpleDateDisplay from '../components/SimpleDateDisplay';

export default function Clients(props) {
	// Set Clients state
	const [clients, setClients] = useState([]);

	// load Clients API into state
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

	// delete client
	const handleDelete = async e => {
		try {
			const response = await fetch(`/api/clients/${e.target.dataset.client}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const deletedClient = await response.json();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<div className="col p-5">
				<PageTitle title={props.page} />
				<main className="d-flex flex-row justify-content-between">
					<table className="table table-sm">
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
											<button data-client={client._id} onClick={handleDelete}>
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
