import { router } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

const carlogo = require("@/assets/images/carlogo.png");

export default function Index() {
  //หน่วงหน้าจอตอนโหลด
  useEffect(() => {
    setTimeout(() => {
      router.replace("/input");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={carlogo} style={styles.carlogo} />
      <Text style={styles.appnameen}>Smart Auto Loan</Text>
      <Text style={styles.appnameth}>วางแผนออกรถฉบับมือโปร</Text>
      <ActivityIndicator
        size="large"
        color="#ffffff"
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appnameen: {
    fontFamily: "Kanit_700Bold",
    fontSize: 30,
    color: "#ffffff",
  },
  appnameth: {
    fontFamily: "Kanit_400Regular",
    fontSize: 18,
    color: "#dedede98",
  },
  carlogo: {
    width: 120,
    height: 120,
  },
  container: {
    flex: 1,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E293B",
  },
});
