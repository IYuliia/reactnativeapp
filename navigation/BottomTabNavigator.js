import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import LogoutButton from "../components/logoutButton";
import BackButton from "../components/backButton";
import HomeScreen from "../screens/HomeScreen";
import PostsScreen from "../screens/PostsScreen";
import CreatePostsScreen from "../screens/CreatePostsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import PostsButton from "../components/PostsButton";
import AddButton from "../components/AddButton";
import ProfileButton from "../components/ProfileButton";
import { colors } from "../styles/global";
import MapScreen from "../screens/MapScreen";
import CameraScreen from "../screens/CameraScreen";

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
      {/* <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: "Home",
          headerRight: () => (
            <LogoutButton
              onPress={() => {
                console.log("logout button");
              }}
            />
          ),
          
        //   headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
        //   tabBarIcon: ({ focused }) => (
        //     <Ionicons
        //       name="heart-circle"
        //       size={32}
        //       color={focused ? "red" : "black"}
        //     />
        //   ),
          tabBarActiveTintColor: "red",
          tabBarButton: () => null,
        })}
      /> */}
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
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          tabBarLabel: "",
          tabBarStyle: { display: 'none' },
          headerLeft: () => <BackButton />,
          tabBarIcon: ({ focused }) => (
            <AddButton
              onPress={() => {
                console.log("add button");
              }}
            />
          ),
        }}
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
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          title: "Камера",
          tabBarLabel: "",
          tabBarStyle: { display: 'none' },
          headerLeft: () => <BackButton />,
          tabBarButton: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
