import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing, NotFound } from "./pages";
import { ThemeProvider } from "./components/theme-provider";
import Layout from "./components/ui/layout";

function App() {
	return (
		<ThemeProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route element={<Layout />}></Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
