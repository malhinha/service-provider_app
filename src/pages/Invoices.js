import React, { useState } from 'react';

import PageTitle from '../components/PageTitle';

export default function Invoices(props) {
	return (
		<>
			<div className="col p-5">
				<PageTitle title={props.page} />
				<main className="d-flex flex-row justify-content-between">
					This is the {props.page} page
				</main>
			</div>
		</>
	);
}
