import { type ComponentType } from "react";
import { Platform } from "react-native";

import { type TrendChartProps } from "@/src/features/patient-dashboard/components/TrendChart.types";

const TrendChartImpl: ComponentType<TrendChartProps> =
  Platform.OS === "web"
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    ? require("@/src/features/patient-dashboard/components/TrendChart.web").TrendChart
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    : require("@/src/features/patient-dashboard/components/TrendChart.native").TrendChart;

export function TrendChart(props: TrendChartProps) {
  return <TrendChartImpl {...props} />;
}
