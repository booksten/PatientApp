import { StyleSheet, Text, View } from "react-native";

interface DisclaimerBannerProps {
  text: string;
}

export function DisclaimerBanner({ text }: DisclaimerBannerProps) {
  return (
    <View accessibilityRole="summary" style={styles.container}>
      <Text style={styles.title}>Disclaimer</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fffbeb",
    borderColor: "#f59e0b",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
  },
  title: {
    fontSize: 13,
    fontWeight: "700",
    color: "#92400e",
    marginBottom: 2,
  },
  text: {
    color: "#78350f",
    fontSize: 12,
    lineHeight: 18,
  },
});
