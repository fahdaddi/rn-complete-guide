import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

const addItem = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const handleInput = (text) => {
    setEnteredGoal(text);
  };

  const handlePress = () => {
    // props.onAddGoal.bind(this, enteredGoal);
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.inputText}
        onChangeText={handleInput}
        value={enteredGoal}
      />
      <Button title="Add" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "baseline",
    marginBottom: 20,
  },
  inputText: {
    flex: 1,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    marginRight: 10,
  },
});

export default addItem;
