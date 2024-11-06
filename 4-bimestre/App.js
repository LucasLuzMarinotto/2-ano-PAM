import React, {useState} from 'react'; //importa React e o hook useState
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'; //import das funcionalidades

//Função principal do aplicativo

const App = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  //Função que é chamada quando o botão é pressionado

  const handleLogin = () => {
    //Aqui, você poderia adicionar lógica para autenticar o usuário

    alert('Usuario: ${userName}\rsenha: ${password}');
    //Exibe um alerta com as informações
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

      <Button title="Entrar" onPress={handleLogin}/> {/*Botão Login */}
    </View>
  )
};

// Definição de Estilos

const styles = StyleSheet.create({
  container:{
    flex: 1, //Ocupar toda a altura da tela
    justifyContent: 'center', //Centraliza os itens verticalmente
    alignItens: 'center', //Centraliza os itens horizontalmente
    backgroundColor: '#f5f5f5', //Cor de fundo cinza claro
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
  }
});

export default App;