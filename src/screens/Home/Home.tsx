import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import React from "react";
import { AntDesign, SimpleLineIcons, Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PostsScreen from "../PostsScreen/PostsScreen";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigationTypes";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

const BottomTabs = createBottomTabNavigator();

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <BottomTabs.Navigator
      initialRouteName="Posts"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: { height: 80 },
      }}
    >
      {/* GRID */}
      <BottomTabs.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return <SimpleLineIcons name="grid" size={20} color={color} />;
          },
          headerTitleAlign: "center",
          headerRightContainerStyle: { paddingRight: 20 },
          headerShown: true,
          headerRight: () => (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Login")}
            >
              <Feather name="log-out" size={24} color="gray" />
            </TouchableOpacity>
          ),
        }}
        name="PostsScreen"
        component={PostsScreen}
      />

      {/* ADD BUTTON */}
      <BottomTabs.Screen
        options={{
          headerLeft: () => (
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          ),
          tabBarIcon: () => {
            return (
              <TouchableOpacity
                style={styles.addButton}
                activeOpacity={0.5}
                onPress={() => navigation.navigate("CreatePostsScreen")}
              >
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            );
          },
          headerShown: true,
          tabBarStyle: { display: "none" },
          headerTitleAlign: "center",
        }}
        name="CreatePostsScreen"
        component={CreatePostsScreen}
      />

      {/* PROFILE BUTTON */}
      <BottomTabs.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return <AntDesign name="user" size={20} color={color} />;
          },
          headerShown: false,
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </BottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 10,
  },
  registerButton: {
    backgroundColor: "#FF6C00",
    height: 50,
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 44,
  },
  registerButtonText: {
    color: "#fff",
    fontWeight: "400",
  },
  loginLink: {
    marginTop: 16,
    marginBottom: 66,
  },
  loginLinkText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderTopColor: "#999999",
    borderTopWidth: 1,
  },
  addButton: {
    backgroundColor: "#FF6C00",
    height: 40,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  addButtonText: {
    color: "#ffffff",
    fontSize: 18,
  },
  gridButton: {
    marginRight: 40,
  },
  userButton: {
    marginLeft: 40,
  },
});

export default Home;
