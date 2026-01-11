import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
	Landing,
	NotFound,
	Items,
	ItemDetails,
	Dashboard,
	Settings,
	Profile,
	Analytics,
} from "./pages";
import { ThemeProvider } from "./components/theme-provider";
import Layout from "./components/ui/layout";
import { ToastProvider } from "./components/toast-provider";

function App() {
	return (
		<ThemeProvider>
			<ToastProvider>
				<Router>
					<Routes>
						<Route path="/" element={<Landing />} />

						<Route element={<Layout />}>
							<Route path="/dashboard" element={<Dashboard />} />
							<Route path="/items" element={<Items />} />
							<Route
								path="/items/:id"
								element={<ItemDetails />}
							/>
							<Route path="/profile" element={<Profile />} />
							<Route path="/settings" element={<Settings />} />
							<Route path="/analytics" element={<Analytics />} />
						</Route>
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Router>
			</ToastProvider>
		</ThemeProvider>
	);
}

export default App;
