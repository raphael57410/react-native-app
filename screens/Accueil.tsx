import React from "react";
import { Button, SafeAreaView, ScrollView, StyleSheet, useColorScheme, View } from "react-native";
import Header from "../Components/Header";
import Colors from "../Colors";

const Accueil = ({navigation}) => {
    const isDarkmode = useColorScheme() === "dark";

    const backgroundStyle = {
        flex: 1
    };


    return (
        <SafeAreaView style={styles.container}>
            <View
                style={backgroundStyle}>
                <Header/>
                <View style={{
                    flex:1
                }}>
                    <View style={{margin:5}}>
                        <Button title="Conducteur" color={"#067eaa"} onPress={()=> navigation.navigate("Conducteur")}></Button>
                    </View>
                    <View style={{margin:5,borderRadius:20}}>
                        <Button title="Passager" color={"#067eaa"} onPress={()=> navigation.navigate("Passager")}></Button>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})
export default Accueil;