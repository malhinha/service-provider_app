import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
	return (
		<>
			<div className="col-3 bg-light p-5" height="100%">
				<div className="d-flex flex-column justify-content-center align-items-center">
					<div className="logo mb-5">Dog Walkin</div>
					<ul
						className="d-flex flex-column justify-content-around"
						width="100%"
					>
						{props.routes.map(({ key, path }) => (
							<Link key={key} to={path}>
								<li className="navigation p-3 mb-1" width="100%">
									{key}
								</li>
							</Link>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default NavBar;
