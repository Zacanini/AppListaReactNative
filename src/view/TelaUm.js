// TelaPrincipal.js
import { StyleSheet, Image, View, Text } from "react-native";
import { Button } from 'react-native-paper';
import MyComponent from '../components/BarraSuperior';

export const TelaPrincipal = ({ navigation }) => {
    const callTelaDois = () => {
        navigation.navigate('Lista');
    };

    return (
        <View style={styles.container}>
            <MyComponent />
            <View style={styles.content}>
                <Text style={styles.titulo}>Bem vindo {'\n'} a sua lista de tarefas</Text>
                <Image style={styles.image} source={require('../../assets/imagemApp.png')} />
                <Button
                    style={styles.btn}
                    icon="format-list-bulleted"
                    mode="contained"
                    onPress={callTelaDois}
                >
                    Lista de Tarefas
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 70, // Adiciona um espaço no topo para a barra
    },
    titulo: {
        fontSize: 28,
        padding: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    image: {
        width: 400,
        height: 400,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    btn: {
        width: '80%',
        justifyContent: 'center',
    },
});
