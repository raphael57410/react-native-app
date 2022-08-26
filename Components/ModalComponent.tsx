import React from "react";
import { Button, Linking, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../Colors";
import { setSettingsModal, useModal } from "../ressources/modal/settingsModal";

export function ModalComponent() {
    const  modal  = useModal()
    return (
        <Modal visible={modal} transparent={false} animationType={"slide"}>
            <Text style={{color:"black"}}>Pour utiliser cette fonctionalité vous devez accepter les autorisations</Text>
                <Button style={styles.text} title={"Changer les autorisations"} onPress={async()=> {
                    await Linking.openSettings();
                    setSettingsModal(false)
                }}/>
            <Button style={styles.text} title={"Retour"} onPress={()=> {
                    setSettingsModal(false)
                }}/>
        </Modal>
    );
}

const styles = StyleSheet.create({
    text:{
        color: Colors.black
    }
})
