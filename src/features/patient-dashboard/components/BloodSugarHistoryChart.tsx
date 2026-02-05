import { StyleSheet, Text, View } from "react-native";

import { Card } from "@/src/design-system/components/Card";

interface BloodSugarHistoryChartProps {
  data: { label: string; value: number }[];
}

export function BloodSugarHistoryChart({ data }: BloodSugarHistoryChartProps) {
  const maxValue = Math.max(...data.map((item) => item.value), 1);

  return (
    <Card>
      <Text style={styles.title}>Historical Blood Sugar Levels</Text>
      <Text style={styles.subtitle}>Estimated average glucose (mg/dL) from HbA1c</Text>

      <View style={styles.chartRow}>
        {data.map((item) => {
          const height = Math.max(12, (item.value / maxValue) * 100);

          return (
            <View key={`${item.label}-${item.value}`} style={styles.barGroup}>
              <View style={[styles.bar, { height }]} />
              <Text style={styles.barValue}>{item.value}</Text>
              <Text style={styles.barLabel}>{item.label}</Text>
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
  subtitle: {
    fontSize: 12,
    color: "#64748b",
  },
  chartRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    minHeight: 130,
    gap: 10,
  },
  barGroup: {
    flex: 1,
    alignItems: "center",
    gap: 2,
  },
  bar: {
    width: "100%",
    maxWidth: 26,
    borderRadius: 6,
    backgroundColor: "#ef4444",
  },
  barValue: {
    fontSize: 12,
    fontWeight: "700",
    color: "#7f1d1d",
  },
  barLabel: {
    fontSize: 11,
    color: "#475569",
  },
});
