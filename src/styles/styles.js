import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bb93c9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  box: {
    height: 250,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: "black",
    fontSize: 15,
    marginRight: 10,

  },

  title: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  filter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10
  },
});

