import { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Animated,
  Image,
} from "react-native";
import { IconSymbol } from "./ui/IconSymbol";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import React from "react";
import { scale } from "@/constants/Scale";
import MaterialIcons from "@expo/vector-icons/FontAwesome6";
import { styles } from "./styles/DigitalDebitCardStyle";

export function DigitalDebitCard() {
  const [isFrozen, setIsFrozen] = useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current; // Animation for fade effect

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const handleFreezeToggle = () => {
    // Start fade-out animation
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      // Toggle the frozen state
      setIsFrozen((prev) => !prev);
      // Start fade-in animation
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Animated.View style={[styles.cardImage, { opacity: fadeAnim }]}>
          <ImageBackground
            source={
              !isFrozen
                ? require("@/assets/images/frozen-card-background.png")
                : require("@/assets/images/card-details-background.png")
            }
            style={styles.cardImage}
            imageStyle={{ borderRadius: 16 }}
          >
            {isFrozen && (
              <>
                <ThemedView style={styles.cardTopContent}>
                  <Image
                    source={require("@/assets/images/icon.png")}
                    style={styles.cardImg}
                    resizeMode="contain"
                  />
                  <Image
                    source={require("@/assets/images/mock-bank-logo.png")}
                    style={styles.cardImg}
                    resizeMode="contain"
                  />
                </ThemedView>

                <ThemedView style={styles.cardDetails}>
                  <View style={styles.cardLeftColumn}>
                    <ThemedText style={styles.cardNumber}>8124</ThemedText>
                    <ThemedText style={styles.cardNumber}>4212</ThemedText>
                    <ThemedText style={styles.cardNumber}>3456</ThemedText>
                    <ThemedText style={styles.cardNumber}>7890</ThemedText>
                  </View>

                  <ThemedView style={styles.cardRightColumn}>
                    <ThemedText style={styles.textExpiry}>expiry</ThemedText>
                    <ThemedText>01/29</ThemedText>
                    <ThemedText />
                    <ThemedText />
                    <ThemedText style={styles.textExpiry}>cvv</ThemedText>
                    <ThemedView style={styles.cvvContent}>
                      {isPasswordVisible ? (
                        <Image
                          source={require("@/assets/images/cvv-hide.png")}
                          style={styles.cvvHide}
                          resizeMode="contain"
                        />
                      ) : (
                        <ThemedText type="defaultSemiBold">134</ThemedText>
                      )}
                      <TouchableOpacity
                        onPress={togglePasswordVisibility}
                        activeOpacity={0.8}
                      >
                        <MaterialIcons
                          name={isPasswordVisible ? "eye-slash" : "eye"}
                          size={16}
                          color={"red"}
                        />
                      </TouchableOpacity>
                    </ThemedView>
                  </ThemedView>
                </ThemedView>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.copyDetailsContent}
                >
                  <MaterialIcons name="copy" size={16} color={"red"} />
                  <ThemedText style={styles.txtCopyDetails}>
                    copy details
                  </ThemedText>
                </TouchableOpacity>

                <Image
                  source={require("@/assets/images/img-card-pay.png")}
                  style={styles.cardTypeImg}
                  resizeMode="contain"
                />
              </>
            )}
          </ImageBackground>
        </Animated.View>
      </View>

      <View style={styles.rightColumn}>
        <TouchableOpacity onPress={handleFreezeToggle} activeOpacity={0.8}>
          <ImageBackground
            source={
              isFrozen
                ? require("@/assets/images/round-freeze-bg.png")
                : require("@/assets/images/round-unfreeze-bg.png")
            }
            resizeMode="stretch"
            style={styles.freezeButton}
          >
            <IconSymbol
              size={28}
              name="snowflake"
              color={isFrozen ? "white" : "red"}
            />
          </ImageBackground>
        </TouchableOpacity>

        <ThemedView>
          <ThemedText
            style={{
              fontSize: 14,
              fontWeight: "400",
              width: "50%",
              textAlign: "center",
              color: isFrozen ? "white" : "red",
            }}
          >
            {isFrozen ? "Unfreeze" : "Freeze"}
          </ThemedText>
        </ThemedView>
      </View>
    </View>
  );
}
