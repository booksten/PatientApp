import { PatientDashboardScreen } from "@/src/features/patient-dashboard/screens/PatientDashboardScreen";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const storybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true";

  return (
    <View style={styles.container}>
      {storybookEnabled ? (
        <View style={styles.storybookLinkWrap}>
          <Link href="/storybook" style={styles.storybookLink}>
            <Text>Open Storybook</Text>
          </Link>
        </View>
      ) : null}
      <PatientDashboardScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  storybookLinkWrap: {
    paddingHorizontal: 16,
    paddingTop: 8,
    backgroundColor: "#f8fafc",
  },
  storybookLink: {
    color: "#0f766e",
    fontWeight: "600",
  },
});
