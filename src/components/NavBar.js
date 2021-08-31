import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
	return (
		<>
			<div className="col-3 bg-light p-5" height="100%">
				<div
					className="d-flex flex-column justify-content-center align-items-center"
					height="100%"
				>
					<div className="logo mb-5">Dog Walkin</div>
					<ul className="d-flex flex-column justify-content-around">
						{props.routes.map(({ key, path }) => (
							<li key={key} className="navigation p-3 mb-1">
								<Link to={path}>{key}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default NavBar;
