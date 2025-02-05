import { createStackNavigator } from "@react-navigation/stack";

import BackButton from "../components/backButton";
import PostsScreen from "../screens/PostsScreen";
import MapScreen from "../screens/MapScreen";
import CommentsScreen from "../screens/CommentsScreen";

const Stack = createStackNavigator();

const HandlePostNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Posts"
      screenOptions={{
        headerRightContainerStyle: { paddingRight: 16 },
        headerLeftContainerStyle: { paddingLeft: 16 },
      }}
    >
      <Stack.Screen 
        name="Posts" 
        component={PostsScreen} 
        options={{
          headerShown: false,   
        }}
      />
      
      <Stack.Screen 
        name="Comments" 
        component={CommentsScreen} 
        options={({ navigation }) => ({
          title: "Коментарі",  
          headerShown: true,   
          headerLeft: () => (
            <BackButton onPress={() => navigation.goBack()} />
          ),
          tabBarStyle: { display: "none" },
        })}
      />
      
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={({ navigation }) => ({
          title: "Мапа", 
          headerShown: true,  
          headerLeft: () => (
            <BackButton onPress={() => navigation.goBack()} />
          ),
          tabBarStyle: { display: "none" },
        })}
      />
    </Stack.Navigator>
  );
};

export default HandlePostNavigator;
