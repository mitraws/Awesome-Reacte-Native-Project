import React, { useRef, useState } from "react";
import {
  FlatList,
  TextInput,
  TouchableOpacity,
  Button,
  Alert,
  Text,
  View,
  ActivityIndicator,
  Image,
} from "react-native";

function MyHeader() {
  return (
    <View style={{ marginHorizontal: 40, marginVertical: 60 }}>
      <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 30 }}>
        Hello React Native
      </Text>
      <ActivityIndicator
        size="large"
        color="#c1262c"
        style={{ marginBottom: 30 }}
      />
    </View>
  );
}

export default function App() {
  const [inputText, setInputText] = useState("");
  const randomNum = useRef(Math.random()).current;

  function MyFooter() {
    return (
      <View>
        <Text
          style={{
            borderWidth: 2,
            borderColor: "black",
            padding: 20,
            marginBottom: 30,
          }}
        >
          Hello again!
        </Text>
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
      </View>
    );
  }

  return (
    <FlatList
      ListHeaderComponent={MyHeader}
      data={[0, 1, 2, 3, 4]}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => Alert.alert(`You pressed image #${item + 1}`)}
          >
            <Image
              source={{
                uri: `https://picsum.photos/500/300?random=${randomNum + item}`,
              }}
              style={{ width: "100%", height: 160, marginBottom: 30 }}
            />
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => String(item)}
      ListFooterComponent={MyFooter}
    />
  );
}
