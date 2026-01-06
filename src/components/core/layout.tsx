import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./header";

export default function Layout() {
	return (
		<div className="flex h-screen overflow-hidden bg-background">
			<Sidebar />
			<div className="flex flex-1 flex-col">
				<Header />
				<main className="flex-1 overflow-auto bg-background">
					<div className="min-h-full p-4 md:p-8">
						<Outlet />
					</div>
				</main>
			</div>
		</div>
	);
}
