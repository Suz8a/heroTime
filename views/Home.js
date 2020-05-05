import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MyButton from "../components/MyButton";

function homeView() {
  return (
    <View style={styles.container}>
      <View style={styles.informationContainer}>
        <Text style={styles.bigTitle}>¡Hola!</Text>
        <Text style={styles.description}>
          Antes de empezar dinos, cuales son tus actividades habituales diarias.
        </Text>
      </View>
      <View style={styles.button}>
        <MyButton title="Empezar" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F1F6",
    alignItems: "center",
    justifyContent: "center",
  },
  informationContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: "75%",
  },
  bigTitle: {
    color: "#5B5B5B",
    fontSize: 49,
    marginBottom: 20,
  },
  description: {
    color: "#5B5B5B",
    fontSize: 22,
    textAlign: "center",
  },
  button: {
    width: "80%",
    height: 55,
  },
});

export default homeView;
