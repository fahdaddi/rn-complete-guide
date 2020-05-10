import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goals, setGoals] = useState([]);

  const handleInput = (text) => {
    setEnteredGoal(text);
  };

  const addGoal = () => {
    if (!!enteredGoal.length) {
      setGoals((currentGoals) => [...currentGoals, enteredGoal]);
      setEnteredGoal("");
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.inputText}
          onChangeText={handleInput}
          value={enteredGoal}
        />
        <Button title="Add" onPress={addGoal} />
      </View>
      <View>
        {goals.map((goal) => (
          <Text key={goal} >{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "baseline",
  },
  inputText: {
    flex: 1,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    marginRight: 10,
  },
});
