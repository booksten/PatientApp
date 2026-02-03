import { StyleSheet, Text, View } from "react-native";

import { Card } from "@/src/design-system/components/Card";
import { type LabResult } from "@/src/features/patient-dashboard/models/patientDashboard.types";

interface LabResultCardProps {
  result: LabResult;
}

const statusColors: Record<LabResult["status"], string> = {
  normal: "#166534",
  warning: "#92400e",
  critical: "#991b1b",
};

export function LabResultCard({ result }: LabResultCardProps) {
  return (
    <Card>
      <View style={styles.headerRow}>
        <Text style={styles.title}>{result.biomarkerLabel}</Text>
        <Text style={[styles.status, { color: statusColors[result.status] }]}>
          {result.status.toUpperCase()}
        </Text>
      </View>
      <Text style={styles.value}>
        {result.value} {result.unit}
      </Text>
      <Text style={styles.meta}>Reference: {result.referenceRange}</Text>
      <Text style={styles.meta}>
        Collected: {new Date(result.measuredAtIso).toLocaleDateString()}
      </Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0f172a",
    flex: 1,
  },
  status: {
    fontSize: 12,
    fontWeight: "700",
  },
  value: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0f172a",
  },
  meta: {
    fontSize: 12,
    color: "#64748b",
  },
});
