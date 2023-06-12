import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import UserLayout from "layouts/user-layout/UserLayout";
import { NotFound } from "@pages/NotFound";

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<div className="container-fuild px-0">
				<BrowserRouter>
					<Routes>
						{/* <Route path="/admin/*" element={<AdminLayout />} /> */}
						<Route path="/*" element={<UserLayout />} />
					</Routes>
				</BrowserRouter>

				{/* <ToastContainer /> */}
			</div>
		</QueryClientProvider>
	);
}

export default App;
