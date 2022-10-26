import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
const FlatListDemo = () => {
  const names = [
    { key: "1", name: "Krish" },
    { key: "2", name: "Jeel" },
    { key: "3", name: "Neel" },
    { key: "4", name: "Feel" },
  ];
  return (
    <FlatList
      data={names}
      showsVerticalScrollIndicator={false}
      renderItem={(element) => {
        return <Text style={styles.textStyle}>{element.item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    padding: 30,
    backgroundColor: "blue",
    margin: 30,
    width: 180,
    textAlign: "center",
    color: "white",
  },
});

export default FlatListDemo;
