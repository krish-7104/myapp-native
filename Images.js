import React from "react";
import { StyleSheet, View, Alert, TouchableOpacity, Text } from "react-native";
const Images = () => {
  const addText = () => {
    Alert.alert("Hello");
  };
  return (
    <View style={styles.screenContainer}>
      <TouchableOpacity onPress={addText} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Hello World</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    marginTop: 20,
    backgroundColor: "#009688",
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

export default Images;
