import React from "react";
import { Tabs } from "expo-router";
import {
  StyleSheet,
  Dimensions,
  Platform,
  Image,
  SafeAreaView,
} from "react-native";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

const { width } = Dimensions.get("window"); // Dynamically get screen width

// Custom Tab Bar Background with Curved White Border
const TabBarBackground = () => (
  <SafeAreaView style={styles.container}>
    <Image
      resizeMode="contain"
      source={require("@/assets/images/hr_line.png")}
      style={styles.curveBackground}
    />
  </SafeAreaView>
);

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: "300",
          fontVariant: ["common-ligatures"],
        },
        tabBarIconStyle: {
          marginBottom: 8, // Adjust icon position relative to the title
        },
        tabBarBackground: TabBarBackground, // Custom background component
        tabBarStyle: Platform.select({
          ios: styles.tabBar,
          default: styles.tabBar,
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="yolopay"
        options={{
          title: "yolo pay",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="qrcode" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "ginie",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="gearshape.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  curveBackground: {
    width: width,
    height: 150,
    bottom: 25,
    alignSelf: "center",
    zIndex: -1,
  },
  tabBar: {
    backgroundColor: "transparent", // Transparent to show the curve
    height: 110, // Tab bar height
    borderTopWidth: 0,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 60,
    paddingTop: 12, // Adjust space to avoid cutting into the curve
  },
});
