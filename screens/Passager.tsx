import React, { useEffect, useState } from "react";
import {
    useColorScheme,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    PermissionsAndroid,
    Platform, Linking,
} from "react-native";
import axios, { AxiosResponse } from "axios";
import { TUsers } from "../types/types";
import Colors from "../Colors";
import { setLoader } from "../ressources/loader/loader";
import { setSettingsModal } from "../ressources/modal/settingsModal";

const Passager = ({navigation}) => {
    const isDarkmode = useColorScheme() === "dark";
    const [usersList, setUsersList] = useState<TUsers[]>();

    const checkPermission = async ()=> {
       const permission =  await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        return permission
    }

    useEffect(()=> {
        setLoader(true)
        checkPermission().then(permission => {
            if (permission ==="granted"){
                axios.get<TUsers[]>("https://jsonplaceholder.typicode.com/users")
                    .then( (response:AxiosResponse<TUsers[]>) => {
                        setUsersList(response.data)
                        setLoader(false)
                    });
            }else {
                setSettingsModal(true)
            }
        })

    },[])

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            {
                usersList?.map(user =>
                <TouchableOpacity key={user.id} onPress={()=> navigation.navigate("Detail Travel",user)}>
                    <View>
                        <Text style={styles.text}>{user.name}</Text>
                    </View>
                </TouchableOpacity>
                )
            }
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
});
export default Passager;