import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goals, setGoals] = useState([]);

  const handleInput = (text) => {
    setEnteredGoal(text);
  };

  const addGoal = () => {
    if (!!enteredGoal.length) {
      setGoals((currentGoals) => [...currentGoals, { key: Math.random().toString(), value: enteredGoal}]);
      setEnteredGoal("");
    }
  };

  const deleteGoal = (item) => {
    let index = goals.indexOf(item);
    arr = [];
    for (let i = 0; i < goals.length; i++) {
      const goal = goals[i];
      if (goal != item) {
        arr.push(goal);
      }
    }
    setGoals(arr);
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
      <FlatList
        data={goals}
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Text style={styles.text}>{itemData.item.value}</Text>
            <Text
              onPress={() => deleteGoal(itemData.item.value)}
              style={styles.delete}
            >
              X
            </Text>
          </View>
        )}
      />
      {/* <ScrollView >
        {goals.map((goal) => (
          <View style={styles.listItem} key={goal}>
            <Text style={styles.text} >{goal}</Text>
            <Text onPress={() => deleteGoal(goal)} style={styles.delete}>X</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 40,
    paddingHorizontal: 10,
  },
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
