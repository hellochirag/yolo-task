import { scale } from "@/constants/Scale";
import { StyleSheet } from "react-native";

export const  styles = StyleSheet.create({
    container: {
      marginVertical: scale(16),
      height: scale(300),
      flexDirection: "row",
    },
    leftColumn: {
      flex: 6,
      justifyContent: "center",
      alignItems: "center",
    },
    rightColumn: {
      flex: 4,
      justifyContent: "center",
      paddingLeft: scale(26),
    },
    cardImage: {
      width: "100%",
      height: scale(290),
      borderRadius: scale(18),
      shadowColor: "#fff",
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 0.1,
      shadowRadius: 0.8,
    },
    freezeButton: {
      height: scale(60),
      width: scale(60),
      borderRadius: 100,
      marginBottom: scale(12),
      alignItems: "center",
      justifyContent: "center",
    },
    cardTopContent: {
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "transparent",
      paddingVertical: scale(12),
    },
    cardImg: {
      width: scale(100),
      height: scale(20),
    },
    cardTypeImg: {
      position: "absolute",
      bottom: scale(16),
      right: scale(16),
      width: scale(70),
      height: scale(35),
    },
    txtCopyDetails: {
      fontSize: 16,
      color: "red",
      fontWeight: "400",
      alignItems: "center",
    },
    copyDetailsContent: {
      flexDirection: "row",
      alignItems: "center",
      padding: scale(16),
      gap: scale(8),
      position: "absolute",
      bottom: scale(55),
    },
    cardDetails: {
      paddingVertical: scale(8),
      paddingHorizontal: scale(8),
      backgroundColor: "transparent",
      flexDirection: "row",
    },
    cardLeftColumn: {
      flex: 6, 
      backgroundColor: "transparent",
      paddingVertical: scale(8),
      paddingLeft: scale(16),
    },
    cardRightColumn: {
      flex: 4,
      justifyContent: "flex-start",
      padding: scale(8),
      backgroundColor: "transparent",
    },
    textExpiry: {
      color: "white",
      fontSize: 14,
      fontWeight: "400",
      opacity: 0.5,
      lineHeight: 18,
    },
    cvvContent: {
      flexDirection: "row",
      gap: scale(8),
      marginTop: scale(8),
      backgroundColor: "transparent",
    },
    cvvHide: {
      width: scale(36),
      height: scale(16),
    },
    cardNumber: {
        color: "white",
        lineHeight: 32,
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Oxanium_400Regular',
    }
  });