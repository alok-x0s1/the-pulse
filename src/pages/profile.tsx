import { motion } from "framer-motion";
import { User, Mail, Calendar, Shield, LogOut } from "lucide-react";
import { useState } from "react";
import { useToast } from "../hooks/useToast";
import Card from "../components/ui/card";
import Button from "../components/ui/button";
import ConfirmDialog from "../components/confirm-dialog";
import { useNavigate } from "react-router-dom";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5 },
	},
};

export default function Profile() {
	const [logoutConfirm, setLogoutConfirm] = useState(false);
	const toast = useToast();
	const navigate = useNavigate();

	const handleLogout = () => {
		toast.success("Logged out successfully!");
		setLogoutConfirm(false);
		navigate("/");
	};

	const userInfo = {
		name: "Ahmet Yilmaz",
		email: "ahmet.yilmaz@thepulse.com",
		role: "Moderator",
		joinDate: "January 15, 2024",
		lastLogin: "Today at 10:45 AM",
	};

	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			className="space-y-8"
		>
			<motion.div variants={itemVariants}>
				<h1 className="text-4xl font-bold">Profile</h1>
				<p className="mt-2 text-text-muted">
					Manage your account settings and preferences.
				</p>
			</motion.div>

			<motion.div variants={itemVariants}>
				<Card className="p-8">
					<div className="flex flex-col gap-6 md:flex-row md:items-center">
						<div className="flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-primary to-accent">
							<User size={40} className="text-white" />
						</div>
						<div className="flex-1">
							<h2 className="text-2xl font-bold">
								{userInfo.name}
							</h2>
							<p className="text-text-muted">{userInfo.role}</p>
						</div>
						<Button variant="secondary">Edit Profile</Button>
					</div>
				</Card>
			</motion.div>

			<motion.div
				variants={itemVariants}
				className="grid gap-6 md:grid-cols-2"
			>
				<Card className="p-6">
					<div className="flex items-start gap-4">
						<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
							<Mail size={20} className="text-primary" />
						</div>
						<div>
							<p className="text-sm text-text-muted">
								Email Address
							</p>
							<p className="font-medium">{userInfo.email}</p>
						</div>
					</div>
				</Card>

				<Card className="p-6">
					<div className="flex items-start gap-4">
						<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
							<Calendar size={20} className="text-primary" />
						</div>
						<div>
							<p className="text-sm text-text-muted">
								Member Since
							</p>
							<p className="font-medium">{userInfo.joinDate}</p>
						</div>
					</div>
				</Card>

				<Card className="p-6">
					<div className="flex items-start gap-4">
						<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
							<Shield size={20} className="text-primary" />
						</div>
						<div>
							<p className="text-sm text-text-muted">
								Account Status
							</p>
							<p className="font-medium text-emerald-400">
								Active & Verified
							</p>
						</div>
					</div>
				</Card>

				<Card className="p-6">
					<div className="flex items-start gap-4">
						<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
							<LogOut size={20} className="text-primary" />
						</div>
						<div>
							<p className="text-sm text-text-muted">
								Last Login
							</p>
							<p className="font-medium">{userInfo.lastLogin}</p>
						</div>
					</div>
				</Card>
			</motion.div>

			<motion.div variants={itemVariants}>
				<Card className="p-6">
					<h2 className="mb-6 text-lg font-semibold">Preferences</h2>
					<div className="space-y-4">
						<div className="flex items-center justify-between">
							<div>
								<p className="font-medium">
									Email Notifications
								</p>
								<p className="text-sm text-text-muted">
									Receive updates about your items
								</p>
							</div>
							<input
								type="checkbox"
								defaultChecked
								className="h-4 w-4 cursor-pointer"
							/>
						</div>
						<div className="border-t border-border pt-4">
							<div className="flex items-center justify-between">
								<div>
									<p className="font-medium">Dark Mode</p>
									<p className="text-sm text-text-muted">
										Enable dark theme by default
									</p>
								</div>
								<input
									type="checkbox"
									defaultChecked
									className="h-4 w-4 cursor-pointer"
								/>
							</div>
						</div>
					</div>
				</Card>
			</motion.div>

			<motion.div variants={itemVariants}>
				<Card className="border-error/50 p-6">
					<h2 className="mb-4 text-lg font-semibold text-error">
						Danger Zone
					</h2>
					<p className="mb-6 text-sm text-text-muted">
						Actions that cannot be undone
					</p>
					<Button
						variant="danger"
						onClick={() => setLogoutConfirm(true)}
						className="gap-2"
					>
						<LogOut size={18} />
						Logout
					</Button>
				</Card>
			</motion.div>

			<ConfirmDialog
				isOpen={logoutConfirm}
				title="Logout"
				description="Are you sure you want to logout? You'll need to sign in again to access your dashboard."
				confirmText="Logout"
				cancelText="Cancel"
				isDangerous={false}
				onConfirm={handleLogout}
				onCancel={() => setLogoutConfirm(false)}
			/>
		</motion.div>
	);
}
