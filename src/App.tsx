import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing, NotFound, Items, ItemDetails } from "./pages";
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
							<Route path="/items" element={<Items />} />
							<Route path="/items/:id" element={<ItemDetails />} />
						</Route>
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Router>
			</ToastProvider>
		</ThemeProvider>
	);
}

export default App;
