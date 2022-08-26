import React from "react";
import { View,Text } from "react-native";
import Colors from "../Colors";

const Conducteur = () => {
    return (
        <View>
            <Text style={styles.text}>conducteur</Text>
        </View>
    );
}

const styles = {
    text:{
        color: Colors.black
    }
}
export default Conducteur;