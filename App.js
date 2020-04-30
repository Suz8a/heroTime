import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      {/* Rest of your app code */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0F1F6",
  },
});
