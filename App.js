import React from "react";
import { StyleSheet, View } from "react-native";
import Images from "./Images";
const App = () => {
  return (
    <View style={styles.container}>
      <Images />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "red",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});

export default App;
