import React, { useEffect } from "react";
import {
     Button,
    StatusBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Accueil from "./screens/Accueil";
import Passager from "./screens/Passager";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Conducteur from "./screens/Conducteur";
import DetailTravel from "./screens/DetailTravel";
import { AppLoader } from "./Components/AppLoader";
import { useLoader } from "./ressources/loader/loader";
import CameraView from "./screens/Camera";
import { ModalComponent } from "./Components/ModalComponent";

const App = () => {
  const Stack = createNativeStackNavigator();
  const loaderValue = useLoader();



  useEffect(()=> {

  },[])

  return (
    <SafeAreaProvider>
        <ModalComponent />
        <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Accueil" component={Accueil}/>
          <Stack.Screen name="Passager" component={Passager}/>
          <Stack.Screen name="Conducteur" component={Conducteur}/>
          <Stack.Screen name="Detail Travel" component={DetailTravel}/>
          <Stack.Screen name="Camera" component={CameraView}/>
        </Stack.Navigator>
      </NavigationContainer>
        {loaderValue && <AppLoader/>}
    </SafeAreaProvider>
  );
};

export default App;
