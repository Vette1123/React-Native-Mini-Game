import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { colors } from "../utils/colors";

const PrimaryButton = ({ children }) => {
  const onPressHandler = () => {
    console.log("Button pressed");
  };
  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={onPressHandler}
        android_ripple={{ color: colors.buttonRippleColor }}
        style={styles.innerContainer}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    margin: 8,
    overflow: "hidden",
  },
  innerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.buttonBGColor,
    elevation: 10,
  },
  buttonText: {
    color: colors.whiteText,
    textAlign: "center",
  },
});
