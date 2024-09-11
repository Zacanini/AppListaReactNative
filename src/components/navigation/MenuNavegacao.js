import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TelaPrincipal } from "../../view/TelaUm";
import {Lista} from "../../view/TelaDois"
// Importar TelaDois se necessário
// import TelaDois from "../../view/TelaDois";

const Stack = createStackNavigator();

const MenuNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="TelaPrincipal">
                <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} options={{ headerShown: false }} />
                <Stack.Screen name="Lista" component={Lista} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MenuNavigator;
