import { Text, StyleSheet, View } from "react-native";

import { Card } from "@/src/design-system/components/Card";
import { type PatientSummary } from "@/src/features/patient-dashboard/models/patientDashboard.types";

interface PatientSummaryCardProps {
  patient: PatientSummary;
}

export function PatientSummaryCard({ patient }: PatientSummaryCardProps) {
  return (
    <Card>
      <Text style={styles.title}>Patient Summary</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{patient.firstName} {patient.lastName}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Age</Text>
        <Text style={styles.value}>{patient.age}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Updated</Text>
        <Text style={styles.value}>{new Date(patient.lastUpdatedIso).toLocaleString()}</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4,
    color: "#0f172a",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  label: {
    color: "#64748b",
    fontSize: 13,
  },
  value: {
    color: "#0f172a",
    fontSize: 13,
    fontWeight: "600",
  },
});
