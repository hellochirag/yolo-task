import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { scale } from "@/constants/Scale";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          resizeMode="contain"
          source={require("@/assets/images/splash-icon.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Clone and Run the App</ThemedText>
        <ThemedText>
          • Clone the GitHub repository.{"\n"}• Install dependencies using{" "}
          <ThemedText type="defaultSemiBold">yarn</ThemedText> and start the app
          with <ThemedText type="defaultSemiBold">yarn start</ThemedText>.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Review and Explore</ThemedText>
        <ThemedText>
          • Dive into the app and explore its features.{"\n"}• Test
          functionality, review the layout, and evaluate the design.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Feedback</ThemedText>
        <ThemedText>
          • Share your thoughts and feedback on{" "}
          <ThemedText type="defaultSemiBold">GitHub</ThemedText> or{" "}
          <ThemedText type="defaultSemiBold">LinkedIn</ThemedText>.{"\n"}•
          Connect via email to discuss improvements or questions.
          <ThemedText type="link">(chiragjadav134@gmail.com)</ThemedText>
          {"\n\n"}
          <ThemedText type="defaultSemiBold">
            Let’s build something amazing together! 🚀
          </ThemedText>
          .
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: scale(170),
    width: scale(250),
    bottom: 0,
    left: scale(20),
    position: "absolute",
  },
});
