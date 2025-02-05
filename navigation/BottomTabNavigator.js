import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import LogoutButton from "../components/logoutButton";
import BackButton from "../components/backButton";
import ProfileScreen from "../screens/ProfileScreen";
import PostsButton from "../components/PostsButton";
import ProfileButton from "../components/ProfileButton";
import { colors } from "../styles/global";
import CreatePostNavigator from "./CreatePostNavigator";
import HandlePostNavigator from "./HandlePostNavigator";
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
  name="HandlePostsStack"
  component={HandlePostNavigator}
  options={({ navigation, route }) => {
    const routeName = route.state?.routes?.[route.state.index]?.name ?? "Posts";
    
    return {
      title: routeName === "Posts" ? "Публікації" : "",
      tabBarLabel: "",
      tabBarStyle: routeName === "Posts" ? {} : { display: "none" }, // Hide tab bar on Map & Comments
      headerRight: () => (
        <LogoutButton
          onPress={() => {
            console.log("logout button");
          }}
        />
      ),
      tabBarIcon: ({ focused }) => (
        <PostsButton
          focused={focused}
          onPress={() => {
            console.log("Posts button pressed");
          }}
        />
      ),
      tabBarActiveTintColor: "red",
    };
  }}
/>


      <Tab.Screen
        name="CreatePostStack"
        component={CreatePostNavigator}
        options={({ navigation }) => ({
          title: "Створити публікацію",
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

      {/* <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: "Мапа",
          tabBarLabel: "",
          tabBarStyle: { display: 'none' },
          headerLeft: () => <BackButton />,
          tabBarButton: () => null,
        }}
      /> */}

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
