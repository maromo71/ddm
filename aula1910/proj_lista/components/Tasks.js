import { useState } from "react"
import { StyleSheet, View, StatusBar, Text, TextInput, Button, FlatList } from "react-native";


export default function Tasks(){
    const [tarefa, setTarefa] = useState('')
    const [lista, setLista] = useState([])

    function adicionarTarefa(){
        if(tarefa==='') return;
        setLista([...lista, {id: Date.now().toString(), texto: tarefa}])
        setTarefa('')
    }

    return(
        <View style={styles.container}>
            <StatusBar barStyle={"dark-content"} />
            <Text style={styles.titulo}>
                Minhas Tarefas
            </Text>
            <View style={styles.inputContainer}> 
                <TextInput 
                    style={styles.input}
                    placeholder="Digite uma tarefa..."
                    onChangeText={(valor) => setTarefa(valor)}
                    value={tarefa}
                />
                <Button title="Adicionar" onPress={adicionarTarefa} />
            </View>

            <FlatList
                data={lista}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <View style={styles.itemLista}>
                        <Text>{item.texto}</Text>
                    </View>
                )}
                ListEmptyComponent={<Text>Nenhuma tarefa cadastrada</Text>}
            />
        </View>   

    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50, // Evita o notch do celular
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  itemLista: {
    padding: 15,
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
    borderRadius: 5,
  }
});