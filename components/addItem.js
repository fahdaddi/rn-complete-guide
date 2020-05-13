import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Modal,
  TouchableOpacity,
} from "react-native";

const addItem = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const handleInput = (text) => {
    setEnteredGoal(text);
  };

  const handlePress = () => {
    // props.onAddGoal.bind(this, enteredGoal);
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal animationType="slide" visible={props.visible}>
      <TouchableOpacity activeOpacity={0} delayPressOut={200} style={styles.closeView} onPress={props.close}>
        <Text style={styles.close}>x</Text>
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.inputText}
          onChangeText={handleInput}
          value={enteredGoal}
        />
        <TouchableOpacity
          disabled={!enteredGoal.length}
          style={styles.button}
          onPress={handlePress}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        {/* <Button color="black" title="Add" onPress={handlePress} /> */}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginBottom: 20,
  },
  inputText: {
    width: "90%",
    borderBottomColor: "black",
    borderBottomWidth: 2,
    marginBottom: 10,
    padding: 5,
  },
  button: {
    width: "90%",
    backgroundColor: "black",
    borderRadius: 10,
    alignItems: "center",
    padding: 10,
  },
  buttonText: {
    color: "white",
  },
  closeView: {
    position: "absolute",
    top: 5,
    right: 20,
  },
  close: {
    color: "#6c1413",
    fontSize: 30
  },
});

export default addItem;
