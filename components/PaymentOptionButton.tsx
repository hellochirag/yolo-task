import { scale } from "@/constants/Scale";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export function PaymentOptionButton() {
  const handleButtonPress = (buttonName: string) => {
    console.log(`${buttonName} pressed`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress("Button 1")}
      >
        <ImageBackground
          source={require("@/assets/images/bg-btn-pay.png")}
          resizeMode="contain"
          style={styles.buttonBackground}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress("Button 2")}
      >
        <ImageBackground
          source={require("@/assets/images/bg-btn-card.png")}
          resizeMode="contain"
          style={styles.buttonBackground}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: scale(26),
  },
  button: {
    width: scale(100),
    height: scale(35),
    borderRadius: 10,
    overflow: "hidden",
  },
  buttonBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
