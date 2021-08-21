import React, { useState, useEffect } from 'react';

export default function ServiceName({ id }) {
	// set Job state
	const [service, setService] = useState({});

	// fetch & display
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/services/${id}`);
				const data = await response.json();
				setService(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return <>** {service.title} **</>;
}
