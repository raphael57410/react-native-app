import React, { useRef } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Camera, useCameraDevices } from "react-native-vision-camera";
import Colors from "../Colors";
import { setPicture } from "../ressources/picture/picutre";
import Notification from "../utils/notification";

const CameraView = ({navigation}) => {
    const camera = useRef<Camera|null>(null)
    const devices = useCameraDevices()
    const device = devices.back

    if (device === undefined) return <Text>Chargement</Text>
    return (
        <>
        <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            photo={true}

        />
            <Pressable style={styles.button} onPress={async ()=> {
                if (camera){
               const photo = await camera.current!.takePhoto()
               setPicture(photo)
                navigation.goBack()
                await Notification("PHOTO","Merci d'avoir pris une photo ! &#127881")
                }
            }}>
            </Pressable>
        </>
    );
}

const styles = StyleSheet.create({
    button:{
        width:50,
        height:50,
        borderRadius:25,
        borderWidth:4,
        borderColor:Colors.white,
        position:"absolute",
        alignSelf:"center",
        bottom:5

    }
})
export default CameraView;