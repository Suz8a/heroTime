import React from "react";
import { StyleSheet, View, Text } from "react-native";

function MyButton({ title }) {
  return (
    <View style={styles.button}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F0F1F6",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,

    elevation: 10,
  },
  title: {
    fontSize: 22,
    color: "#5B5B5B",
  },
});

export default MyButton;
