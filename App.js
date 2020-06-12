import React from "react";
import GameScreen from "./src/screens/GameScreen";
import { Button } from "react-native";

export default function App() {
  const share = async (color) => {
    try {
      const result = await Share.share({
        message: `Check out this wonderful color: ${color}`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("shared with activity type of", result.activityType);
        } else {
          console.log("shared");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("dismissed");
      }
    } catch (error) {
      Alert.alert(error.message);
      console.log("failed sharing:", error);
    }
  };
  return (
    <View>
      <GameScreen />;
      <Button
        title="Share this color!"
        onPress={() => {
          share(color);
        }}
      />
    </View>
  );
}
