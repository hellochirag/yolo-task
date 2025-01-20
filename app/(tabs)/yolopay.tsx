import { SafeAreaView, View, StyleSheet , ScrollView} from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import { PaymentOptionButton } from "@/components/PaymentOptionButton";
import { DigitalDebitCard } from "@/components/DigitalDebitCard";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">select payment mode</ThemedText>
      </ThemedView>
      <ThemedView style={styles.subTitleContainer}>
        <ThemedText style={styles.subTitleText}>
          {`choose your preferred payment method to\nmake payment.`}
        </ThemedText>
      </ThemedView>
      <ThemedText />
      <ThemedView style={styles.titleContainer}>
       <PaymentOptionButton />
      </ThemedView>
      <ThemedView style={styles.subTitleContainer}>
        <ThemedText style={[styles.subTitleText, {textTransform: 'uppercase'}]}>
          your digital debit card
        </ThemedText>
      </ThemedView>
      <DigitalDebitCard />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    paddingTop: 120,
    paddingHorizontal: 16,
  },
  scrollViewContent: {
    alignItems: "center",
    paddingBottom: 20,
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  subTitleText: {
    lineHeight: 21,
    width: "100%",
    fontWeight: "400",
    fontFamily: "Poppins",
  },
  subTitleContainer: {  flexDirection: "row", marginTop: 16, opacity: 0.5 },
});
