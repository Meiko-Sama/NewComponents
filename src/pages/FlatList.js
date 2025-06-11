import { View, StatusBar, FlatList, Text } from 'react-native';

// IMPORT STYLES
import { styles } from './src/styles/styles';

export default function App() {

  const dados = [
    { id: 1, nome: "Thayna 😊", color: "#82bf9a" },
    { id: 2, nome: "Sarah Nicole 🤩", color: "#6aa882" },
    { id: 3, nome: "Julia Custodio 😜", color: "#4e8a65" },
    { id: 4, nome: "Julia Borgo 🥳", color: "#3e7553" },
  ];

  return (
    <View style={styles.container}>
      {/* DATA - Todos os dados */}
      {/* KEYEXTRACTOR - A partir dessa função eu vou retirar o ID */}
      {/* RENDERITEM -  Renderiza os dados escolhidos */}
      <FlatList
        data={dados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.box, { backgroundColor: item.color }]}>
            <Text style={styles.text}>{item.nome}</Text>
          </View>
        )}
      />
      <StatusBar hidden></StatusBar>
    </View>

  );
}

