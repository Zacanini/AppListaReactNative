

import { StyleSheet, TouchableOpacity, View,Text } from "react-native";

export const Lista = () => {

    return(
        <View style={styles.container}>

            <Text style={styles.titulo}>Sua Lista</Text>

            
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    titulo:{
        fontSize:28,
        padding:15,
        fontWeight:'bold',
    },
    btn:{
        padding:15,
        backgroundColor:'#bb0',
        borderRadius:10,
    }

})