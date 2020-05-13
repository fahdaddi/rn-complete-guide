import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";

import GoalItem from "./components/goalItem";
import AddItem from "./components/addItem";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addGoal = (enteredGoal) => {
    if (!!enteredGoal.length) {
      setGoals((currentGoals) => [
        ...currentGoals,
        { id: Math.random().toString(), value: enteredGoal },
      ]);
      toggleModal();
    }
  };

  const deleteGoal = (item) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((obj) => obj.id != item);
    });
  };

  const toggleModal = () => {
    setShowModal((currentState) => !currentState);
  };

  return (
    <View style={styles.screen}>
      <AddItem onAddGoal={addGoal} visible={showModal} close={toggleModal}/>
      <TouchableOpacity style={styles.button} onPress={toggleModal}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
      {/* <Button style={styles.addButton} title="Add new goal!" onPress={toggleModal} /> */}
      <FlatList
        data={goals}
        keyExtractor={(goals, (goal) => goal.id)}
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
  button: {
    width: "90%",
    backgroundColor: "#028cfe",
    borderRadius: 10,
    alignItems: "center",
    padding: 10,
    alignSelf: 'center',
    marginBottom: 20
  },
  buttonText: {
    color: "white",
  },
});
