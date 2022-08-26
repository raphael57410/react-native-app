import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

export const AppLoader = () => (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
        <LottieView source={require('../images/car-loader.json')} autoPlay loop/>
    </View>
);

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'rgba(0,0,0,0.3)',
        zIndex:1
    }
})
