import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native";

import { DisclaimerBanner } from "@/src/design-system/components/DisclaimerBanner";
import { LabResultCard } from "@/src/features/patient-dashboard/components/LabResultCard";
import { PatientSummaryCard } from "@/src/features/patient-dashboard/components/PatientSummaryCard";
import { TrendChart } from "@/src/features/patient-dashboard/components/TrendChart";
import { usePatientDashboardViewModel } from "@/src/features/patient-dashboard/viewmodels/usePatientDashboardViewModel";

export function PatientDashboardScreen() {
  const viewModel = usePatientDashboardViewModel();

  if (viewModel.isLoading) {
    return (
      <View style={styles.centeredState}>
        <ActivityIndicator size="large" color="#0f766e" />
        <Text style={styles.stateText}>Loading patient dashboard...</Text>
      </View>
    );
  }

  if (viewModel.errorMessage || !viewModel.patient) {
    return (
      <View style={styles.centeredState}>
        <Text style={styles.errorText}>{viewModel.errorMessage ?? "Dashboard unavailable."}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Patient Dashboard</Text>

      <DisclaimerBanner text={viewModel.disclaimerText} />

      <PatientSummaryCard patient={viewModel.patient} />

      <TrendChart
        selectedBiomarker={viewModel.selectedBiomarker}
        trendData={viewModel.trendData}
        onSelectBiomarker={viewModel.setSelectedBiomarker}
      />

      <View style={styles.resultsSection}>
        <Text style={styles.sectionTitle}>Latest Lab Results</Text>
        {viewModel.labResults.map((result) => (
          <LabResultCard key={result.id} result={result} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  content: {
    padding: 16,
    paddingBottom: 40,
    gap: 12,
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0f172a",
  },
  resultsSection: {
    gap: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0f172a",
  },
  centeredState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#f8fafc",
    padding: 16,
  },
  stateText: {
    color: "#334155",
    fontSize: 14,
  },
  errorText: {
    color: "#b91c1c",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
  },
});
