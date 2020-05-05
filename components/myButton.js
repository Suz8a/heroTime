import React from "react";
import { StyleSheet, View, Text } from "react-native";

function TheButton(props) {
  return (
    <View style={styles.button}>
      <Text>hola</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 50,
    backgroundColor: "red",
    color: "black",
  },
});

export default TheButton;
