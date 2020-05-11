import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";

import GoalItem from "./components/goalItem";
import AddItem from "./components/addItem";

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoal = (enteredGoal) => {
    if (!!enteredGoal.length) {
      setGoals((currentGoals) => [
        ...currentGoals,
        { id: Math.random().toString(), value: enteredGoal },
      ]);
    }
  };

  const deleteGoal = (item) => {
    // let index = goals.indexOf(item);
    // arr = [];
    // for (let i = 0; i < goals.length; i++) {
    //   const goal = goals[i];
    //   if (goal.value != item) {
    //     arr.push(goal);
    //   }
    // }
    setGoals(currentGoals => {
      return currentGoals.filter(obj => obj.id != item)
    });
  };

  return (
    <View style={styles.screen}>
      <AddItem onAddGoal={addGoal} />
      <FlatList
        data={goals}
        keyExtractor={goals, (goal)=> goal.id}
        renderItem={(itemData) => (
          <GoalItem item={itemData.item} onDelete={deleteGoal} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 40,
    paddingHorizontal: 10,
  },
});
