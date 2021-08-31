import React, { useState, useEffect } from 'react';

export default function PageTitle({ title }) {
	return (
		<>
			<header className="d-flex flex-row mb-3">
				<h2>{title}</h2>
			</header>
		</>
	);
}
