import { View, StyleSheet, TouchableOpacity } from "react-native";
import MapView, {MAP_TYPES, Marker} from "react-native-maps";
import { colors } from "../styles/global";
import Ionicons from "@expo/vector-icons/Ionicons";

import * as Location from 'expo-location';
import { useEffect, useState } from "react";


const MapScreen = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [mapStyle, setMapStyle] = useState(MAP_TYPES.STANDARD);

    const handleMapStyleChange = () => {
      if (mapStyle === MAP_TYPES.STANDARD) {
        setMapStyle(MAP_TYPES.SATELLITE);
      } else {
        setMapStyle(MAP_TYPES.STANDARD);
      }
    }

    console.log(location);
  
    useEffect(() => {
      (async () => {
        
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
  
        let location = await Location.getCurrentPositionAsync({});
        const coords = {
            latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        }
        setLocation(coords);
      })();
    }, []);


  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          latitude: location ? location.latitude : 37.78825,
          longitude: location ? location.longitude : -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType={mapStyle}
        minZoomLevel={15}
        showsUserLocation={true}
        onMapReady={() => console.log("Map is ready")}
        onRegionChange={() => console.log("Region change")}
      >
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton} onPress={handleMapStyleChange}>
            <Ionicons name="map" size={24} color={colors.white}/>
          </TouchableOpacity>
        </View>
        {location != null && (
        <Marker
          title="I am here"
          description='Hello'
          coordinate={location}
          onPress={() => {console.log("marker is pressed")}}
        // draggable={true}
        //   onDragEnd={(e) => console.log(e.nativeEvent.coordinate)}
        />
    )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: "100%",
    height: "100%",
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.orange,
    alignItems: "center",
    justifyContent: "center",
  },
  actionsContainer: {
    position: "absolute",
    right: 20, 
    bottom: 20,
    gap: 16,
  },
});

export default MapScreen;
