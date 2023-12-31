import React from "react";
import { Link } from "react-router-dom";
import useAuth from "features/authentication/hooks/useUser";

const Header = () => {
	const { isLoggedIn, userDetails, logout } = useAuth();

	return (
		<header>
			<nav className="navbar  fixed-top navbar-expand-lg navbar-light bg-dark p-2 text-white">
				<div className="container-fluid text-white">
					<a className="navbar-brand text-white" href="/">
						Codemite
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse text-white"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
							<li className="nav-item text-white">
								<Link
									className="nav-link active text-white"
									aria-current="page"
									to="/"
								>
									HOME
								</Link>
							</li>
						</ul>
						<div className="d-flex">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
								{isLoggedIn && (
									<>
										<p>{userDetails?.userName}</p>
										<li className="nav-item">
											<Link
												className="nav-link active text-white me-2"
												aria-current="page"
												to="/admin"
											>
												Dashboard
											</Link>
										</li>
										<li className="nav-item">
											<button
												className="btn btn-warning text-white"
												onClick={logout}
											>
												Logout
											</button>
										</li>
									</>
								)}

								{!isLoggedIn && (
									<>
										{" "}
										<li className="nav-item">
											<Link
												className="btn btn-warning text-white me-2"
												aria-current="page"
												to="/login"
											>
												Login
											</Link>
										</li>
										<li className="nav-item">
											<Link className="btn btn-warning text-white" to="/signup">
												Sign Up
											</Link>
										</li>
									</>
								)}
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
