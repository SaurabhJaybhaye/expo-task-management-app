import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/slice/counterSlice";

const CounterScreen = () => {
  const count = useSelector((state) => state.counter.value); //reading the state
  const dispatch = useDispatch();
  return (
    <View>
      <Text>CounterScreen</Text>
      <Pressable
        onPress={() => {
          dispatch(increment());
        }}
      >
        <Text>Increment</Text>
      </Pressable>
      <Text>{count}</Text>
      <Pressable
        onPress={() => {
          dispatch(decrement());
        }}
      >
        <Text>Decrement</Text>
      </Pressable>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({});
