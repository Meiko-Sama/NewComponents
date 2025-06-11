import { Text, View, ScrollView } from 'react-native';

// IMPORT STYLES
import { styles } from './src/styles/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={[styles.box, { backgroundColor: "#8578d6" }]}>
          <Text style={styles.text}> Primeira Caixa!</Text>
        </View>

        <View style={[styles.box, { backgroundColor: "#7d72c4" }]}>
          <Text style={styles.text}> Segunda Caixa!</Text>
        </View>

        <View style={[styles.box, { backgroundColor: "#7065b8" }]}>
          <Text style={styles.text}> Terceira Caixa!</Text>
        </View>

        <View style={[styles.box, { backgroundColor: "#6459ab" }]}>
          <Text style={styles.text}> Quarta Caixa!</Text>
        </View>

        <View style={[styles.box, { backgroundColor: "#584e9c" }]}>
          <Text style={styles.text}> Quinta Caixa!</Text>
        </View>

      </ScrollView>
    </View>

  );
}

