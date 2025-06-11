import { View, StatusBar, Switch, Text } from 'react-native';

// IMPORT USESTATE
import { useState } from "react";

// IMPORT STYLES
import { styles } from './src/styles/styles';

export default function App() {

  const [favorites, setFavorites] = useState(false)
  const [completed, setCompleted] = useState(false)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FILTROS</Text>

      <View style={styles.filter}>
        <Text style={styles.text}>Mostrar Favoritos</Text>
        <Switch
          value={favorites}
          onValueChange={() => setFavorites(!favorites)}
          thumbColor={favorites ? "green" : "white"}
          trackColor={{ false: "gray", true: "gray" }}
        />
      </View>

      <View style={styles.filter}>
        <Text style={styles.text}>Mostrar Tarefas Completadas</Text>
        <Switch
          value={completed}
          onValueChange={() => setCompleted(!completed)}
          thumbColor={completed ? "green" : "white"}
          trackColor={{ false: "gray", true: "gray" }}
        />

      </View>

      <Text style={{ marginTop: 10 }}>Filtros Ativos</Text>
      {favorites && <Text style={{ fontSize: 20, marginTop: 10, fontWeight: "bold" }}>Favoritos!</Text>}
      {completed && <Text style={{ fontSize: 20, marginTop: 10, fontWeight: "bold" }}>Tarefas Completas!</Text>}

      <StatusBar hidden></StatusBar>
    </View>

  );
}
