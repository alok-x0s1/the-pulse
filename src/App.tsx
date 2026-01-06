import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./pages";
import { ThemeProvider } from "./components/theme-provider";
import Layout from "./components/core/layout";

function App() {
	return (
		<ThemeProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route element={<Layout />}></Route>
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
