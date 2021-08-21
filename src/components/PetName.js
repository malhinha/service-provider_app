import React, { useState, useEffect } from 'react';

export default function PetName({ id }) {
	// set Job state
	const [client, setClient] = useState({});

	// fetch & display
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/clients/${id}`);
				const data = await response.json();
				setClient(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return <>** {client.pets} **</>;
}
