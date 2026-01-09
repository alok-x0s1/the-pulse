import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import type { ChartData } from "../../types";

interface LineChartComponentProps {
	data: ChartData[];
}

export default function LineChartComponent({ data }: LineChartComponentProps) {
	return (
		<ResponsiveContainer width="100%" height="100%">
			<LineChart data={data}>
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
				<Line
					type="monotone"
					dataKey="value"
					stroke="rgb(59, 130, 246)"
					dot={{ fill: "rgb(59, 130, 246)", r: 4 }}
					activeDot={{ r: 6 }}
					strokeWidth={2}
				/>
			</LineChart>
		</ResponsiveContainer>
	);
}
