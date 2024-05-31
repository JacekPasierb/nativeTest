import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../navigationTypes";
import { StackNavigationProp } from "@react-navigation/stack";

function PostsScreen() {
  const route = useRoute();
   const getCurrentRoute = () => {
    return route.name;
  };

  console.log('Current route:', getCurrentRoute());
  return (
    <SafeAreaView
      style={{
        justifyContent: "flex-start",
        alignItems: "center",
        overflow: "visible",
      }}
    >
      <ScrollView>
        <Text style={{ color: "red" }}>Post hhh</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default PostsScreen;
