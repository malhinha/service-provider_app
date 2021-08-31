import React, { Fragment, useState, useEffect, useRef } from 'react';

export default function AddJob() {
	// set states
	const [jobs, setJobs] = useState([]);
	const [clients, setClients] = useState([]);
	const [services, setServices] = useState([]);
	const [pets, setPets] = useState([]);
	const [price, setPrice] = useState();

	// set refs
	const clientSelection = useRef(null);
	const serviceSelection = useRef(null);
	const priceInput = useRef(null);

	// fetch & set
	useEffect(() => {
		(async () => {
			try {
				// do the fetches
				const clientsResponse = await fetch(`/api/clients`);
				const servicesResponse = await fetch(`/api/services`);
				const jobsResponse = await fetch(`/api/jobs`);
				const clientsData = await clientsResponse.json();
				const servicesData = await servicesResponse.json();
				const jobsData = await jobsResponse.json();
				// resort clients & services by alpha A-Z
				const resortedClientsData = clientsData.sort(function(a, b) {
					if (a.name > b.name) return 1;
					if (a.name < b.name) return -1;
					return 0;
				});
				const resortedServicesData = servicesData.sort(function(a, b) {
					if (a.title > b.title) return 1;
					if (a.title < b.title) return -1;
					return 0;
				});
				//do the sets into state
				setClients(resortedClientsData);
				setServices(resortedServicesData);
				setJobs(jobsData);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	// save new job
	const handleSubmit = async e => {
		e.preventDefault();

		try {
			const response = await fetch('/api/jobs', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					client: clientSelection.current.value,
					service: serviceSelection.current.value,
					charge: price
				})
			});
			const jobsData = await response.json();

			console.log(price, typeof price);

			setJobs(jobsData);
		} catch (error) {
			console.error(error);
		}
	};

	//
	const onServiceChange = e => {
		(async () => {
			try {
				const response = await fetch(`/api/services/${e.target.value}`);
				const data = await response.json();
				setPrice(data.cost);
			} catch (error) {
				console.error(error);
			}
		})();
	};

	const onClientChange = e => {
		(async () => {
			try {
				const response = await fetch(`/api/clients/${e.target.value}`);
				const data = await response.json();
				setPets(data.pets);
			} catch (error) {
				console.error(error);
			}
		})();
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>Client:</label>
			<select name="client" ref={clientSelection} onChange={onClientChange}>
				<option></option>
				{clients.map((client, i) => {
					return (
						<option key={client._id} value={client._id}>
							{client.name}
						</option>
					);
				})}
			</select>
			<br />
			<label>Pets:</label>
			{pets}
			<br />
			<label>Service:</label>
			<select name="service" ref={serviceSelection} onChange={onServiceChange}>
				<option></option>
				{services.map((service, i) => {
					return (
						<option key={service._id} value={service._id}>
							{service.title}
						</option>
					);
				})}
			</select>
			<br />
			<label>Cost:</label>${price}
			<br />
			<input type="submit" value="Save" />
		</form>
	);
}
