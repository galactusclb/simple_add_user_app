import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import UserRoutes from "routes/user.routes";

import useRouteGenerator from "hook/useRouteGenerator";

import Header from "./components/Header";

import style from "@styles/layouts/user-layout/user-layout.module.scss";

const UserLayout = () => {
	const location = useLocation();

	const { getRoutes } = useRouteGenerator();

	return (
		<div className={`container-fluid px-0 ${style["layout-wrapper"]}`}>
			{/* <Header /> */}

			<div className={`${style["page-wrapper"]} pt-5`}>
				<Routes>
					{getRoutes(UserRoutes, location?.pathname)}
					<Route path="*" element={<Navigate to="/notices" replace />} />
				</Routes>
			</div>
		</div>
	);
};

export default UserLayout;
