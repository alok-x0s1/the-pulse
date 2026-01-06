import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../components/ui/button";

export default function NotFound() {
	const navigate = useNavigate();

	return (
		<div className="flex min-h-screen items-center justify-center bg-background px-4">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="text-center"
			>
				<motion.div
					animate={{ rotate: 360 }}
					transition={{
						duration: 20,
						repeat: Number.POSITIVE_INFINITY,
						ease: "linear",
					}}
					className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border-2 border-border border-t-primary"
				>
					<span className="text-4xl font-bold text-primary">404</span>
				</motion.div>

				<h1 className="mb-2 text-4xl font-bold">Page Not Found</h1>
				<p className="mb-8 text-text-muted">
					The page you're looking for doesn't exist.
				</p>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3 }}
				>
					<Button onClick={() => navigate("/dashboard")}>
						Back to Dashboard
					</Button>
				</motion.div>
			</motion.div>
		</div>
	);
}
