import React, { useRef, useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
  Alert,
  Text,
  View,
  ActivityIndicator,
  Image,
} from "react-native";

export default function App() {
  const [inputText, setInputText] = useState("");
  const randomNum = useRef(Math.random()).current;

  return (
    <ScrollView>
      <View style={{ marginHorizontal: 40, marginVertical: 60 }}>
        <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 30 }}>
          Hello React Native
        </Text>
        <ActivityIndicator
          size="large"
          color="#c1262c"
          style={{ marginBottom: 30 }}
        />
        <TouchableOpacity onPress={() => Alert.alert("Learning RN is so easy")}>
          <Image
            source={{
              uri: `https://picsum.photos/500/300?random=${randomNum}`,
            }}
            style={{ width: "100%", height: 160, marginBottom: 30 }}
          />
        </TouchableOpacity>
        <View
          style={{
            borderWidth: 2,
            borderColor: "black",
            padding: 20,
            marginBottom: 30,
          }}
        >
          <Text>Hello again!</Text>
        </View>
        <Button
          onPress={() => Alert.alert(`You typed: ${inputText}`)}
          title="Learn More"
          color="#c1262c"
        />
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          value={inputText}
          onChangeText={(text) => setInputText(text)}
          placeholder="type here"
        ></TextInput>
        {[0, 1, 2, 3, 4].map((i) => {
          return (
            <TouchableOpacity
              key={i}
              onPress={() => Alert.alert("Learning RN is so easy")}
            >
              <Image
                source={{
                  uri: `https://picsum.photos/500/300?random=${randomNum + i}`,
                }}
                style={{ width: "100%", height: 160, marginBottom: 30 }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}
