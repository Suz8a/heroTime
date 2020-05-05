import "react-native-gesture-handler";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import TheButton from "./components/myButton";

export default function App() {
  return (
    <View style={styles.container}>
      <TheButton title="hola" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
  },
});
