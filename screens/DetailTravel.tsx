import React, { useEffect, useState } from "react";
import {
    useColorScheme,
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Modal,
    Linking, Image, Button,
} from "react-native";
import Colors from "../Colors";
import Geolocation, { GeoPosition } from "react-native-geolocation-service";
import MapView, { Circle, Marker } from "react-native-maps";
import { Camera } from "react-native-vision-camera";
import { usePicture } from "../ressources/picture/picutre";
import { ModalComponent } from "../Components/ModalComponent";
import { setSettingsModal } from "../ressources/modal/settingsModal";

const DetailTravel = ({route,navigation}) => {
    const isDarkmode = useColorScheme() === "dark";
    const [location,setLocation] = useState<GeoPosition>();
    const [modalVisible,setModalVisible] = useState(false);
    const user = route.params
    const picture = usePicture()

    useEffect(()=> {
        Geolocation.getCurrentPosition(
            (position) => {
                setLocation(position)
            },
            (error) => {
                // See error code charts below.
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    },[])

    return (
        <ScrollView contentInsetAdjustmentBehavior={"automatic"}>
            <Text style={styles.name}>{user.name}</Text>
            {location && <MapView
              loadingEnabled
                style={styles.map}
                initialRegion={{
                    latitude: 46.232192999999995,
                    longitude: 2.209666999999996,
                    latitudeDelta: 10,
                    longitudeDelta: 10,
                }}>
              <Circle center={{
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
              }} radius={100000}/>
              <Marker
                pinColor={Colors.primary}
                coordinate={
                  {
                      latitude: location.coords.latitude,
                      longitude: location.coords.longitude,
                  }
              }/>
            </MapView>
            }
            <View style={styles.cameraContainer}>
                    <Button title="Camera" style={styles.camera} onPress={async()=> {
                        const permission = await Camera.getCameraPermissionStatus()

                        if (permission=== "authorized"){
                            navigation.navigate("Camera")
                        }else {
                            const newCameraPermission = await Camera.requestCameraPermission();
                            if (newCameraPermission === "denied") setModalVisible(true);
                        }
                    }}></Button>
            </View>
            {picture && <Image source={{ uri: `file://${picture?.path}` }} style={{ height: 100, width: 100 }}/>}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "black",
        borderRadius:20,
        borderWidth:1,
        borderColor:Colors.primary,
        margin:10,
        elevation:2,
        padding: 10,
        height:50,
        shadowColor:"#52006A",
        backgroundColor:"white",
    },
    name:{
        color:Colors.black,
        fontSize:50,
        textAlign:"center",
    },
    cameraContainer:{
        height:300,
        alignItems:"center",
        justifyContent:"center",
    },
    camera:{
        color: Colors.black,
        borderWidth:1,
        borderColor:Colors.primary,
        borderRadius:20,

    },
    map: {
        height:200,
    },
});
export default DetailTravel;