import React from "react";
import { StyleSheet, View, Text } from "react-native";

function MyButton({ title }) {
  return (
    <View style={styles.button}>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 50,
    backgroundColor: "yellow",
    color: "black",
    margin: "auto",
  },
});

export default MyButton;
