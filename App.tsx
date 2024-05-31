import "react-native-gesture-handler";
import RegistrationScreen from "./src/screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import Home from "./src/screens/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Alert, Button } from "react-native";
import { RootStackParamList } from "./src/navigationTypes";
import PostsScreen from "./src/screens/PostsScreen/PostsScreen";

const MainStack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={true ? "Home" : "Login"}>
        {/* Аналог Routes */}
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        {/* Odpowiednik Route */}
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
          
        />
         
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
