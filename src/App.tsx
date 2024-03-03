import Theme from "./components/Theme";
import { useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PatientAddminssion from "./pages/PatientAddminssion";
import StaffAddmission from "./pages/StaffAddmission";
import ExpenseBill from "./pages/ExpenseBill";
import ServiceBill from "./pages/ServiceBill";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";

export const AuthContext = createContext(
	{} as {
		auth: boolean;
		setAuth: React.Dispatch<React.SetStateAction<boolean>>;
	},
);
const App = () => {
	const [auth, setAuth] = useState(sessionStorage.getItem("carezone-auth") ? true : false);

	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			<Theme />
			<BrowserRouter basename="/">
				<Routes>
					<Route path="/" element={<Layout />}>
						{/* ALl Routes */}
						<Route index element={<Dashboard />} />
						<Route path="/new-patient" element={<PatientAddminssion />} />
						<Route path="/new-staff" element={<StaffAddmission />} />
						<Route path="/expense-bill" element={<ExpenseBill />} />
						<Route path="/service-bill" element={<ServiceBill />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</AuthContext.Provider>
	);
};

export default App;
