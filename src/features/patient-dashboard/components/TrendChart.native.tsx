import { Pressable, StyleSheet, Text, View } from "react-native";

import { Card } from "@/src/design-system/components/Card";
import { type BiomarkerId } from "@/src/features/patient-dashboard/models/patientDashboard.types";
import { type TrendChartProps } from "@/src/features/patient-dashboard/components/TrendChart.types";

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
  const max = Math.max(...trendData.map((point) => point.value), 1);

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

      <View style={styles.chartRow}>
        {trendData.map((point) => {
          const height = Math.max(12, (point.value / max) * 100);

          return (
            <View key={`${point.label}-${point.value}`} style={styles.barGroup}>
              <View style={[styles.bar, { height }]} />
              <Text style={styles.barValue}>{point.value}</Text>
              <Text style={styles.barLabel}>{point.label}</Text>
            </View>
          );
        })}
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
  chartRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    minHeight: 130,
    gap: 12,
  },
  barGroup: {
    flex: 1,
    alignItems: "center",
    gap: 2,
  },
  bar: {
    width: "100%",
    maxWidth: 28,
    borderRadius: 6,
    backgroundColor: "#14b8a6",
  },
  barValue: {
    fontSize: 12,
    fontWeight: "700",
    color: "#134e4a",
  },
  barLabel: {
    fontSize: 11,
    color: "#475569",
  },
});
