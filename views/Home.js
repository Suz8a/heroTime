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
      <MyButton title="ayuda" width="50%" height="100%" />
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
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  bigTitle: {
    color: "#5B5B5B",
    fontSize: 49,
  },
  description: {
    color: "#5B5B5B",
    fontSize: 22,
  },
});

export default homeView;
