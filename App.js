import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CounterScreen from "./src/screens/CounterScreen";

import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import Loader from "./src/components/loader/Loader";

export default () => {
  return (
    <Provider store={store}>
      <Loader />
      <App />
    </Provider>
  );
};

function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CounterScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
