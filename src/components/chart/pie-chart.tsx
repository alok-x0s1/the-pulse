import {
	PieChart,
	Pie,
	Cell,
	Legend,
	ResponsiveContainer,
	Tooltip,
} from "recharts";
import type { ChartData } from "../../types";

interface PieChartComponentProps {
	data: ChartData[];
}

const COLORS = ["rgb(59, 130, 246)", "rgb(16, 185, 129)", "rgb(107, 114, 128)"];

export default function PieChartComponent({ data }: PieChartComponentProps) {
	return (
		<ResponsiveContainer width="100%" height="100%">
			<PieChart>
				<Pie
					data={data}
					cx="50%"
					cy="50%"
					labelLine={false}
					label={({ name, percent }) =>
						`${name} ${
							percent !== undefined
								? (percent * 100).toFixed(0) + "%"
								: ""
						}`
					}
					outerRadius={80}
					fill="#8884d8"
					dataKey="value"
				>
					{data.map((_, index) => (
						<Cell
							key={`cell-${index}`}
							fill={COLORS[index % COLORS.length]}
						/>
					))}
				</Pie>
				<Tooltip
					contentStyle={{
						backgroundColor: "rgb(15, 23, 42)",
						border: "1px solid rgb(71, 85, 105)",
						borderRadius: "4px",
					}}
					labelStyle={{ color: "rgb(226, 232, 240)" }}
				/>
				<Legend />
			</PieChart>
		</ResponsiveContainer>
	);
}
