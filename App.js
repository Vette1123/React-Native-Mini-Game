import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import StartGame from "./src/screens/StartGame";
import { colors } from "./src/utils/colors";

export default function App() {
  return (
    <LinearGradient
      colors={[colors.startBGColor, colors.appBGColor]}
      style={styles.container}
    >
      <StartGame />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
