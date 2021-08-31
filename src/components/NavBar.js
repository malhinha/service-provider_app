import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
	return (
		<div className="col-2 bg-light">
			<div className="logo mt-3 mb-3">Dog Walkin</div>
			<ul className="d-flex flex-column justify-content-around">
				{props.routes.map(({ key, path }) => (
					<li key={key} className="navigation">
						<Link to={path}>{key}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default NavBar;
