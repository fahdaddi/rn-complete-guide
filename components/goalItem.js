import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// onPress={() => deleteGoal(props.item)}

const goalItem = (props) => {
  return (
    <View style={styles.listItem} on>
      <Text style={styles.text}>{props.item.value}</Text>
      <TouchableOpacity onPress={props.onDelete.bind(this, props.item.id)}>
        <Text
          style={styles.delete}
        >
          X
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#2a2a2a",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#1a1a1a",
    flexDirection: "row",
  },
  text: {
    color: "white",
    flex: 1,
  },
  delete: {
    color: "red",
    paddingHorizontal: 10,
  },
});

export default goalItem;
