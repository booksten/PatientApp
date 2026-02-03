const { getDefaultConfig } = require("expo/metro-config");
const config = getDefaultConfig(__dirname);
const storybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true";

if (!storybookEnabled) {
  module.exports = config;
} else {
  try {
    const { withStorybook } = require("@storybook/react-native/metro/withStorybook");
    module.exports = withStorybook(config, {
      enabled: true,
      configPath: ".rnstorybook",
    });
  } catch (error) {
    console.warn(
      "[metro] Storybook metro enhancer failed to load. Falling back to default config.",
      error
    );
    module.exports = config;
  }
}
