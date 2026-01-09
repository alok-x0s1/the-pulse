import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import type { ChartData } from "../../types";

interface BarChartComponentProps {
	data: ChartData[];
}

export default function BarChartComponent({ data }: BarChartComponentProps) {
	return (
		<ResponsiveContainer width="100%" height="100%">
			<BarChart data={data}>
				<CartesianGrid strokeDasharray="3 3" stroke="rgb(51, 65, 85)" />
				<XAxis dataKey="name" stroke="rgb(148, 163, 184)" />
				<YAxis stroke="rgb(148, 163, 184)" />
				<Tooltip
					contentStyle={{
						backgroundColor: "rgb(15, 23, 42)",
						border: "1px solid rgb(71, 85, 105)",
						borderRadius: "4px",
					}}
					labelStyle={{ color: "rgb(226, 232, 240)" }}
				/>
				<Legend />
				<Bar
					dataKey="value"
					fill="rgb(59, 130, 246)"
					radius={[4, 4, 0, 0]}
				/>
			</BarChart>
		</ResponsiveContainer>
	);
}
