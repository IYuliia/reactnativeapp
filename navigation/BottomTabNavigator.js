import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import LogoutButton from "../components/logoutButton";
import BackButton from "../components/backButton";
import PostsScreen from "../screens/PostsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import PostsButton from "../components/PostsButton";
import ProfileButton from "../components/ProfileButton";
import { colors } from "../styles/global";
import MapScreen from "../screens/MapScreen";
import CreatePostNavigator from "./CreatePostNavigator";
import { View, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Posts"
      screenOptions={{
        headerRightContainerStyle: { paddingRight: 16 },
        headerLeftContainerStyle: { paddingLeft: 16 },
        tabBarStyle: {
            borderTopWidth: 1, 
            borderTopColor: colors.border_grey, 
            paddingTop: 9, 
          },
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: colors.border_grey,
          },
        // tabBarLabel: "",
      }}
    >
     
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={({ navigation }) => ({
          title: "Публікації",
          tabBarLabel: "",
          
          headerRight: () => (
            <LogoutButton
              onPress={() => {
                console.log("logout button");
              }}
            />
          ),
        //   headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
          tabBarIcon: ({ focused }) => (
            <PostsButton
              focused={focused}
              onPress={() => {
                console.log("Posts button pressed");
              }}
            />
          ),
          // tabBarBadge: "2",
          tabBarActiveTintColor: "red",
        })}
      />

      <Tab.Screen
        name="CreatePostStack"
        component={CreatePostNavigator}
        options={({ navigation }) => ({
          title: "Create Post",
          headerShown: false,
          tabBarStyle: { display: "none" },
          tabBarLabel: "",
          headerLeft: () => (
            <BackButton
              onPress={() => navigation.goBack()}
            />
          ),
          tabBarIcon: ({ focused }) => (
            <View style={styles.addButton}>
              <Ionicons
                size={32}
                name="add"
                color={colors.white}
              />
            </View>
          ),
        })}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <ProfileButton
              focused={focused}
              onPress={() => console.log("Profile button pressed")}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: "Мапа",
          tabBarLabel: "",
          tabBarStyle: { display: 'none' },
          headerLeft: () => <BackButton />,
          tabBarButton: () => null,
        }}
      />

    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  addButton: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.orange,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BottomTabNavigator;
