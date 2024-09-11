// BarraSuperior.js
import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Avatar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const MyComponent = () => (
  <Appbar.Header style={styles.header}>
    <Appbar.Content title="Menu" titleStyle={styles.title} />
    <Avatar.Text size={40} label="MZ" style={styles.avatar} />
  </Appbar.Header>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6A0D91', // Cor de fundo do Appbar
    borderBottomWidth: 0, // Remove borda inferior
    elevation: 4, // Sombras no Android
    shadowColor: '#000', // Cor da sombra no iOS
    shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra no iOS
    shadowOpacity: 0.25, // Opacidade da sombra no iOS
    shadowRadius: 3.84, // Raio da sombra no iOS
    height: 80, // Altura da barra (ajuste conforme necessário)
    width: '100%', // Largura total da tela
    position: 'absolute', // Garante que o Appbar fique no topo
    top: 0, // Posiciona o Appbar no topo
    left: 0, // Alinha o Appbar à esquerda
    marginTop:30,
  },
  title: {
    color: '#FFF', // Cor do texto
    fontSize: 20, // Tamanho da fonte
    fontWeight: 'bold', // Negrito
  },
  avatar: {
    backgroundColor: '#FFF', // Cor de fundo do avatar
    marginRight: 10, // Espaço à direita do avatar
  },
});

export default MyComponent;
