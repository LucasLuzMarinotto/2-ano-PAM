import React, {useState} from 'react'; //importa React e o hook useState
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'; //import das funcionalidades

//Função principal do aplicativo

const App = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [numberPhone, setNumberPhone] = useState('');

  //Função que é chamada quando o botão Login é pressionado

  const handleLogin = () => {
    //Aqui, você poderia adicionar lógica para autenticar o usuário

    alert('Usuario: ${userName}\rsenha: ${password}');
    //Exibe um alerta com as informações
  }

  //Função chamada quando o Botão Limpar é pressionado

  const handleClean = () => {

    userName = '';
    password = '';
    numberPhone = '';

  }

  return(
    //Contêiner principal que centraliza o conteúdo
    <View style={styles.container}>
      <Text style={styles.title}>Tela de login</Text>

      <TextInput
        style = {styles.input}
        placeholder="Nome de Usuário"
        value={userName}
        onChangeText={setUserName}
      />

      <TextInput
        style = {styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style = {styles.input}
        placeholder="Número"
        secureTextEntry={true}
        value={numberPhone}
        onChangeText={setNumberPhone}
      />

      <View>
        <Button title="Entrar" onPress={handleLogin}/> {/*Botão Login */}
        <Button title="Limpar" onPress={handleClean}/> {/*Botão Limpar*/}
      </View>

    </View>
  )
};

// Definição de Estilos

const styles = StyleSheet.create({
  container:{
    flex: 1, //Ocupar toda a altura da tela
    justifyContent: 'center', //Centraliza os itens verticalmente
    alignItems: 'center', //Centraliza os itens horizontalmente
    backgroundColor: '#B7D5E5', //Cor de fundo azul bebe
  },
  subContainer:{
    justifyContent:'space-between',
    alignItems: 'center',
  },
  title:{
    fontSize: 24, //Tamanho da fonte do título
    fontWeight: 'bold', //Texto em negrito
    marginBottom: 20, //Espaço abaixo do título
  },
  input:{
    height: 40, //Altura do campo de entrada
    borderColor: '#ccc', // Cor da borda do campo de entrada
    borderWidth: 1, //largura da borda
    marginBottom: 15, //Espaço abaixo do campo de entrada,
    paddingHorizontal: 10, // Espaçamento interno do campo
    widht: '80%',  // Largura do campo de entrada
    backgroundColor: '#FFFFFF', //cor de fundo do input: Branco
  }
});

export default App;