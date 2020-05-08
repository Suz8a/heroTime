import React from "react";
import { View, Text, StyleSheet } from "react-native";

function SelectDay() {
  return (
    <View style={styles.container}>
      <Text>Selecting days</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F1F6",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SelectDay;
