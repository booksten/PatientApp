import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Card } from "@/src/design-system/components/Card";
import { type TrendChartProps } from "@/src/features/patient-dashboard/components/TrendChart.types";
import { type BiomarkerId } from "@/src/features/patient-dashboard/models/patientDashboard.types";

const biomarkers: { id: BiomarkerId; label: string }[] = [
  { id: "hba1c", label: "HbA1c" },
  { id: "ldl", label: "LDL" },
  { id: "hdl", label: "HDL" },
];

export function TrendChart({
  selectedBiomarker,
  trendData,
  onSelectBiomarker,
}: TrendChartProps) {
  return (
    <Card>
      <Text style={styles.title}>Biomarker Trend</Text>

      <View style={styles.filterRow}>
        {biomarkers.map((biomarker) => {
          const isActive = biomarker.id === selectedBiomarker;

          return (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={`Show ${biomarker.label} trend`}
              key={biomarker.id}
              onPress={() => onSelectBiomarker(biomarker.id)}
              style={[styles.filterButton, isActive && styles.filterButtonActive]}
            >
              <Text style={[styles.filterText, isActive && styles.filterTextActive]}>
                {biomarker.label}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <View style={styles.chartContainer}>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={trendData} margin={{ top: 8, right: 12, left: 0, bottom: 8 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" />
            <XAxis dataKey="label" stroke="#475569" fontSize={12} />
            <YAxis stroke="#475569" fontSize={12} width={35} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#0f766e"
              strokeWidth={3}
              dot={{ r: 4, fill: "#0f766e" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0f172a",
  },
  filterRow: {
    flexDirection: "row",
    gap: 8,
  },
  filterButton: {
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  filterButtonActive: {
    backgroundColor: "#0f766e",
    borderColor: "#0f766e",
  },
  filterText: {
    fontSize: 12,
    color: "#0f172a",
    fontWeight: "600",
  },
  filterTextActive: {
    color: "#ffffff",
  },
  chartContainer: {
    width: "100%",
    height: 220,
  },
});
